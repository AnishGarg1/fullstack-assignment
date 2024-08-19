const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    // Here id will be provided by default as _id
    title: {
        type: String,
        required: true,
        trim: true,
    },
    normalizedTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    link: {
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("Card", cardSchema);