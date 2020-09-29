import axios from 'axios';

const requestListing = (id = null) => new Promise((resolve, reject) => {
  if (id) {
    axios.get('http://localhost:5000/listing', { query: { id } }).then((results) => {
      resolve(results.data[0]);
    }).catch((err) => {
      reject(err);
    });
  } else {
    axios.get('http://localhost:5000/listing').then((results) => {
      resolve(results.data[0]);
    }).catch((err) => {
      reject(err);
    });
  }
});

export default requestListing;
