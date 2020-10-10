const listing = {
  listingID: 5,
  title: 'Lush Deluxe Jungle Loft Villa with Rice Field Views',
  name: 'Entire villa',
  location: 'Ubud, Bali, Indonesia',
  description: `Experience the charm of tropical living lifestyle from this modern, loft-style designer's villa, featuring a lush backdrop of tropical jungle and Balinese rice field. 
Indulge in the home spa, prepare a meal in the super-size kitchen, or lounge your heart away at the villa's splendid open-air deck before taking a plunge into the picturesque infinity pool. 
So beautiful that it has been featured on Airbnb's official Instagram account, and named as one of the coolest Airbnb spots in Bali by The Culture Trip and Qantas Travel Insider and many more publications. Enjoy!`,
  quote: 'Our infinity pool is definitely a gem while avid home-cooks will surely enjoy our open-plan kitchen!',
  hostname: 'Risyiana',
  rating: '4.93',
  guests: 8,
  bedrooms: 3,
  beds: 4,
  bathrooms: 2,
  superhost: true,
  reviews: new Array(84).fill(1).length,
  gallery: {
    featured: ['https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/feat-1.png', 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/feat-2.png'],
    rooms: [
      {
        name: 'Living room',
        amenities: ['TV', 'DVD player', 'Game console', ' Ceiling fan', 'Terrace'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/1-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/1-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/1-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/1-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/1-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/1-6.png',
            comment: null,
          }],
      },
      {
        name: 'Full kitchen',
        amenities: ['Ceiling fan', 'Breakfast table' , 'Convection oven'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-6.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-7.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/2-8.png',
            comment: 'A favorite feature in our villa, this unique kitchen has oversized islands and a view to the tropical jungle',
          }
        ],
      },
      {
        name: 'Bedroom 1',
        amenities: ['King bed', 'Air conditioning', 'Terrace', 'Balcony'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/3-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/3-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/3-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/3-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/3-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/3-6.png',
            comment: null,
          }],
      },
      {
          name: 'Bedroom 2',
          amenities: ['King bed', 'Day bed', 'En suite bathroom', 'Air conditioning', 'Mountain view'],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/4-1.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/4-2.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/4-3.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/4-4.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/4-5.png',
              comment: null,
            }],
      },
      {
          name: 'Bedroom 3',
          amenities: ['Bunk bed', 'Air conditioning', 'Terrace, Balcony'],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/5-1.png',
              comment: null,
            },              {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/5-2.png',
              comment: null,
            },              {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/5-3.png',
              comment: null,
            },],
      },
      {
        name: 'Full bathroom 1',
        amenities: ['Dryer', 'Rain shower', 'Bidet', 'Soaking tub', 'Walk-in shower'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/6-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/6-2.png',
            comment: null,
          }],
      },
      {
        name: 'Full bathroom 2',
        amenities: ['Rain shower', 'Bidet', 'Walk-in shower'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/7-1.png',
            comment: 'An arch of fragrant clematis leads to the front door.',
          }],
      },
      {
        name: 'Dining room',
        amenities: ['Formal dining area', 'Breakfast table', 'Ceiling fan', 'Mountain view'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/8-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/8-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/8-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/8-4.png',
            comment: null,
          }],
      },
      {
        name: 'Entrance',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/9-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/9-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/9-3.png',
            comment: null,
          },
        ],
      },
      {
        name: 'Recreation area',
        amenities: ['Mountain view', 'Game console', 'Terrace', 'Day bed'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/10-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/10-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/10-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/10-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/10-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/10-6.png',
            comment: null,
          },
        ],
      },
      {
          name: 'Exterior',
          amenities: ['Pool toys', 'Sun loungers', 'Outdoor seating', 'Private pool'],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/11-1.png',
              comment: null,
            },
          ],
      },
      {
          name: 'Outdoor space',
          amenities: ['BBQ grill', 'Pet rabbits'],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/12-1.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/12-2.png',
              comment: null,
            },
          ],
      },
      {
          name: 'Other',
          amenities: ['Mountain view', 'Terrace', '360 view'],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/13-1.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/13-2.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/13-3.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing5/13-4.png',
              comment: 'The loft features a 6-m high ceiling and expansive view of the surroundings',
            },
          ],
      }
    ],
  },
};

module.exports = listing;
