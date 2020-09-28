const express = require("express");
const validaCEPGotham = express();
const zipCodeController = require("./zipCode/zipCodeController.js");
const port = 1940;
const bodyParser = require("body-parser");
global.db = require("./database/db.js");

validaCEPGotham.use(bodyParser.urlencoded({extended: false}));
validaCEPGotham.use(bodyParser.json());

validaCEPGotham.listen(port, () => {
    console.log("ValidaCEPGotham listening at port " + port);
});

validaCEPGotham.get("/zipcodes", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    zipCodeController.findAll((error, zipCodes) => {
        if (error) { return res.json({error}); }
        
        res.send(zipCodes);
    });
});

validaCEPGotham.post("/zipcode", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    var {zipCode, city} = req.body;

    if (!(zipCodeController.formatIsValid(zipCode))) {
        return res.json({error: "O formato do CEP é inválido"});
    }

    if (!(zipCodeController.rangeIsValid(zipCode))) {
        return res.json({error: "O CEP deve ser um número maior que " + zipCodeController.minRange + " e menor que " + zipCodeController.maxRange});
    }

    await zipCodeController.findOne(zipCode, (error, result) => {
        if (error) { return res.json({error})};

        if (result.length > 0) {
            return res.json({error: "Esse CEP já está cadastrado para a cidade de " + result[0].city});
        }
    });

    zipCodeController.add({zipCode, city}, (error, result) => {
        if (error) { return res.json({error}); }

        res.json({msg: "CEP inserido com sucesso!"});
    });
});