const minRange = 100000;
const maxRange = 999999;

function findAll(callback) {
    global.conn.collection("zipCode").find({}).toArray(callback);
}

function findOne(zipCode, callback) {
    global.conn.collection("zipCode").find({zipCode}).toArray(callback);
}

function add(zipCode, callback) {
    global.conn.collection("zipCode").insert(zipCode, callback);
}

function formatIsValid(zipCode) {
    let zipCodePattern = /([0-9])([0-9])(\1)/g;
    let result = zipCode.toString().match(zipCodePattern);
    return !(result);
}

function rangeIsValid(zipCode) {
    return (zipCode > minRange && zipCode < maxRange);
}

module.exports = {
    findAll,
    findOne,
    add,
    formatIsValid,
    rangeIsValid,
    minRange,
    maxRange
}