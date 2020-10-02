const mongoose = require('mongoose');
const { Schema } = mongoose;

const favorites = new Schema({
    userID: Number,
    savedList: [],
})

const Favorites = mongoose.model('Favorites' , favorites); 

module.exports = {
    Favorites,
}