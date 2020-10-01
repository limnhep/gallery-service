const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoriteslist = new Schema({
    userID: Number,
    savedList: [],
})

const FavoritesList = mongoose.model('FavoritesList' , favoriteslist); 

module.exports = {
    FavoritesList,
}