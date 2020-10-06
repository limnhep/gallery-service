const { getFavoritesList, addFavoritesList } = require('../models/favorites');

exports.getFavorites = (request, response) => {
    getFavoritesList(1, (err, data) => {
        if (err){
            response.status(403).send({msg: 'Error in fetching from database', err});
        } else {
            response.status(200).send(data);
        }
    })
};

exports.addFavorites = (request, response) => {
    const { favoritesList } = request.body;
    addFavoritesList(1, favoritesList, (err, data) => {
        if (err){
            response.status(403).send({msg: 'Error in updating database', err})
        } else {
            response.status(200).send(data)
        }
    })
}

exports.addFavoritesCategory = (request, response) => {
    const { newFavoritesList } = request.body;
    addFavoritesList(1, newFavoritesList, (err, data) => {
        if (err){
            response.status(403).send({msg: 'Error in updating database', err})
        } else {
            response.status(200).send(data)
        }
    })
}
