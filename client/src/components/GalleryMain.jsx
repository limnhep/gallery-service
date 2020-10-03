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
  AppTopContainer,
  ContainerLarge,
  ShowMoreButton,
  ContainerLargeMain,
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
          <ContainerLargeMainImg onClick={ModalToggle} src={listing.gallery.featured[0]} />
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
        <ContainerLargeMainImg onClick={ModalToggle} src={listing.gallery.featured[0]} />
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

    const dotIcon = (<img className="gallery-dot-icon" src="../../public/img/icons/dotdotdot.png" />);

    return (
      <>
        <CssReset />
        <AppTopContainer>
          <GalleryTitleBar
            listing={listing}
            savedListing={savedListing}
            handleModalState={handleModalState}
            handleToggleFavorite={handleToggleFavorite}
          />
          <ContainerLarge>
            {this.renderPhotoGalleryMain(listing)}
            <ShowMoreButton onClick={ModalToggle}>
              {dotIcon}
              {' '}
              Show all photos
            </ShowMoreButton>
          </ContainerLarge>
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
          <GallerySaveShareModal
            modalState={modalState}
            handleModalState={handleModalState}
            favorites={favorites}
            handleAddCategory={handleAddCategory}
            handleToggleFavorite={handleToggleFavorite}
          />
        </AppTopContainer>
      </>
    );
  }
}

export default Gallery;
