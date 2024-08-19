const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("Database Connected"))
    .catch((error) => {
        console.log("Database connection failed");
        console.log("Error:", error);
        process.exit(1);
    });
}

module.exports = connect;