var express = require('express');
var router = express.Router();


const {
  createLocation,
  deleteLocation,
  getAllLocations
} = require("./controller/locationController");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(true);
});


router.post('/add-location', createLocation);
router.delete('/delete-location-by-id/:id', deleteLocation);
router.get('/get-all-locations', getAllLocations);


module.exports = router;
