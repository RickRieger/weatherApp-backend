const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  locationCity: {
    type: String,
  },
  locationCountry: {
    type: String,
  }
  
});

module.exports = mongoose.model("location", locationSchema);