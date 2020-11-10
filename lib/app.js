require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require ('superagent');
const app = express();
const morgan = require('morgan');
const { mungedLocation, mungedWeather, mungedTrail, mungedYelp } = require('../utils');

// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/api/test', (req, res) => {
  res.json({
    message: `in this proctected route, we get the user's id like so: ${req.userId}`
  });
});

app.get('/location', async(req, res) => {
  try {
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${req.query.search}&format=json`;

    const response = await request.get(URL);
    
    const newResponse = mungedLocation(response.body);

    res.json(newResponse);
  } catch(e) {
    res.json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`;

    const response = await request.get(URL);
    
    const newResponse = mungedWeather(response.body);

    res.json(newResponse);
  } catch(e) {
    res.json({ error: e.message });
  }
});

app.get('/trails', async(req, res) => {
  try {
    const URL = `https://www.hikingproject.com/data/get-trails?lat=${req.query.latitude}&lon=${req.query.longitude}&maxDistance=200&key=${process.env.HIKING_KEY}`;
// is maxDistance required?
    const response = await request.get(URL);
    
    const newResponse = mungedTrail(response.body);

    res.json(newResponse);
  } catch(e) {
    res.json({ error: e.message });
  }
});

app.get('/reviews', async(req, res) => {
  try {
    const URL = `https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`;
    
    const response = await request.get(URL)
    .set('Authorization', `Bearer ${process.env.YELP_KEY}`);
    
    const newResponse = mungedYelp(response.body);

    res.json(newResponse);
  } catch(e) {
    res.json({ error: e.message });
  }
});

app.use(require('./middleware/error'));

module.exports = app;
