/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import styled, { css } from 'styled-components';

import GallerySaveShareModal from './subcomponents/GallerySaveShareModal.jsx';

import {
  GalleryModalContainer,
  NavBar,
  BackButton,
  IconContainer,
  ShareIcon,
  HeartIcon,
  ImageIndex,
  ImageFrame,
  ImageFrameLeftButton,
  ImageFrameRightButton,
  ImageFramePhoto,
  ImageFrameComment,
  ImageArrowButton,
} from '../../styled/galleryModal';

import {
  CssReset,
} from '../../styled/global';

const GalleryModal = ({
  images, changeImage, closeModal, favorites, handleAddCategory, handleToggleFavorite, savedListing, selectedImage,
}) => {
  const totalPhotos = images.length;
  const [modalState, setModalState] = useState(0);
  const node = document.getElementById('turn-off'); // PROXY SERVER CODE ONLY
  if (node !== null) {
    node.style.display = 'none';
  }

  let imageIndex;
  images.forEach((image, index) => {
    if (image.url === selectedImage) {
      imageIndex = index;
    }
  });
  return (
    <GalleryModalContainer>
      <CssReset />
      <NavBar>
        <BackButton onClick={() => closeModal()}>✕ &nbsp;Close</BackButton>
        <ImageIndex>
          {imageIndex + 1}
          {' '}
          /
          {' '}
          {totalPhotos}
        </ImageIndex>
        <IconContainer>
          <ShareIcon onClick={() => setModalState(3)} src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/upload.png" />
          {savedListing !== false
            ? <HeartIcon onClick={() => handleToggleFavorite('remove')} src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/heart.png" />
            : <HeartIcon onClick={() => setModalState(1)} src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/noheart.png" />}
        </IconContainer>
      </NavBar>
      <ImageFrame>
        {imageIndex > 0 ? <ImageFrameLeftButton onClick={() => changeImage(images[imageIndex - 1].url)}><ImageArrowButton src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/left-arrow2.png" alt="img" /></ImageFrameLeftButton> : ''}
        <TransitionGroup>
          <CSSTransition
            key={selectedImage}
            timeout={400}
            classNames="fade"
            appear
          >
            <ImageFramePhoto src={selectedImage} />
          </CSSTransition>
        </TransitionGroup>
        {images[imageIndex].comment ? <ImageFrameComment>{images[imageIndex].comment}</ImageFrameComment> : null}
        {imageIndex < totalPhotos - 1 ? <ImageFrameRightButton onClick={() => changeImage(images[imageIndex + 1].url)}><ImageArrowButton src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/right-arrow2.png" alt="img" /></ImageFrameRightButton> : ''}
      </ImageFrame>
      {
        modalState
          ? (
            <GallerySaveShareModal
              modalState={modalState}
              handleModalState={setModalState}
              favorites={favorites}
              handleAddCategory={handleAddCategory}
              handleToggleFavorite={handleToggleFavorite}
            />
          ) : null
      }
    </GalleryModalContainer>
  );
};

export default GalleryModal;
