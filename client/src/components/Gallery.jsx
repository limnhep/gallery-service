/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import {
  GalleryTopContainer,
  GalleryTitleContainer,
  GalleryTitleHeading,
  GalleryTitleSecondary,
  GalleryTinyMargin,
  GalleryTitleSecondarySilver,
  GalleryTitleSecondaryLocation,
  GalleryContainerLarge,
  GalleryButton,
  GalleryContainerLargeMain,
  GalleryContainerLargeMainImg,
  GalleryContainerLargeAlt,
  GalleryContainerLargeAltPair,
  GalleryContainerLargeAltImg,
  GalleryContainerLargeAltImg2,
  GalleryContainerLargeAltPairImg,
} from '../../styled/gallery';

import {
  CssReset,
} from '../../styled/global';

class Gallery extends Component {
  renderPhotoGalleryMain(listing) {
    const ModalToggle = this.props.toggle;

    if (listing.gallery.featured.length === 3) {
      return [
        <GalleryContainerLargeMain key={Math.random()}>
          <GalleryContainerLargeMainImg onClick={ModalToggle} src={listing.gallery.featured[0]} />
        </GalleryContainerLargeMain>,
        <GalleryContainerLargeAlt key={Math.random()}>
          <GalleryContainerLargeAltImg onClick={ModalToggle} src={listing.gallery.featured[1]} />
        </GalleryContainerLargeAlt>,
        <GalleryContainerLargeAlt key={Math.random()}>
          <GalleryContainerLargeAltImg2 onClick={ModalToggle} src={listing.gallery.featured[2]} />
        </GalleryContainerLargeAlt>,
      ];
    }
    return [
      <GalleryContainerLargeMain key={Math.random()}>
        <GalleryContainerLargeMainImg onClick={ModalToggle} src={listing.gallery.featured[0]} />
      </GalleryContainerLargeMain>,
      <GalleryContainerLargeAltPair key={Math.random()}>
        <GalleryContainerLargeAltPairImg onClick={ModalToggle} src={listing.gallery.featured[1]} />
      </GalleryContainerLargeAltPair>,
    ];
  }

  render() {
    const { listing } = this.props;
    const ModalToggle = this.props.toggle;
    const starIcon = (<img className="gallery-icon" src="../../public/img/icons/star.png" />);
    const medalIcon = (<img className="gallery-icon" src="../../public/img/icons/medal.png" />);
    const dotIcon = (<img className="gallery-dot-icon" src="../../public/img/icons/dotdotdot.png" />);

    return (
      <>
        <CssReset />
        <GalleryTopContainer>
          <GalleryTitleContainer>
            <GalleryTitleHeading>{listing.title}</GalleryTitleHeading>
            <GalleryTinyMargin>
              <GalleryTitleSecondary>
                {starIcon}
  &nbsp;&nbsp;
                {listing.rating}
  &nbsp;&nbsp;
                <GalleryTitleSecondarySilver>
                  (
                  {listing.reviews}
                  )&nbsp;&nbsp;·&nbsp;
                </GalleryTitleSecondarySilver>

                {listing.superhost
                  ? (
                    <GalleryTitleSecondarySilver>
                      {medalIcon}
                      {' '}
                      Superhost&nbsp;&nbsp;·&nbsp;&nbsp;
                    </GalleryTitleSecondarySilver>
                  )
                  : null}

                <GalleryTitleSecondaryLocation>{listing.location}</GalleryTitleSecondaryLocation>
              </GalleryTitleSecondary>
            </GalleryTinyMargin>
          </GalleryTitleContainer>
          <GalleryContainerLarge>
            {this.renderPhotoGalleryMain(listing)}
            <GalleryButton onClick={ModalToggle}>
              {dotIcon}
              {' '}
              Show all photos
            </GalleryButton>
          </GalleryContainerLarge>
        </GalleryTopContainer>
      </>
    );
  }
}

export default Gallery;
