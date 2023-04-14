const mongoose = require("mongoose")
const umbrellaSchema = mongoose.Schema({
color: String,
cost: Number,
size: String

})
module.exports = mongoose.model("umbrella",
umbrellaSchema)