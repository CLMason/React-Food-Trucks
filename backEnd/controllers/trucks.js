const mongoose = require("mongoose");
const Truck = mongoose.model("Truck");
console.log("inside trucks.js file");

class TruckController {
  getAll(req, res){
    // to get all the trucks that exist we have to go through the truck model
    Truck.find()
        .then(trucks => res.json(trucks))
        .catch(err => res.json(err));
  }
  create(req, res){
    console.log(req.body);
    let truck = new Truck(req.body);
    truck.save()
        .then(() => res.json({status: "okay"}))
        .catch(err => res.json(err));
  }
  getOne(req, res) {
    Truck.findOne({_id: req.params._id})
      .then(truck => res.json(truck))
      .catch(err => res.json(err));
  }
  review(req, res) {
    // pushing into the reviews array with the new review
    Truck.findByIdAndUpdate({_id: req.params._id}, {$push : {reviews: req.body}}, {runValidators: true})
    .then(() => res.json({status: "okay"}))
    .catch(err => res.json(err));

  }
}
module.exports = new TruckController();