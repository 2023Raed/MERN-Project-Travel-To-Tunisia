const Other = require('../models/other.model');
const mongoose = require('mongoose');

module.exports.findAllOther = (req, res) => {
    Boat.find()
        .sort({type:"ASC"})
        .then(allBoat => res.json(allBoat))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function create pet

module.exports.createOther = (req, res) => {
    Other.create(req.body)
        .then(newlyBoat => res.json({ Other: newlyBoat }))
        .catch(err => res.status(400).json(err));
}


// find one pet

module.exports.findOneOther = (req, res) => {
    Other.findOne({ _id: req.params.id })
        .then(house => res.json(house))
        .catch(err => res.json({ message: 'Something went wrong on reading one product', error: err }));

}

// update one pet
module.exports.updateOther = (req, res) => {
    Other.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updated => res.json({ Other: updated }))
        .catch(err => res.status(400).json({ message: 'Something went wrong on updating one product', error: err }));
}

// delete a pet

module.exports.deleteOther = (req, res) => {
    Other.findOneAndDelete({ _id: req.params.id })
        .then(deleted => res.json({ Boat: deleted }))
        .catch(err => res.json({ message: 'Something went wrong on deleting one product', error: err }));
}