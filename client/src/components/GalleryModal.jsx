/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import GallerySaveShareModal from './subcomponents/GallerySaveShareModal.jsx';
import {
  TopContainer,
  NavBar,
  BackButton,
  ShareIcon,
  HeartIcon,
  ImageIndex,
  ImageFrame,
  ImageFrameLeftButton,
  ImageFrameRightButton,
  ImageFramePhoto,
  ImageFrameComment,
  ImageArrowButton,
  IconContainer,
} from '../../styled/galleryModal';

const transitionStyles = styled.div`
&:enter { opacity: 0; },
&:enter-active { opacity: 1;
  transition: opacity 1000ms ease-in;},
&:exit { opacity: 1 ;},
&:exit-active: { opacity: 0 ;
  transition: opacity 1000ms ease-in;}},
`;

const GalleryModal = ({
  images, changeImage, closeModal, favorites, handleAddCategory, handleToggleFavorite, savedListing, selectedImage,
}) => {
  const totalPhotos = images.length;
  const [modalState, setModalState] = useState(0);
  const [bool, setBool] = useState(true);
  let imageIndex;
  images.forEach((image, index) => {
    if (image.url === selectedImage) {
      imageIndex = index;
    }
  });
  return (
    <TopContainer>
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
        {imageIndex > 0 ? <ImageFrameLeftButton onClick={() => {changeImage(images[imageIndex - 1].url), setBool(!bool)}}><ImageArrowButton src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/left-arrow2.png" alt="img" /></ImageFrameLeftButton> : ''}
        <CSSTransition
          in={bool}
          timeout={1000}
          className={transitionStyles}
          classNames={transitionStyles}
          onEntered={() => setBool(!bool)}
          unmountOnExit
        >
          <ImageFramePhoto src={selectedImage} />
        </CSSTransition>
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
    </TopContainer>
  );
};

export default GalleryModal;
