/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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

const GalleryModal = ({
  images, changeImage, closeModal, favorites, handleAddCategory, handleToggleFavorite, savedListing, selectedImage,
}) => {
  const totalPhotos = images.length;
  const [modalState, setModalState] = useState(0);
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
          <ShareIcon onClick={() => setModalState(3)} src="../../public/img/icons/upload.png" />
          {savedListing !== false
            ? <HeartIcon onClick={() => handleToggleFavorite('remove')} src="../../public/img/icons/heart.png" />
            : <HeartIcon onClick={() => setModalState(1)} src="../../public/img/icons/noheart.png" />}
        </IconContainer>
      </NavBar>
      <ImageFrame>
        {imageIndex > 0 ? <ImageFrameLeftButton onClick={() => changeImage(images[imageIndex - 1].url)}><ImageArrowButton src="../public/img/icons/left-arrow2.png" alt="img" /></ImageFrameLeftButton> : ''}
        <ImageFramePhoto src={selectedImage} />
        {images[imageIndex].comment ? <ImageFrameComment>{images[imageIndex].comment}</ImageFrameComment> : null}
        {imageIndex < totalPhotos - 1 ? <ImageFrameRightButton onClick={() => changeImage(images[imageIndex + 1].url)}><ImageArrowButton src="../public/img/icons/right-arrow2.png" alt="img" /></ImageFrameRightButton> : ''}
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
