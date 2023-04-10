const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    nameOfCar: {
        type: String,
        required: [true, " name is required"],
        minlength:[2,"Password must be 2 characters or longer"]
      },
      imageOfCar: {
        type: String,
        required: [true, "{PATH} must be present"],
        
    },
    model: {
        type: String,
        required: [true, "model is required"],
        minlength:[2,"Password must be 2 characters or longer"]
      },
      color: {
        type: String,
        required: [true, "color is required"],
        minlength:[2,"Password must be 2 characters or longer"]
      },
      YearOfConstruction: {
        type: Number,
        required: [true, "Year of construction is required"],
        
      },

      Price: {
        type: Number,
        required: [true, "price is required"],
      },
      

}, {timestamps: true});



  const Car = mongoose.model('Car', CarSchema);
  module.exports = Car;

