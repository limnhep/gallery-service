/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  RoomsContainerItems,
  RoomsContainerItemsImg,
  RoomsContainerItemsTitle,
} from '../../../styled/galleryOverviewItems';

const GalleryOverviewItems = ({ name, image }) => (
  <RoomsContainerItems>
    <RoomsContainerItemsImg src={image} alt="img" />
    <RoomsContainerItemsTitle>{name}</RoomsContainerItemsTitle>
  </RoomsContainerItems>
);

export default GalleryOverviewItems;
