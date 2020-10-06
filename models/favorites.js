const { Favorites } = require('../database/favorites');

module.exports = {
    getFavoritesList: function(id, callback){
        Favorites.find({ userID: id }, (err, data) => {
            if (err){
                callback(err);
            } else {
                callback(null, data);
            }
        })
    },
    addFavoritesList: function(id, favoritesList, callback){
        Favorites.findOneAndUpdate({ userID: id }, { savedList: favoritesList}, { new: true }, (err, data) => {
            if (err){
                callback(err);
            } else {
                callback(null, data);
            }
        })
    },
}