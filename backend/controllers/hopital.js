// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.
const createError = require('http-errors');
const mongoose = require('mongoose');

const Hopital = require('../models/hapital');

const getHopital = (req, res, next) => {
    // get all Hopital
    Hopital.find()
        .then(hopital => res.status(200).json(hopital))
        .catch(err => res.status(400).json("Error getting Hopital"))
}

const postHopital = (req, res, next) => {
    console.log(req.body);
    // destructuring Hopital Model
    const {
        nom,
        address,
        altitude,
        latitude
    } = req.body

    const hopital = {
        nom,
        address,
        altitude,
        latitude
    }
    Hopital.create(hopital)
        .then(() => res.status(200).json({ message: "Hopital created successfully" }))
        .catch(err => res.status(400).json({ message: "Error creating an Hopital" }))
}

// show one fleet
const showHopital = (req, res, next) => {
    Hopital.findById(req.params.id)
        .then(hopital => res.status(200).json(hopital))
        .catch(err => res.status(400).json('Error getting the Hopital'));
}
const updateHopital = (req, res, next) => {
        Hopital.findById(req.params.id)
            .then(hopital => {
                hopital.nom = req.body.nom
                hopital.address = req.body.address
                hopital.altitude = req.body.altitude
                hopital.latitude = req.body.latitude


                hopital.save()
                    .then(() => res.status(200).json('Hopital Updated'))
                    .catch(err => res.status(400).json('Error updating Hopital'))
            })
            .catch(err => res.status(400).json('Error Getting Hopital' + err))
    }
    // delete
const deleteHopital = (req, res, next) => {
    Hopital.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(200).json('Hopital Deleted')
        })
        .catch(err => res.status(400).json('Error deleting Hopital' + err))
}


module.exports = {
    getHopital,
    postHopital,
    showHopital,
    updateHopital,
    deleteHopital

}