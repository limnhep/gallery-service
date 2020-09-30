/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  GalleryModalTopContainer,
  GalleryModalNavBar,
  GalleryModalBackButton,
  GalleryModalImageIndex,
  GalleryModalImageFrame,
  GalleryModalImageFrameLeftButton,
  GalleryModalImageFrameRightButton,
  GalleryModalImageFramePhoto,
  GalleryModalImageFrameComment,
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
    <GalleryModalTopContainer>
      <GalleryModalNavBar>
        <GalleryModalBackButton onClick={() => closeModal()}>✕ &nbsp;Close</GalleryModalBackButton>
        <GalleryModalImageIndex>
          {imageIndex + 1}
          {' '}
          /
          {' '}
          {totalPhotos}
        </GalleryModalImageIndex>
      </GalleryModalNavBar>
      <GalleryModalImageFrame>
        {imageIndex > 0 ? <GalleryModalImageFrameLeftButton onClick={() => changeImage(images[imageIndex - 1].url)}>Left</GalleryModalImageFrameLeftButton> : ''}
        <GalleryModalImageFramePhoto src={selectedImage} />
        {images[imageIndex].comment ? <GalleryModalImageFrameComment>{images[imageIndex].comment}</GalleryModalImageFrameComment> : null}
        {imageIndex < totalPhotos - 1 ? <GalleryModalImageFrameRightButton onClick={() => changeImage(images[imageIndex + 1].url)}>Right</GalleryModalImageFrameRightButton> : ''}
      </GalleryModalImageFrame>
    </GalleryModalTopContainer>
  );
};

export default GalleryModal;
