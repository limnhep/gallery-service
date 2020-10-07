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

import {
  CssReset,
} from '../../styled/global';

class GalleryFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyStyleRooms: {},
    };
    this.roomRefs = [];
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.mountStickyHeading());
  }

  setRef(ref, index) {
    this.roomRefs[index] = ref;
  }

  mountStickyHeading() {
    const { listing } = this.props;
    const { rooms } = listing.gallery;
    const stickyStyleRooms = {};
    rooms.forEach((room) => {
      const roomName = document.getElementById(room.name).id;
      const topBoundary = document.getElementById(room.name).getBoundingClientRect().y;
      const bottomBoundary = document.getElementById(room.name).getBoundingClientRect().height + topBoundary;
      // // return {roomName, topBoundary, bottomBoundary};
      // console.log('room:' + roomName +'-top:' + topBoundary + '-bottom:' + bottomBoundary);
      if (topBoundary < 45 && bottomBoundary > 145) {
        stickyStyleRooms[roomName] = 1; // current stickied mode;
      } else if (bottomBoundary < 145) {
        stickyStyleRooms[roomName] = 2; // indicating the heading location is at the bottom,
      } else {
        stickyStyleRooms[roomName] = 0; // indicating the default mode which is at the top;
      }
    });
    // console.log(stickyStyleRooms);
    this.setState({ stickyStyleRooms });
  }

  render() {
    const { listing, setFeaturePage, setModalImage } = this.props;
    const { stickyStyleRooms } = this.state;

    const amenitiesItems = listing.gallery.rooms.map((room, index) => (
      <GalleryFeaturesItems
        amenities={room.amenities}
        hostname={listing.hostname}
        images={room.images}
        index={index}
        name={room.name}
        setRef={(ref) => this.setRef(ref, index)}
        setModalImage={setModalImage}
        sticky={stickyStyleRooms[room.name]}
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
        <CssReset />
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
