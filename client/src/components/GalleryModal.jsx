/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  TopContainer,
  NavBar,
  BackButton,
  ImageIndex,
  ImageFrame,
  ImageFrameLeftButton,
  ImageFrameRightButton,
  ImageFramePhoto,
  ImageFrameComment,
  ImageArrowButton,
} from '../../styled/galleryModal';

const GalleryModal = ({
  images, changeImage, closeModal, selectedImage,
}) => {
  const totalPhotos = images.length;
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
      </NavBar>
      <ImageFrame>
        {imageIndex > 0 ? <ImageFrameLeftButton onClick={() => changeImage(images[imageIndex - 1].url)}><ImageArrowButton src="../public/img/icons/left-arrow2.png" alt="img" /></ImageFrameLeftButton> : ''}
        <ImageFramePhoto src={selectedImage} />
        {images[imageIndex].comment ? <ImageFrameComment>{images[imageIndex].comment}</ImageFrameComment> : null}
        {imageIndex < totalPhotos - 1 ? <ImageFrameRightButton onClick={() => changeImage(images[imageIndex + 1].url)}><ImageArrowButton src="../public/img/icons/right-arrow2.png" alt="img" /></ImageFrameRightButton> : ''}
      </ImageFrame>
    </TopContainer>
  );
};

export default GalleryModal;
