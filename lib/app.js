require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require ('superagent');
const app = express();
const morgan = require('morgan');
const { mungedLocation } = require('../utils');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

// setup authentication routes to give user an auth token
// creates a /auth/signin and a /auth/signup POST route. 
// each requires a POST body with a .email and a .password
// app.use('/auth', authRoutes);

// everything that starts with "/api" below here requires an auth token!
// app.use('/api', ensureAuth);

// and now every request that has a token in the Authorization header will have a `req.userId` property for us to see who's talking
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
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.get('/animals', async(req, res) => {
  try {    
    res.json(data.rows);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/error'));

module.exports = app;
