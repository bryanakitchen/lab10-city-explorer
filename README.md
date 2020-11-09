# Lab 10: Proxy servers and contracts

[City Explorer Trollo Board](https://trello.com/b/z7gfAN0M/city-explorer-api)

## Overview

In today's lab, you will be building a stand-alone back end which will interact with a static front end.

You will have access to view the code base for the client, but will not be able to modify it in any way.

That means you _must fulfil the contract_ that the front end follows. Your back end must respond with data in the correct shape, and must listen for requests at the correct endpoints with the right input.

You will tell the front end the address of your back end. When you follow the trellow board correctly, the front end should be totally functional. 

### Live site:
https://alchemy-city-explorer.herokuapp.com/

### Workflow
- We will be using the [Trello](https://trello.com/home) project management tool for the duration of this project. Here is the link: [City Explorer Trollo Board](https://trello.com/b/z7gfAN0M/city-explorer-api)
- To maximize your experience with Trello, you should create a free Trello account by clicking on the `Sign Up` button.
- This Trello board contains all of the features required to complete this lab assignment.
- Also on the Settings tab, click the "Filter" link to view just the current day
- Review the user stories and analyze the feature requests and requirements in the lab.
- Within each story, note the acceptance criteria ("Given ... When ... Then...") and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.

### Sample data

For the first few tickets, you'll use sample data, included in the `./sample-data` directory here.
### Munging functions

Note that you should have a suite of functions that take in the response bodies and return objects in the shape directed in the trello tickets.

### Heroku deployment

Use `git push heroku dev:master` to deploy your back end.

## Your submission on canvas should include a link to your deployed back end on heroku

---
City Explorer Backend APIs
===

## Weatherbit API

https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&key={api-key}

## Location IQ API

https://us1.locationiq.com/v1/search.php?key={api-key}&q={city-name}&format=json

## Yelp API

https://api.yelp.com/v3/businesses/search?latitude={lat}&longitude={lng}

API key provided in header `Authorization` with value of `Bearer <api-key>`

Also see https://www.yelp.com/developers/display_requirements

## Hiking Project API

https://www.hikingproject.com/data/get-trails?lat={lat}&lon={lng}&maxDistance=200&key={api-key}

## Points Break Down

(no need to TDD your endpoints this time around)

Looking For | Points (10)
:--|--:
Deployed location endpoint (with tested munging function) | 4
Deployed weather endpoint (with tested munging function that uses .map) | 2
Deployed trails endpoint (with tested munging function that uses .map) | 2
Deployed reviews endpoint (with tested munging function that uses .map) | 2