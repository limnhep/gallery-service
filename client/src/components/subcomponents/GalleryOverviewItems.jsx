/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  GalleryFeaturesOverviewRoomsContainerItems,
  GalleryFeaturesOverviewRoomsContainerItemsImg,
  GalleryFeaturesOverviewRoomsContainerItemsTitle,
} from '../../../styled/galleryOverviewItems';

const GalleryOverviewItems = ({ name, image }) => (
  <GalleryFeaturesOverviewRoomsContainerItems>
    <GalleryFeaturesOverviewRoomsContainerItemsImg src={image} alt="img" />
    <GalleryFeaturesOverviewRoomsContainerItemsTitle>{name}</GalleryFeaturesOverviewRoomsContainerItemsTitle>
  </GalleryFeaturesOverviewRoomsContainerItems>
);

export default GalleryOverviewItems;
