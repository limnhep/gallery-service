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
  ListingBodyContainer,
  ListingInfoContainer,
  ListingRoomInfo,
  ListingRoomHeading,
  ListingRoomSecondary,
  ListingAvatarContainer,
  TitleAirbnbIconContainer,
  TitleAirbnbIconMinWidth,
  GalleryIcon,
} from '../../styled/galleryMain';

import {
  CssReset,
} from '../../styled/global';

class Gallery extends Component {
  renderPhotoGalleryMain(listing) {
    const ModalToggle = this.props.toggle;

    if (listing.gallery.featured.length === 3) {
      return [
        <ContainerLargeMain key={Math.random()}>
          <ContainerLargeMainImgDIV>
            <ContainerLargeMainImg onClick={ModalToggle} src={listing.gallery.featured[0]} />
          </ContainerLargeMainImgDIV>
        </ContainerLargeMain>,
        <ContainerLargeAlt key={Math.random()}>
          <ContainerLargeAltImg onClick={ModalToggle} src={listing.gallery.featured[1]} />
        </ContainerLargeAlt>,
        <ContainerLargeAlt key={Math.random()}>
          <ContainerLargeAltImg2 onClick={ModalToggle} src={listing.gallery.featured[2]} />
        </ContainerLargeAlt>,
      ];
    }
    return [
      <ContainerLargeMain key={Math.random()}>
        <ContainerLargeMainImgDIV>
          <ContainerLargeMainImg onClick={ModalToggle} src={listing.gallery.featured[0]} />
        </ContainerLargeMainImgDIV>
      </ContainerLargeMain>,
      <ContainerLargeAltPair key={Math.random()}>
        <ContainerLargeAltPairImg onClick={ModalToggle} src={listing.gallery.featured[1]} />
      </ContainerLargeAltPair>,
    ];
  }

  render() {
    const {
      favorites, handleModalState, handleAddCategory, handleToggleFavorite, listing, modalState, savedListing,
    } = this.props;
    const ModalToggle = this.props.toggle;

    const dotIcon = (<GalleryIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/dotdotdot.png" />);

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
          <ShowMoreButton onClick={ModalToggle}>
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
              <ListingAvatarContainer />
            </ListingRoomInfo>
          </ListingInfoContainer>
        </ListingBodyContainer>
      </>
    );
  }
}

export default Gallery;
