const chai = require("chai");
const zipCodeController = require("../zipCode/zipCodeController.js");
const assert = chai.assert;

describe("Testando o formato e o número do CEP", () => {
    it("Teste: Deve dizer que o número do CEP é inválido", () => {
        assert.equal(zipCodeController.rangeIsValid(99999), false);
    });

    it("Teste: Deve dizer que o número do CEP é inválido", () => {
        assert.equal(zipCodeController.rangeIsValid(1000000), false);
    });

    it("Teste: Deve dizer que o número do CEP é válido", () => {
        assert.equal(zipCodeController.rangeIsValid(123456), true);
    });

    it("Teste: Deve dizer que o formato do CEP é inválido", () => {
        assert.equal(zipCodeController.formatIsValid(121368), false);
    });

    it("Teste: Deve dizer que o formato do CEP é inválido", () => {
        assert.equal(zipCodeController.formatIsValid(122363), false);
    });

    it("Teste: Deve dizer que o formato do CEP é válido", () => {
        assert.equal(zipCodeController.formatIsValid(123456), true);
    });

    it("Teste: Deve dizer que o formato do CEP é válido", () => {
        assert.equal(zipCodeController.formatIsValid(122331), true);
    });
})