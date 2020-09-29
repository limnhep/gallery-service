const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const folderPath = path.join(__dirname, '..');

app.use('/', express.static(folderPath + '/client/public'))

//MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/airbnb_plus', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB Connected!');
}).catch((err) => {
    console.log('MongoDB Connection Error');
});

//ROUTES
const listingsRoute = require('./routes/listing');

app.use('/listing', listingsRoute);

const PORT = 5000;
app.listen(PORT, (err) => {
    if (err){
        throw err;
    } else {
        console.log(`Server started on PORT: ${PORT}`);
    }
})