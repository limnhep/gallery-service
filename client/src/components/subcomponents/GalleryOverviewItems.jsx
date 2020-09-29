/* eslint-disable react/prop-types */
import React from 'react';

const GalleryOverviewItems = ({ name, image }) => (
  <div className="gallery-features-overview-rooms-container-items">
    <img className="gallery-features-overview-rooms-container-items-img" src={image} />
    <h4 className="gallery-features-overview-rooms-container-items-title">{name}</h4>
  </div>
);

export default GalleryOverviewItems;
