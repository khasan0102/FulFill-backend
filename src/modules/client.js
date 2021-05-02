const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({path: path.join(__dirname, '..', '..', '.env')});

async function client() {
    return await mongoose.connect(process.env.BASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

module.exports = client
