const mongoose = require('mongoose')

const OtherSchema = new mongoose.Schema({
    
      images: {
        type: String,
        required: [true, "{PATH} must be present"],
        
    },
    description: {
        type: String,
        required: [true, "description  is required"],
      },
      model: {
        type: String,
        required: [true, "model  is required"],
      },
     

      Price: {
        type: Number,
        required: [true, "Price is required"],
      },
      

}, {timestamps: true})



  const Other = mongoose.model('Other', OtherSchema);
  module.exports = Other;
