const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let countySchema = new Schema(
  {
    fips: {
      type: String
    },
    density_magnitude: {
      type: Number
    }
  },
  { collection: "DensityMapped" }
);

module.exports = mongoose.model("DensityMapped", countySchema);