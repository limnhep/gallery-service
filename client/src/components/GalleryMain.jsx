/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import GalleryTitleBar from './subcomponents/GalleryTitleBar.jsx';
import GallerySaveShareModal from './subcomponents/GallerySaveShareModal.jsx';

import {
  GalleryListingTitleContainer,
  MainImageContainer,
  ShowMoreButton,
  ContainerLargeMain,
  ContainerLargeMainImgDIV,
  ContainerLargeMainImg,
  ContainerLargeAlt,
  ContainerLargeAltPair,
  ContainerLargeAltImg,
  ContainerLargeAltImg2,
  ContainerLargeAltPairImg,
  ListingAvatarContainer,
  ListingInfoSuperHost,
  ListingBodyContainer,
  ListingInfoContainer,
  ListingInfoTitle,
  ListingInfoDesc,
  ListingRoomInfo,
  ListingInfoQuote,
  ListingInfoQuoteHost,
  ListingInfoContactHost,
  ListingRoomHeading,
  ListingRoomSecondary,
  ListingInfoHostAvatar,
  ListingInfoGallery,
  ListingInfoGalleryImgDIV,
  ListingInfoGalleryImg,
  ListingInfoGalleryShowButton,
  SleepingArrangementContainer,
  SleepingArrangementHeadingBar,
  SleepingArrangementHeadingTitle,
  SleepingArrangementHeadingNavigation,
  SleepingArrangementHeadingNavigationIndex,
  SleepingArrangementRoomSliderContainer,
  SleepingArrangementRoomSlider,
  SleepingArrangementRoomSliderButton,
  SleepingArrangementRoomSliderButtonIcon,
  SleepingArrangementRoomItem,
  SleepingArrangementRoomImage,
  SleepingArrangementRoomTitle,
  SleepingArrangementRoomFeatures,
  TitleAirbnbIconContainer,
  TitleAirbnbIconMinWidth,
  GalleryDotIcon,
} from '../../styled/galleryMain';

import {
  CssReset,
} from '../../styled/global';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      view: 0,
    };
  }

  handleFindImageInFeatures(id) {
    const { modalToggle, setScrollToImg } = this.props;
    setScrollToImg(id);
    modalToggle();
  }

  handleViewScroll(direction) {
    const { bedroomsArray } = this.props;
    let { view } = this.state;
    const numOfRooms = Math.ceil(bedroomsArray.length / 2);
    const map = {
      2: 100,
      3: 200,
      4: 300,
      5: 400,
    };
    if (direction === 'right') {
      if (view === 0) {
        view = map[numOfRooms];
      } else {
        view -= 100;
      }
    } else if (view === map[numOfRooms]) {
      view -= 100;
    } else {
      view += 100;
    }
    this.setState({ view });
  }

  renderPhotoGalleryMain(listing) {
    const { modalToggle } = this.props;

    if (listing.gallery.featured.length === 3) {
      return [
        <ContainerLargeMain key={Math.random()}>
          <ContainerLargeMainImgDIV>
            <ContainerLargeMainImg onClick={modalToggle} src={listing.gallery.featured[0]} />
          </ContainerLargeMainImgDIV>
        </ContainerLargeMain>,
        <ContainerLargeAlt key={Math.random()}>
          <ContainerLargeAltImg onClick={modalToggle} src={listing.gallery.featured[1]} />
        </ContainerLargeAlt>,
        <ContainerLargeAlt key={Math.random()}>
          <ContainerLargeAltImg2 onClick={modalToggle} src={listing.gallery.featured[2]} />
        </ContainerLargeAlt>,
      ];
    }
    return [
      <ContainerLargeMain key={Math.random()}>
        <ContainerLargeMainImgDIV>
          <ContainerLargeMainImg onClick={modalToggle} src={listing.gallery.featured[0]} />
        </ContainerLargeMainImgDIV>
      </ContainerLargeMain>,
      <ContainerLargeAltPair key={Math.random()}>
        <ContainerLargeAltPairImg onClick={modalToggle} src={listing.gallery.featured[1]} />
      </ContainerLargeAltPair>,
    ];
  }

  renderBodyGalley() {
    const { imagesArray, imagesIndexMap } = this.props;

    return imagesIndexMap.map((imgIndex, index) => (
      <ListingInfoGalleryImgDIV
        index={index}
        key={Math.random()}
        onClick={() => this.handleFindImageInFeatures(imagesArray[imgIndex].url)}
      >
        <ListingInfoGalleryImg
          index={index}
          src={imagesArray[imgIndex].url}
          id={imagesArray[imgIndex].url}
        />
      </ListingInfoGalleryImgDIV>
    ));
  }

  renderSleepingArrangements() {
    const { bedroomsArray } = this.props;

    const combineRoomAmenities = (roomAmenitiesArray) => {
      let string = '';
      for (let i = 0; i < roomAmenitiesArray.length; i += 1) {
        if (i < roomAmenitiesArray.length - 1) {
          string += `${roomAmenitiesArray[i]}, `;
        } else {
          string += roomAmenitiesArray[i];
        }
      }
      return string;
    };

    return bedroomsArray.map((room) => (
      <SleepingArrangementRoomItem key={Math.random()} onClick={() => this.handleFindImageInFeatures(room.images[0].url)}>
        <SleepingArrangementRoomImage src={room.images[0].url} id={room.images[0].url} />
        <SleepingArrangementRoomTitle>
          {room.name}
        </SleepingArrangementRoomTitle>
        <SleepingArrangementRoomFeatures>
          {combineRoomAmenities(room.amenities)}
        </SleepingArrangementRoomFeatures>
      </SleepingArrangementRoomItem>
    ));
  }

  render() {
    const {
      bedroomsArray, favorites, handleModalState, handleAddCategory, handleToggleFavorite, imagesIndexMap, listing, modalState, modalToggle, savedListing,
    } = this.props;
    const { view } = this.state;

    const avatarURL = `https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/listing${listing.listingID}/avatar.jpg`;

    const dotIcon = (<GalleryDotIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/dotdotdot.png" />);
    const superHostSVG = (<ListingInfoSuperHost src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/airbnb-superhost-seeklogo.com.svg" />);

    return (
      <>
        <CssReset />
        <GalleryListingTitleContainer>
          <GalleryTitleBar
            listing={listing}
            savedListing={savedListing}
            handleModalState={handleModalState}
            handleToggleFavorite={handleToggleFavorite}
          />

          <GallerySaveShareModal
            modalState={modalState}
            handleModalState={handleModalState}
            favorites={favorites}
            handleAddCategory={handleAddCategory}
            handleToggleFavorite={handleToggleFavorite}
          />
        </GalleryListingTitleContainer>
        <MainImageContainer>
          {this.renderPhotoGalleryMain(listing)}
          <ShowMoreButton onClick={modalToggle}>
            {dotIcon}
            {' '}
            Show all photos
          </ShowMoreButton>
        </MainImageContainer>
        <TitleAirbnbIconContainer>
          <TitleAirbnbIconMinWidth />
        </TitleAirbnbIconContainer>
        <ListingBodyContainer>
          <ListingInfoContainer>
            <ListingInfoTitle>
              <ListingRoomInfo>
                <ListingRoomHeading>
                  {listing.name}
                  {' '}
                  hosted by
                  {' '}
                  {listing.hostname}
                </ListingRoomHeading>
                <ListingRoomSecondary>
                  {listing.guests}
                  {' '}
                  guests ·
                  {' '}
                  {listing.bedrooms}
                  {' '}
                  bedroom ·
                  {' '}
                  {listing.beds}
                  {' '}
                  bed ·
                  {' '}
                  {listing.bathrooms}
                  {' '}
                  bath
                </ListingRoomSecondary>
              </ListingRoomInfo>
              <ListingAvatarContainer>
                <ListingInfoHostAvatar src={avatarURL} />
                {listing.superhost && superHostSVG}
              </ListingAvatarContainer>
            </ListingInfoTitle>
            <ListingInfoDesc>
              {listing.description}
            </ListingInfoDesc>
            {listing.quote
            && (
            <>
              <ListingInfoQuote>
                &ldquo;
                {listing.quote}
                &rdquo;
              </ListingInfoQuote>
              <ListingInfoQuoteHost>
                &ndash;
                {' '}
                {listing.hostname}
                , your host
              </ListingInfoQuoteHost>
            </>
            )}
            <ListingInfoContactHost>Contact host</ListingInfoContactHost>
            <ListingInfoGallery>
              {imagesIndexMap.length && this.renderBodyGalley()}
            </ListingInfoGallery>
            <ListingInfoGalleryShowButton onClick={modalToggle}>Show all photos</ListingInfoGalleryShowButton>
            <SleepingArrangementContainer>
              <SleepingArrangementHeadingBar>
                <SleepingArrangementHeadingTitle>
                  Sleeping arrangements
                </SleepingArrangementHeadingTitle>
                {bedroomsArray.length > 2
                && (
                <SleepingArrangementHeadingNavigation>
                  <SleepingArrangementHeadingNavigationIndex>
                    {`${view / 100 + 1} / ${Math.ceil(bedroomsArray.length / 2)}`}
                  </SleepingArrangementHeadingNavigationIndex>
                  <SleepingArrangementRoomSliderButton onClick={() => this.handleViewScroll()}>
                    <SleepingArrangementRoomSliderButtonIcon
                      src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/left-arrow.png"
                      alt="img"
                    />
                  </SleepingArrangementRoomSliderButton>
                  <SleepingArrangementRoomSliderButton onClick={() => this.handleViewScroll('right')}>
                    <SleepingArrangementRoomSliderButtonIcon
                      src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/right-arrow.png"
                      alt="img"
                    />
                  </SleepingArrangementRoomSliderButton>
                </SleepingArrangementHeadingNavigation>
                )}
              </SleepingArrangementHeadingBar>
              <SleepingArrangementRoomSliderContainer>
                <SleepingArrangementRoomSlider view={view}>
                  {this.renderSleepingArrangements()}
                </SleepingArrangementRoomSlider>
              </SleepingArrangementRoomSliderContainer>
            </SleepingArrangementContainer>
          </ListingInfoContainer>
        </ListingBodyContainer>
      </>
    );
  }
}

export default Gallery;
