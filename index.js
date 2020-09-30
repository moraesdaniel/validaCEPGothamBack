const express = require("express");
const validaCEPGotham = express();
const zipCodeController = require("./zipCode/zipCodeController.js");
const port = 1940;
const bodyParser = require("body-parser");
const cors = require("cors");
global.db = require("./database/db.js");

validaCEPGotham.use(bodyParser.urlencoded({extended: false}));
validaCEPGotham.use(bodyParser.json());
validaCEPGotham.use(cors());

validaCEPGotham.listen(port, () => {
    console.log("ValidaCEPGotham listening at port " + port);
});

validaCEPGotham.get("/zipcodes", (req, res) => {
    zipCodeController.findAll((error, zipCodes) => {
        if (error) { return res.json({error}); }
        
        res.send(zipCodes);
    });
});

validaCEPGotham.post("/zipcode", (req, res) => {
    var {zipCode, city} = req.body;

    if (!(zipCodeController.formatIsValid(zipCode))) {
        return res.send({error: "O formato do CEP é inválido"});
    }

    if (!(zipCodeController.rangeIsValid(zipCode))) {
        return res.send({error: "O CEP deve ser um número maior que " + zipCodeController.minRange + " e menor que " + zipCodeController.maxRange});
    }

    zipCodeController.findOne(zipCode, (error, result) => {
        if (error) { return res.send({error: error.message}) };

        if (result.length > 0) {
            return res.send({error: "Esse CEP já está cadastrado para a cidade de " + result[0].city});
        } else {
            zipCodeController.add({zipCode, city}, (error, result) => {
                if (error) { return res.send({error: error.message }) }
        
                res.send({msg: "CEP inserido com sucesso!"});
            });
        }
    });
});