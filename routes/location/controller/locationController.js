const Location = require("../model/Location");

async function createLocation(req, res){

  try{
    let createdLocation = new Location({
      locationCity: req.body.locationCity,
      locationCountry: req.body.locationCountry,
    });
    let savedLocation = await createdLocation.save();
    res.json({payload: savedLocation});

  }catch(e){
    res.status(500).json({message: e.message, error: e});

  }
}

async function deleteLocation(req, res){

  try{
  let deletedLocation = await Location.findByIdAndRemove(req.params.id);
  res.json({payload: deletedLocation});

  }catch(e){
   res.status(500).json({message: e.message, error:e});
  }

}

async function getAllLocations(req, res){
  try{
    let allLocations = await Location.find({});
    res.json({ payload: allLocations });
  }catch(e){
    res.status(500).json({ message: e.message, error: e });
  }
}

module.exports ={
  createLocation,
  deleteLocation,
  getAllLocations
}