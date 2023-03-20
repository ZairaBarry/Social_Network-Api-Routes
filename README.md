# Social_Network-Api-Routes

## Description

This project is API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.
API for social network uses NosQL database so that the website can handle large amounts of unstractured data.

## Installation

In order to use the app you have to install  Express.jsLinks to an external site. and MongooseLinks to an external site. packages. In order to   install mongoose, please use npm i mongoose@6.9.2.


## Usage

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Tests

In order to run the application run the command node index.js

## License

his application is licensed under MIT.
