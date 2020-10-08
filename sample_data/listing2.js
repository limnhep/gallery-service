const listing = {
  listingID: 2,
  title: 'Fingals Folly— Reimagined Manor Farm Mill House in Dittisham',
  name: 'Tiny house',
  location: 'Dittisham, England, United Kingdom',
  description: "Delight greets the eye in every corner of this home designed by Hungarian artist-architect Andras Kaldor and owner Richard Johnston. From the hallway's built-in Buddha to the array of sailing boats on the upstairs beams, it oozes character, while an upstairs balcony overlooks the grass tennis court. Unwind in a boat seat on the deck over the babbling Barberry Brook — or lounge upstairs in the sitting room, listening to a vinyl played on your record player while the wood burner keeps you warm. Wherever you glance there is character — in the paintings, books, ornaments, art or furnishings.",
  quote: "The Folly is one of my favourite places at Fingals -it was once my home for a whole summer!",
  hostname: 'Sheila',
  rating: '4.84',
  guests: 2,
  bedrooms: 2,
  beds: 2,
  bathrooms: 1,
  superhost: true,
  reviews: new Array(32).fill(1).length,
  gallery: {
    featured: ['https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/feat-1.png', 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/feat-2.png'],
    rooms: [
      {
        name: 'Living room',
        amenities: ['TV', 'DVD player', 'Balcony', 'Day bed ', 'Sofa bed'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-6.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-7.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/1-8.png',
            comment: 'Corner of sitting room with vinyl record player behind chair.',
          }],
      },
      {
        name: 'Full kitchen',
        amenities: ['Heated floors', 'Amazon Echo', 'Netflix', 'Mountain view', 'Convection oven', 'Dishwasher'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/2-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/2-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/2-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/2-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/2-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/2-6.png',
            comment: 'A model boat perches above the cooker. Stairs lead down to the left.',
          },
        ],
      },
      {
        name: 'Bedroom',
        amenities: ['Queen bed', 'En suite bathroom', 'Wooden deck with boat seat over stream'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/3-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/3-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/3-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/3-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/3-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/3-6.png',
            comment: 'Little touches combine to give the bedroom warmth and character.',
          }],
      },
      {
        name: 'Full bathroom',
        amenities: ['Heated towel rack', 'Heated floors', 'Soaking tub', 'Walk-in shower'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/4-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/4-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/4-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/4-4.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/4-5.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/4-6.png',
            comment: 'Characterful corner of the ensuite shower room - to the right is a view of the stream.',
          }],
      },
      {
        name: 'Entrance',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/5-1.png',
            comment: 'An arch of fragrant clematis leads to the front door.',
          }],
      },
      {
        name: 'Recreation area',
        amenities: [],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/6-1.png',
            comment: null,
          }],
      },
      {
        name: 'Exterior',
        amenities: ['Sun loungers', 'Tennis court'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/7-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/7-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/7-3.png',
            comment: null,
          },
        ],
      },
      {
        name: 'Outdoor common area',
        amenities: ['Sun loungers', 'Outdoor kitchen', 'Free parking on premises', 'Washer', 'Terrace'],
        images: [
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/8-1.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/8-2.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/8-3.png',
            comment: null,
          },
          {
            url: 'https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing2/8-4.png',
            comment: 'The gardens are full of private places to sit and extravagant art works.',
          },
        ],
      },
    ],
  },
};

module.exports = listing;
