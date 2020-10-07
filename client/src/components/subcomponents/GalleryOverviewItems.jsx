/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  RoomsContainerItems,
  RoomsContainerItemsImg,
  RoomsContainerItemDiv,
  RoomsContainerItemsTitle,
} from '../../../styled/galleryOverviewItems';

const GalleryOverviewItems = ({
  name, image, index, scrollToRoom,
}) => (
  <RoomsContainerItems onClick={() => scrollToRoom(index)}>
    <RoomsContainerItemDiv>
      <RoomsContainerItemsImg src={image} alt="img" />
    </RoomsContainerItemDiv>
    <RoomsContainerItemsTitle>{name}</RoomsContainerItemsTitle>
  </RoomsContainerItems>
);

export default GalleryOverviewItems;
