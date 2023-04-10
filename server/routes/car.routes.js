const Carcontroller = require ("../controllers/car.controllers")

module.exports = (app) =>{

    app.get("/api/cars", Carcontroller.findAllCar);  
    
    app.post("/api/cars", Carcontroller.createCar); 
    
    app.get("/api/cars/:id",Carcontroller.findOneCar); 
    
    app.put("/api/cars/:id/edit",Carcontroller.updateCar); 
    
    app.delete("/api/cars/:id/delete",Carcontroller.deleteCar);
    
    }