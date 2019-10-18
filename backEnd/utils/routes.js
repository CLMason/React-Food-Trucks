const Trucks = require("../controllers/trucks");

module.exports = function(app){
    app.get("/api/trucks", Trucks.getAll);
    app.post("/api/trucks", Trucks.create);
    app.get("/api/trucks/:_id", Trucks.getOne)
    app.post("/api/trucks/:_id/review", Trucks.review);
}