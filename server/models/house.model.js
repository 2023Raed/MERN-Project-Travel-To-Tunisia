const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
    
      imageOfHouse: {
        type: String,
        required: [true, "{PATH} must be present"],
        
    },
    adresse: {
        type: String,
        required: [true, "adresse  is required"],
        minlength:[6,"Adresse must be 6 characters or longer"]
      },
      numberOfRoom: {
        type: Number,
        required: [true, "number Of Room is required"],
        
      },
      numberOfFloor: {
        type: Number,
        required: [true, "number Of Floor is required"],
        
      },

      Price: {
        type: Number,
        required: [true, "Price is required"],
      },
      

}, {timestamps: true})



  const House = mongoose.model('House', HouseSchema);
  module.exports = House;
