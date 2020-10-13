/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import GalleryMain from './GalleryMain.jsx';
import GalleryFeatures from './GalleryFeatures.jsx';
import GalleryModal from './GalleryModal.jsx';
import GalleryNavBar from './GalleryNavBar.jsx';
import requestListing from '../api/Listings';
import { requestFavorites, addFavorites, addFavoritesCategory } from '../api/Favorites';

import {
  AppTopContainer,
  SaveSharePopUpContainer,
  SaveSharePopUpTextBox,
  SaveSharePopUpStatusMain,
  SaveSharePopUpStatusSecondary,
  SaveSharePopUpRevertButton,
} from '../../styled/galleryMain';

import {
  CssReset,
} from '../../styled/global';

class App extends Component {
  constructor() {
    super();
    this.state = {
      features: false,
      imagesArray: [],
      bedroomsArray: [],
      imagesIndexMap: [],
      listing: null,
      favorites: [],
      modal: 0,
      selectedImage: '',
      modalState: 0,
      savedListing: false,
      scrollToImageID: null,
      savedListModalPopUp: false,
      triggerSaveModal: false,
    };
    this.setModalImage = this.setModalImage.bind(this);
    this.setScrollToImg = this.setScrollToImg.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleModalState = this.handleModalState.bind(this);
    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
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
      const bedroomsArray = [];
      rooms.forEach((room) => {
        imagesArray.push(...room.images);
        if (room.name.toLowerCase().includes('bedroom')) bedroomsArray.push(room);
      });
      this.setState({
        bedroomsArray, imagesArray, listing, favorites: favorites.savedList,
      }, () => {
        this.randomizeIndex();
        this.checkFavorite();
        const node = document.getElementById('turn-off'); // PROXY SERVER CODE ONLY
        if (node !== null) {
          node.style.display = 'block';
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('====================================================');
    // console.log('====================================================');
    // console.log('====================================================');
    // console.log('prevState');
    // console.log(prevState);
    // console.log('currentState');
    // console.log(this.state);
    // console.log('-----------------------------------------------------');
    if (prevState.features === true && this.state.features === false && this.state.modal === 0) {
      const node = document.getElementById('turn-off'); // PROXY SERVER CODE ONLY
      // console.log('DID UPDATE CHECK');
      // console.log('NODE' + node);
      // console.log('Prev State. Features');
      // console.log(prevState.features);
      // console.log('This state. Features');
      // console.log(this.state.features);
      // console.log('This state. Modal');
      // console.log(this.state.modal);
      if (node !== null) {
        console.log(node);
        console.log('toggled');
        node.style.display = 'block';
      }
    }
  }

  setModalImage(url) {
    this.setState({ selectedImage: url, modal: true, features: false });
  }

  setScrollToImg(id) {
    this.setState({ scrollToImageID: id });
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

  randomizeIndex() {
    const randomImagesMap = {};
    const { imagesArray } = this.state;
    let numberOfImages = 0;

    while (numberOfImages < 5) {
      const randomImageIndex = Math.floor(Math.random() * imagesArray.length);
      if (randomImagesMap[randomImageIndex] === undefined) {
        randomImagesMap[randomImageIndex] = true;
        numberOfImages += 1;
      }
    }
    this.setState({ imagesIndexMap: Object.keys(randomImagesMap) });
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

  async handleAddFavorite(favoritesList, closeModal = false, id = null, triggerSaveModal) {
    let results;
    try {
      results = await addFavorites(favoritesList);
    } catch (err) {
      throw new Error(err);
    } finally {
      if (closeModal) {
        this.setState({
          favorites: results.savedList, modalState: 0, savedListing: false, savedListModalPopUp: id, triggerSaveModal,
        }, () => {
          this.checkFavorite();
          this.renderSaveModalStatusPopUp();
          this.handleModalState(0);
        });
      } else {
        this.setState({
          favorites: results.savedList, savedListing: false, savedListModalPopUp: id, triggerSaveModal,
        }, () => {
          this.checkFavorite();
          this.renderSaveModalStatusPopUp();
          this.handleModalState(0);
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

  handleScrollTo(className) {
    const node = document.getElementById(className);
    if (node !== null) {
      const scrollToPosition = window.scrollY + node.getBoundingClientRect().top - 100;
      window.scrollTo({
        top: scrollToPosition,
        left: 0,
        behavior: 'smooth',
      });
    }
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
      this.handleAddFavorite(favorites, true, savedListing, true);
    } else if (savedListing === false) {
      favorites[index].listingID.push([listing.listingID, listing.gallery.featured[0]]);
      this.handleAddFavorite(favorites, true, savedListing, true);
    } else if (savedListing !== false && index !== null) {
      const newArr = [];
      favorites[index].listingID.forEach((currentListing) => {
        if (currentListing[0] !== listing.listingID) {
          newArr.push(currentListing);
        }
      });
      favorites[index].listingID = newArr;
    }
    this.handleAddFavorite(favorites, true, savedListing, true);
  }

  renderSaveModalStatusPopUp() {
    setTimeout(() => {
      this.setState({ triggerSaveModal: false });
    }, 3000);
  }

  render() {
    const {
      imagesArray, savedListModalPopUp, triggerSaveModal, bedroomsArray, imagesIndexMap, favorites, features, listing, modal, modalState, savedListing, scrollToImageID, selectedImage,
    } = this.state;

    if (!imagesArray.length) {
      return (
        <>
        </>
      );
    }

    const renderMainPage = (
      <>
        <GalleryNavBar
          savedListing={savedListing}
          setFeaturePage={() => this.setState({ features: !features })}
          handleModalState={this.handleModalState}
          handleToggleFavorite={this.handleToggleFavorite}
          handleScrollTo={this.handleScrollTo}
        />
        <GalleryMain
          listing={listing}
          favorites={favorites}
          bedroomsArray={bedroomsArray}
          imagesArray={imagesArray}
          imagesIndexMap={imagesIndexMap}
          modalState={modalState}
          savedListing={savedListing}
          handleModalState={this.handleModalState}
          handleAddCategory={this.handleAddCategory}
          handleToggleFavorite={this.handleToggleFavorite}
          setScrollToImg={this.setScrollToImg}
          modalToggle={() => this.setState({ features: !features })}
        />
      </>
    );

    const renderGalleryFeatures = (
      <CSSTransition
        in={features && !modal}
        classNames="slide"
        timeout={600}
        appear
        unmountOnExit
      >
        <GalleryFeatures
          listing={listing}
          setFeaturePage={() => this.setState({ features: !features })}
          setModalImage={(url) => this.setModalImage(url)}
          scrollToImageID={scrollToImageID}
          setScrollToImg={this.setScrollToImg}
        />
      </CSSTransition>
    );

    const renderModal = (
      <GalleryModal
        changeImage={(image) => this.setState({ selectedImage: image })}
        closeModal={() => this.setState({ modal: 0, features: true })}
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

    const SaveModalStatusPopUp = (
      <CSSTransition
        in={triggerSaveModal}
        classNames="slideUp"
        timeout={800}
        appear
        enter
        exit
        unmountOnExit
      >
        <SaveSharePopUpContainer id="pop-up-modal">
          <SaveSharePopUpTextBox>
            <SaveSharePopUpStatusMain>
              {savedListing !== false && `Saved to ${favorites[savedListing].name}`}
              {(savedListModalPopUp !== false) && `Removed from ${favorites[savedListModalPopUp].name}`}
            </SaveSharePopUpStatusMain>
            <SaveSharePopUpStatusSecondary>
              Any time
            </SaveSharePopUpStatusSecondary>
          </SaveSharePopUpTextBox>
          <SaveSharePopUpRevertButton onClick={savedListing >= 0 ? () => this.handleToggleFavorite('add', savedListing) : () => this.handleToggleFavorite('add', savedListModalPopUp)}>
            { savedListing >= 0 ? 'Change' : 'Undo'}
          </SaveSharePopUpRevertButton>
        </SaveSharePopUpContainer>
      </CSSTransition>
    );

    return (
      <AppTopContainer>
        <CssReset />
        <Helmet>
          <title>{this.state.listing.title}</title>
        </Helmet>
        {(!features && !modal) && renderMainPage}
        {renderGalleryFeatures}
        {modal > 0 && renderModal}
        {SaveModalStatusPopUp}
      </AppTopContainer>
    );
  }
}

export default App;
