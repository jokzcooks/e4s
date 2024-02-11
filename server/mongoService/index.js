// distribute data to mongo
const mongoose = require("mongoose");
const density = require("./models/density");
require('dotenv').config()

class MongoService {
    constructor() {
        mongoose.connect(process.env.MONGO_STRING, { useUnifiedTopology: true, useNewUrlParser: true });

        this.connection = mongoose.connection;
        
        this.connection.once("open", function() {
          console.log("MongoDB database connection established successfully");
        });
    }

    async getDensity() {
        return density.find()
    }
}

module.exports = MongoService