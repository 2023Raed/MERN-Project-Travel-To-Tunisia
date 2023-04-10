const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, " name is required"],
      },
      lastName: {
        type: String,
        required: [true, "last name  must be present"],
        
    },
    phoneNumber: {
        type: String,
        required: [true, "phone number phone  is required"],
        
      },

      dateReservation:{
        type: String,
        required: [true, "date phone  is required"],
      },

      dateEndReservation:{
        type: String,
        required: [true, "date phone  is required"],
      },


   
      

}, {timestamps: true});



  const Reservation = mongoose.model('Car', ReservationSchema);
  module.exports = Reservation;
