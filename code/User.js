const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// Using the schema for a model named User
module.exports = mongoose.model("User", userSchema)