/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Gallery from './Gallery.jsx';
import GalleryFeatures from './GalleryFeatures.jsx';
import GalleryModal from './GalleryModal.jsx';
import requestListing from '../api/fetchListing';

class App extends Component {
  constructor() {
    super();
    this.state = {
      features: false,
      imagesArray: [],
      listing: [],
      modal: false,
      done: false,
      selectedImage: '../public/listing2/room1/pic4.png',
    };
    this.setModalImage = this.setModalImage.bind(this);
  }

  componentDidMount() {
    requestListing().then((listing) => {
      const { rooms } = listing.gallery;
      const imagesArray = [];
      rooms.forEach((room) => {
        imagesArray.push(...room.images);
      });
      this.setState({ imagesArray, listing, done: true });
    }).catch((err) => {
      console.log(err);
    });
  }

  setModalImage(url) {
    this.setState({ selectedImage: url, modal: true, features: false });
  }

  render() {
    console.log(this.state);
    if (!this.state.done) {
      return (
        <>
          Loading
        </>
      );
    }
    // const AppComponents = (
    //   <div className="app">
    //     <div>Navbar</div>
    //     <div>Title</div>
    //     <div>Room and Host - Brief Info</div>
    //     <div>Room - Description</div>
    //     <div>Room - Small Gallery</div>
    //     <div>Room - Sleeping Arrangements</div>
    //     <div>Calendar and Booking</div>
    //     <div>AIR BNB PLUS INSPECTED</div>
    //     <div>Room - Amenities</div>
    //     <div>Reviews</div>
    //     <div>Location</div>
    //     <div>Owner's Background</div>
    //     <div>Room - Things to Know</div>
    //     <div>More places to stay</div>
    //     <div>Explore other options</div>
    //     <div>Footer - Links</div>
    //     <div>Footer - Bar</div>
    //   </div>
    // );

    const renderFeatures = () => {
      const { features, listing, modal } = this.state;
      if (!features && !modal) {
        return (
          <Gallery
            listing={listing}
            toggle={() => this.setState({ features: !features })}
          />
        );
      } if (features && !modal) {
        return (
          <GalleryFeatures
            listing={listing}
            toggle={() => this.setState({ features: !features })}
            setModalImage={(url) => this.setModalImage(url)}
          />
        );
      }
      return null;
    };

    const renderModal = () => {
      const { modal, imagesArray, selectedImage } = this.state;
      if (modal) {
        return (
          <GalleryModal
            images={imagesArray}
            selectedImage={selectedImage}
            changeImage={(image) => this.setState({ selectedImage: image })}
            closeModal={() => this.setState({ modal: false, features: true })}
          />
        );
      }
      return null;
    };

    return (
      <>
        <Helmet>
          <title>{this.state.listing.title}</title>
        </Helmet>
        {renderFeatures()}
        {renderModal()}
      </>
    );
  }
}

export default App;
