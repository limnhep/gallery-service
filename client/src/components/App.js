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
    if (!this.state.done) {
      return (
        <>
          Loading
        </>
      );
    }

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
            ModalToggle={() => this.setState({ features: !features })}
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
