/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import GalleryOverviewItems from './subcomponents/GalleryOverviewItems.jsx';
import GalleryFeaturesItems from './subcomponents/GalleryFeaturesItems.jsx';

class GalleryFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyStyleRooms: {},
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.mountStickyHeading());
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
    const ModalToggle = this.props.toggle;
    const { listing } = this.props;

    const overviewItems = listing.gallery.rooms.map((room) => (
      <GalleryOverviewItems
        name={room.name}
        image={room.images[0].url}
        key={Math.random()}
      />
    ));

    const amenitiesItems = listing.gallery.rooms.map((room, index) => (
      <GalleryFeaturesItems
        amenities={room.amenities}
        hostname={listing.hostname}
        images={room.images}
        index={index}
        name={room.name}
        setModalImage={this.props.setModalImage}
        sticky={this.state.stickyStyleRooms[room.name]}
        key={Math.random()}
      />
    ));

    return (
      <>
        {/* GALLERY FEATURES PARENT  */}

        <div className="gallery-features-top-container">
          <div className="gallery-features-header">
            <button className="gallery-features-toggle-button" onClick={ModalToggle}>
              <img src="../public/img/icons/left-arrow.png" alt="img" />
            </button>
          </div>

          {/* GALLERY FEATURES OVERVIEW  */}

          <div className="gallery-features-overview">
            <div className="gallery-features-overview-heading-container">
              <h2 className="gallery-features-overview-heading-container-heading">Property overview</h2>
            </div>
            <div className="gallery-features-overview-rooms-container">
              {overviewItems}
            </div>
          </div>

          {/* GALLERY AMENITIES MODULES  */}

          <div className="gallery-amenities-module">
            {amenitiesItems}
          </div>
        </div>

      </>
    );
  }
}

export default GalleryFeatures;
