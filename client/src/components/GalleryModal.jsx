/* eslint-disable react/prop-types */
import React from 'react';

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
    <div className="gallery-modal-top-container">
      <div className="gallery-modal-nav-bar">
        <button className="gallery-modal-back-button" onClick={() => closeModal()}>✕ &nbsp;Close</button>
        <div className="gallery-modal-image-index">
          {imageIndex + 1}
          {' '}
          /
          {' '}
          {totalPhotos}
        </div>
      </div>
      <div className="gallery-modal-image-frame">
        {imageIndex > 0 ? <button className="gallery-modal-image-frame-left-button" onClick={() => changeImage(images[imageIndex - 1].url)}>Left</button> : ''}
        <img className="gallery-modal-image-frame-photo" src={selectedImage} />
        {images[imageIndex].comment ? <h4 className="gallery-modal-image-frame-comment">{images[imageIndex].comment}</h4> : null}
        {imageIndex < totalPhotos - 1 ? <button className="gallery-modal-image-frame-right-button" onClick={() => changeImage(images[imageIndex + 1].url)}>Right</button> : ''}
      </div>
    </div>
  );
};

export default GalleryModal;
