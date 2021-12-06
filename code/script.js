const mongoose = require("mongoose")
const express = require("express")
const Router = require("./routes.js")
const User = require("./User.js")

// "npm run devStart" in terminal to launch nodemon server

const app = express();
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(express.json());
app.use(Router);

const username = 'ian';
const password = 'C3zCZM0Y4vGt';
const cluster = 'cluster0.k4yms';
const dbName = 'MongooseBasics';
// The URL of the MongoDB.
const mongoDB = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(mongoDB)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})





