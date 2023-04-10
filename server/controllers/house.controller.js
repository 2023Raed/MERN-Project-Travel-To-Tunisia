const House = require('../models/house.model');
const mongoose = require('mongoose');

module.exports.findAllHouses = (req, res) => {
    House.find()
        .sort({type:"ASC"})
        .then(allHouse => res.json(allHouse))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function create pet

module.exports.createHouse = (req, res) => {
    House.create(req.body)
        .then(newlyHouse => res.json({ House: newlyHouse }))
        .catch(err => res.status(400).json(err));
}


// find one pet

module.exports.findOneHouse = (req, res) => {
    House.findOne({ _id: req.params.id })
        .then(house => res.json(house))
        .catch(err => res.json({ message: 'Something went wrong on reading one product', error: err }));

}

// update one pet
module.exports.updateHouse = (req, res) => {
    House.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updated => res.json({ pet: updated }))
        .catch(err => res.status(400).json({ message: 'Something went wrong on updating one product', error: err }));
}

// delete a pet

module.exports.deleteHouse = (req, res) => {
    House.findOneAndDelete({ _id: req.params.id })
        .then(deleted => res.json({ House: deleted }))
        .catch(err => res.json({ message: 'Something went wrong on deleting one product', error: err }));
}