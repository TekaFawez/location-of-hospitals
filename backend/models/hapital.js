// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

var mongoose = require('mongoose');
// Setup schema
var hopitalSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    altitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },


});
module.exports = mongoose.model('hopital', hopitalSchema)