const express = require("express")
const userModel = require("./User.js")
const app = express();


//We create a route /add_user to add a new user to the database. 
//We parse the content to be saved to the database using the line const user = new userModel(request.body)
app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body)

    //We use a try/catch block to save the object to the database using the .save() method.
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error)
    }
})

//We create a route /users to retrieve all the users saved using the /add_user route. 
//We collect these users from the database using the .find() method. 
//We then use a try/catch block to ‘send’ the users to this endpoint.
app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;