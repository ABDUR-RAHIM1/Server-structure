const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    ques: { type: String, require: true },
    ans: { type: String, require: true },
    options: { type: [String], require: true },
    date: { type: Date, default: Date.now }
})


const qestionsModel = mongoose.model("qestionsModel", questionSchema);

module.exports = qestionsModel;