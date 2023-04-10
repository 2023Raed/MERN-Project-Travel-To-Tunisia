const Reservationcontroller = require ("../controllers/other.controllers")

module.exports = (app) =>{

    app.get("/api/reservation", Reservationcontroller.findAllOther);  
    
    app.post("/api/reservation", Reservationcontroller.createOther); 
    
    app.get("/api/reservation/:id",Reservationcontroller.findOneOther); 
    
    app.put("/api/reservation/:id/edit",Reservationcontroller.updateOther); 
    
    app.delete("/api/reservation/:id/delete",Reservationcontroller.deleteOther);
    
    }