const express = require('express');
const request = require('request');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();
const port = 3000;

const ItemSchema = new Schema({
    counter: Number
  },{collection:'bchealth'});

const Item = mongoose.model('item', ItemSchema);
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
    'mongodb://mongo:27017/bchealth',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    let lat  = req.query.lat;
    let long = req.query.long;
    let a;
    console.log(lat,long);
    let api = `https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&`+
              `request=GetFeature&typeName=pub%3AWHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG%3A4326&cql_filter=`+
              `INTERSECTS(SHAPE%2CSRID%3D4326%3BPOINT(${long}${lat}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE%2CCMNTY_HLTH_SERV_AREA_NAME&outputFormat=application%2Fjson`;
    request(api, function(error, response, body) {
    let responseBody = JSON.parse(body);
    if(responseBody.numberMatched > 0){
      a = responseBody.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME;
    } else {
      a = '';
    }
   

    
    Item.findByIdAndUpdate('60562bb4d092d0a57c50b286',{$inc:{counter:1}},{upsert: true, new:true})
        .then((data) => console.log("Database count" + data.counter))
        .catch((err) => console.log(err))

    let responseObj = {
        "place": a,
        "totalFeature": responseBody.totalFeatures
    }
    res.json(responseObj);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})