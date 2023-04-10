const Housecontroller = require ("../controllers/house.controller")

module.exports = (app) =>{

    app.get("/api/house", Housecontroller.findAllHouses);  
    
    app.post("/api/house", Housecontroller.createHouse); 
    
    app.get("/api/house/:id",Housecontroller.findOneHouse); 
    
    app.put("/api/house/:id/edit",Housecontroller.updateHouse); 
    
    app.delete("/api/house/:id/delete",Housecontroller.deleteHouse);
    
    }