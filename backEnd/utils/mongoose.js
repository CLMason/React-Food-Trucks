const mongoose = require("mongoose");

module.exports = function(DB_NAME) {
    console.log('DB_NAME', DB_NAME);
    mongoose.connect(`mongodb://localhost/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true });
    require('../models/truck');
}