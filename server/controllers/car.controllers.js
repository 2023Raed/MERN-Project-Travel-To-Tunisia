const Car = require('../models/car.model');
//export different functions that perform the basic CRUD operations using our Pet model
const mongoose = require('mongoose');
// function get all pets
module.exports.findAllCar = (req, res) => {
    Car.find()
        .sort({type:"ASC"})
        .then(allCar => res.json(allCar))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function create pet

module.exports.createCar = (req, res) => {
    Car.create(req.body)
        .then(newlyCar => res.json({ Car: newlyCar }))
        .catch(err => res.status(400).json(err));
}


// find one pet

module.exports.findOneCar = (req, res) => {
    Car.findOne({ _id: req.params.id })
        .then(car => res.json(car))
        .catch(err => res.json({ message: 'Something went wrong on reading one product', error: err }));

}

// update one pet
module.exports.updateCar = (req, res) => {
    Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updated => res.json({ Car: updated }))
        .catch(err => res.status(400).json({ message: 'Something went wrong on updating one product', error: err }));
}

// delete a pet

module.exports.deleteCar = (req, res) => {
    Car.findOneAndDelete({ _id: req.params.id })
        .then(deleted => res.json({ Car: deleted }))
        .catch(err => res.json({ message: 'Something went wrong on deleting one product', error: err }));
}
