const Othercontroller = require ("../controllers/other.controllers")

module.exports = (app) =>{

    app.get("/api/others", Othercontroller.findAllOther);  
    
    app.post("/api/others", Othercontroller.createOther); 
    
    app.get("/api/others/:id",Othercontroller.findOneOther); 
    
    app.put("/api/others/:id/edit",Othercontroller.updateOther); 
    
    app.delete("/api/others/:id/delete",Othercontroller.deleteOther);
    
    }