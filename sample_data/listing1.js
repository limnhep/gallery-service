const listing = {
  listingID: 1,
  title: 'Peaceful Treehouse with Ocean View',
  name: 'Treehouse',
  location: 'Aptos, California, United States',
  hostname: 'Janiece',
  avatar: null,
  rating: '4.90',
  guests: 6,
  bedrooms: 3,
  beds: 3,
  bathrooms: 1,
  superhost: true,
  reviews: new Array(187).fill(1).length,
  gallery: {
    featured: ['https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/feat-1.png', 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/feat-2.png', 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/feat-3.png'],
    rooms: [
      {
        name: 'Living room',
        amenities: ['Heated floors', 'Smart TV', 'Netflix', 'Mountain view', 'Balcony'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/1-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/1-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/1-3.png',
            comment: null,
          }],
      },
      {
        name: 'Full kitchen',
        amenities: ['Heated floors', 'Amazon Echo', 'Netflix', 'Mountain view', 'Convection oven', 'Dishwasher'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/2-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/2-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/2-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/2-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/2-5.png',
            comment: null,
          }],
      },
      {
        name: 'Bedroom 1',
        amenities: ['Single bed', 'Smart TV', 'Netflix', 'Mountain view', 'Balcony'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/3-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/3-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/3-3.png',
            comment: null,
          }],
      },
      {
        name: 'Bedroom 2',
        amenities: ['Queen bed', 'Heated floors', 'Forest view with a bit of the Ocean'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/4-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/4-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/4-3.png',
            comment: null,
          }],
      },
      {
        name: 'Bedroom 3',
        amenities: ['Queen bed'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/5-1.png',
            comment: null,
          }],
      },
      {
        name: 'Full bathroom',
        amenities: ['Heated floors', 'Washer', 'Dryer', 'Mountain view', 'Walk-in shower'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/6-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/6-2.png',
            comment: null,
          }],
      },
      {
        name: 'Study',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/7-1.png',
            comment: null,
          }],
      },
      {
        name: 'Exterior',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/8-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/8-2.png',
            comment: null,
          }],
      },
      {
        name: 'Patio',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/9-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/9-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/9-3.png',
            comment: 'Read a book on one of three decks - each with a different view.',
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing1/9-4.png',
            comment: 'View of the coastline from our forested valley.',
          }],
      },
    ],
  },
};

module.exports = listing;
