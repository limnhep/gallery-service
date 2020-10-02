/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GalleryMain from './GalleryMain.jsx';
import GalleryFeatures from './GalleryFeatures.jsx';
import GalleryModal from './GalleryModal.jsx';
import requestListing from '../api/Listings';
import { requestFavorites, addFavorites, addFavoritesCategory } from '../api/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      features: false,
      imagesArray: [],
      listing: null,
      favorites: [],
      modal: 0,
      selectedImage: '',
      modalState: 0,
      savedListing: false,
    };
    this.setModalImage = this.setModalImage.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleModalState = this.handleModalState.bind(this);
    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  async componentDidMount() {
    let listing;
    let favorites;
    try {
      listing = await requestListing();
      favorites = await requestFavorites();
    } catch (err) {
      throw new Error({ err });
    } finally {
      const { rooms } = listing.gallery;
      const imagesArray = [];
      rooms.forEach((room) => {
        imagesArray.push(...room.images);
      });
      this.setState({
        imagesArray, listing, favorites: favorites.savedList, done: true,
      }, () => {
        this.checkFavorite();
      });
    }
  }

  setModalImage(url) {
    this.setState({ selectedImage: url, modal: true, features: false });
  }

  checkFavorite() {
    const { favorites, listing } = this.state;
    for (let i = 0; i < favorites.length; i += 1) {
      const arr = favorites[i].listingID;
      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j][0] === listing.listingID) {
          this.setState({ savedListing: i });
        }
      }
    }
  }

  async handleAddCategory(categoryName) {
    const polishedName = categoryName.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    const { favorites } = this.state;
    for (let i = 0; i < favorites.length; i += 1) {
      if (favorites[i].name === polishedName) {
        return;
      }
    }
    const newCategoryObject = {
      time: 'Any time',
      name: polishedName,
      stay: 'Nothing saved yet',
      listingID: [],
    };
    const newFavoriteList = [...favorites, newCategoryObject];
    let results;
    try {
      results = await addFavoritesCategory(newFavoriteList);
    } catch (err) {
      throw new Error(err);
    } finally {
      this.setState({ favorites: results.savedList });
    }
  }

  async handleAddFavorite(favoritesList, closeModal = false) {
    let results;
    try {
      results = await addFavorites(favoritesList);
    } catch (err) {
      throw new Error(err);
    } finally {
      if (closeModal) {
        this.setState({ favorites: results.savedList, modalState: 0, savedListing: false }, () => {
          this.checkFavorite();
        });
      } else {
        this.setState({ favorites: results.savedList, savedListing: false }, () => {
          this.checkFavorite();
        });
      }
    }
  }

  handleModalState(mode) {
    if (mode === 0) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
    this.setState({ modalState: mode });
  }

  handleToggleFavorite(operation, index = null) {
    const {
      favorites, listing, savedListing,
    } = this.state;
    if (operation === 'remove') {
      const newArr = [];
      for (let i = 0; i < favorites[savedListing].length; i += 1) {
        if (favorites[savedListing].listingID[i][0] !== listing.listingID) {
          newArr.push(favorites[savedListing].listingID[i]);
        }
      }
      favorites[savedListing].listingID = newArr;
    } else if (savedListing === false) {
      favorites[index].listingID.push([listing.listingID, listing.gallery.featured[0]]);
    } else if (savedListing !== false && index !== null) {
      const newArr = [];
      favorites[index].listingID.forEach((currentListing) => {
        if (currentListing[0] !== listing.listingID) {
          newArr.push(currentListing);
        }
      });
      favorites[index].listingID = newArr;
    }
    this.handleAddFavorite(favorites);
  }

  render() {
    if (!this.state.imagesArray.length) {
      return (
        <>
          Loading
        </>
      );
    }

    const renderFeatures = () => {
      const {
        favorites, features, listing, modal, modalState, savedListing,
      } = this.state;
      if (!features && !modal) {
        return (
          <GalleryMain
            listing={listing}
            favorites={favorites}
            handleModalState={this.handleModalState}
            handleAddCategory={this.handleAddCategory}
            handleToggleFavorite={this.handleToggleFavorite}
            modalState={modalState}
            savedListing={savedListing}
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
      const {
        favorites, modal, modalState, imagesArray, savedListing, selectedImage,
      } = this.state;
      if (modal) {
        return (
          <GalleryModal
            changeImage={(image) => this.setState({ selectedImage: image })}
            closeModal={() => this.setState({ modal: false, features: true })}
            favorites={favorites}
            images={imagesArray}
            handleModalState={this.handleModalState}
            handleAddCategory={this.handleAddCategory}
            handleToggleFavorite={this.handleToggleFavorite}
            modalState={modalState}
            savedListing={savedListing}
            selectedImage={selectedImage}
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
