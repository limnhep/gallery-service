/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React, { Component } from 'react';

import GalleryOverviewItems from './subcomponents/GalleryOverviewItems.jsx';
import GalleryFeaturesItems from './subcomponents/GalleryFeaturesItems.jsx';
import {
  GalleryFeaturesContainer,
  Header,
  ToggleButton,
  Overview,
  OverviewHeadingContainer,
  OverviewHeadingContainerHeading,
  OverviewRoomsContainer,
  AmenitiesModule,
} from '../../styled/galleryFeatures';

class GalleryFeatures extends Component {
  constructor(props) {
    super(props);
    this.roomRefs = [];
  }

  componentDidMount() {
    const node = document.getElementById('turn-off'); // PROXY SERVER CODE ONLY
    if (node !== null) {
      node.style.display = 'none';
    }
    const { scrollToImageID, setScrollToImg } = this.props;
    if (scrollToImageID !== null) {
      setTimeout(() => {
        document.getElementById(scrollToImageID).scrollIntoView({ behavior: 'smooth' });
        setScrollToImg(null);
      }, 500);
    }
  }

  setRef(ref, index) {
    this.roomRefs[index] = ref;
  }

  render() {
    const { listing, setFeaturePage, setModalImage } = this.props;

    const amenitiesItems = listing.gallery.rooms.map((room, index) => (
      <GalleryFeaturesItems
        amenities={room.amenities}
        hostname={listing.hostname}
        images={room.images}
        index={index}
        name={room.name}
        setRef={(ref) => this.setRef(ref, index)}
        setModalImage={setModalImage}
        key={Math.random()}
      />
    ));

    const overviewItems = listing.gallery.rooms.map((room, index) => (
      <GalleryOverviewItems
        name={room.name}
        image={room.images[0].url}
        index={index}
        key={Math.random()}
        scrollToRoom={(id) => this.roomRefs[id].scrollIntoView({ behavior: 'smooth' })}
      />
    ));

    return (
      <>
        {/* GALLERY FEATURES PARENT  */}
        <GalleryFeaturesContainer>
          <Header>
            <ToggleButton onClick={setFeaturePage}>
              <img src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/left-arrow.png" alt="img" />
            </ToggleButton>
          </Header>

          {/* GALLERY FEATURES OVERVIEW  */}

          <Overview>
            <OverviewHeadingContainer>
              <OverviewHeadingContainerHeading>Property overview</OverviewHeadingContainerHeading>
            </OverviewHeadingContainer>
            <OverviewRoomsContainer>
              {overviewItems}
            </OverviewRoomsContainer>
          </Overview>

          {/* GALLERY AMENITIES MODULES  */}

          <AmenitiesModule>
            {amenitiesItems}
          </AmenitiesModule>
        </GalleryFeaturesContainer>
      </>
    );
  }
}

export default GalleryFeatures;
