const Reservation = require('../models/other.model');
const mongoose = require('mongoose');

module.exports.findAllBoat = (req, res) => {
    Reservation.find()
        .sort({type:"ASC"})
        .then(allReservation => res.json(allReservation))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function create 

module.exports.createBoat = (req, res) => {
    Reservation.create(req.body)
        .then(newReservation => res.json({ Other: newReservation }))
        .catch(err => res.status(400).json(err));
}


// find one 

module.exports.findOneBoat = (req, res) => {
    Reservation.findOne({ _id: req.params.id })
        .then(house => res.json(house))
        .catch(err => res.json({ message: 'Something went wrong on reading one product', error: err }));

}

// update 
module.exports.updateBoat = (req, res) => {
    Reservation.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updated => res.json({ Other: updated }))
        .catch(err => res.status(400).json({ message: 'Something went wrong on updating one product', error: err }));
}

// delete 

module.exports.deleteBoat = (req, res) => {
    Reservation.findOneAndDelete({ _id: req.params.id })
        .then(deleted => res.json({ Boat: deleted }))
        .catch(err => res.json({ message: 'Something went wrong on deleting one product', error: err }));
}