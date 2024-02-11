// distribute data to mongo
const mongoose = require("mongoose");
const CountiesList = require("./compiled/CountiesList");
const density = require("./models/density");
require('dotenv').config()

const loadDocuments = async () => {
    mongoose.connect(process.env.MONGO_STRING, { useUnifiedTopology: true, useNewUrlParser: true });

    const connection = mongoose.connection;
    
    connection.once("open", function() {
      console.log("MongoDB database connection established successfully");
    });
    await density.deleteMany({})
    await density.insertMany(CountiesList)
    console.log("\tDensity collection loaded")
    return
}

module.exports = {loadDocuments}