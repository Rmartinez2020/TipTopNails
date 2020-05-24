/* === Dependencies === */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/* === Define Schema === */
const Anncouncement = new Schema({
    body: String,
    date: Date
});

module.exports =  mongoose.model("announcements", Anncouncement);