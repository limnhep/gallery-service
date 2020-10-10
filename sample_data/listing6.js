const listing = {
  listingID: 6,
  title: 'Charming Beach House on Grand Traverse Bay',
  name: 'Entire cottage',
  location: 'Elk Rapids, Michigan, United States',
  description: `Explore 100 feet ( linear frontage NOT depth ) of private beach on beautiful, crystal-clear Lake Michigan - enjoy this 1930s cabin with modern amenities and stylish interiors. Start the day on the shoreline yoga deck, relax at the beach all day and gather around the fire pit for s'mores while enjoying a beautiful nightly sunset. The cabin has been recently updated and has just about everything you need for a weekend or weeklong getaway! The cabin comfortably accommodates 2-6 people with 3 queen beds.  
  ***DUE TO MOTHER NATURES HIGH WATER LEVELS THE BEACH MAY BE LIMITED THIS YEAR . HOWEVER, IT IS STILL COMPLETELY ACCESSIBLE TO ENJOY . BEACH FRONTAGE REFERS TO LINEAR NOT DEPTH`,
  quote: null,
  hostname: 'Ryer',
  rating: '4.95',
  guests: 6,
  bedrooms: 2,
  beds: 2,
  bathrooms: 1,
  superhost: false,
  reviews: new Array(165).fill(1).length,
  gallery: {
    featured: ['https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/feat-1.png', 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/feat-2.png'],
    rooms: [
      {
        name: 'Living room',
        amenities: ['Indoor fireplace', 'Netflix', 'Ceiling fan', 'Samsung Frame TV'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/1-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/1-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/1-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/1-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/1-5.png',
            comment: null,
          }],
      },
      {
        name: 'Full kitchen',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/2-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/2-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/2-3.png',
            comment: null,
          }
        ],
      },
      {
        name: 'Bedroom 1',
        amenities: ['Queen bed'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/3-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/3-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/3-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/3-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/3-5.png',
            comment: null,
          }],
      },
      {
          name: 'Bedroom 2',
          amenities: ['Queen bed', 'Beach view'],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/4-1.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/4-2.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/4-3.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/4-4.png',
              comment: null,
            }],
      },
      {
          name: 'Full bathroom',
          amenities: [],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/5-1.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/5-2.png',
              comment: null,
            }],
      },
      {
        name: 'Dining room',
        amenities: ['Beach view'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/6-1.png',
            comment: null,
          }],
      },
      {
        name: 'Entry',
        amenities: ['Sonos'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/7-1.png',
            comment: null,
          }],
      },
      {
        name: 'Exterior',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/8-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/8-2.png',
            comment: null,
          }],
      },
      {
        name: 'Patio',
        amenities: ['Outdoor seating', 'Beachfront'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/9-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/9-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/9-3.png',
            comment: null,
          },
        ],
      },
      {
        name: 'Outdoor common area',
        amenities: ['Sun loungers', 'Outdoor seating', 'Beachfront', 'Waterfront', 'Paddleboard and Kayak'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/10-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/10-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/10-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/10-4.png',
            comment: null,
          },
        ],
      },
      {
          name: 'Other',
          amenities: ['Queen Bed'],
          images: [
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/11-1.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/11-2.png',
              comment: null,
            },
            {
              url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing6/11-3.png',
              comment: 'Super comfortable Casper queen mattress',
            },
          ],
      }
    ],
  },
};

module.exports = listing;
