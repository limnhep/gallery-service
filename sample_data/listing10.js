const listing = {
  listingID: 10,
  title: 'Loft Estiloso em meio à Natureza,com Visual Deslumbrante da Lagoa e do Mar',
  name: 'Entire loft',
  location: 'Florianópolis, Santa Catarina, Brazil',
  hostname: 'Alvaro',
  avatar: null,
  rating: '4.97',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  superhost: true,
  reviews: new Array(180).fill(1).length,
  gallery: {
    featured: ['https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/feat-1.png', 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/feat-2.png'],
    rooms: [
      {
        name: 'Living room',
        amenities: ['Indoor fireplace', 'TV', 'Balcony'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/1-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/1-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/1-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/1-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/1-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/1-6.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/1-7.png',
            comment: null,
          }
        ],
      },
      {
        name: 'Full kitchen',
        amenities: ['Mini fridge'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/2-1.png',
            comment: null,
          }
        ],
      },
      {
        name: 'Bedroom',
        amenities: ['Double bed', 'Air conditioning'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/3-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/3-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/3-3.png',
            comment: null,
          }],
      },
      {
          name: 'Full bathroom',
          amenities: ['Walk-in shower'],
          images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/4-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/4-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/4-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/4-4.png',
            comment: 'Banheiro',
          }],
      },
      {
          name: 'Exterior',
          amenities: [],
          images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/5-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing10/5-1.png',
            comment: null,
          }],
      }
    ],
  },
};

module.exports = listing;
