/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';

class Gallery extends Component {
  renderPhotoGalleryMain(listing) {
    const ModalToggle = this.props.toggle;

    if (listing.gallery.featured.length === 3) {
      return [
        <div className="gallery-container-large-main" key={Math.random()}>
          <img className="gallery-container-large-main-img gallery-clickable" onClick={ModalToggle} src={listing.gallery.featured[0]} />
        </div>,
        <div className="gallery-container-large-alt" key={Math.random()}>
          <img className="gallery-container-large-alt-img gallery-clickable" onClick={ModalToggle} src={listing.gallery.featured[1]} />
        </div>,
        <div className="gallery-container-large-alt" key={Math.random()}>
          <img className="gallery-container-large-alt-img-2 gallery-clickable" onClick={ModalToggle} src={listing.gallery.featured[2]} />
        </div>,
      ];
    }
    return [
      <div className="gallery-container-large-main" key={Math.random()}>
        <img className="gallery-container-large-main-img gallery-clickable" onClick={ModalToggle} src={listing.gallery.featured[0]} />
      </div>,
      <div className="gallery-container-large-alt-pair" key={Math.random()}>
        <img className="gallery-container-large-alt-pair-img gallery-clickable" onClick={ModalToggle} src={listing.gallery.featured[1]} />
      </div>,
    ];
  }

  render() {
    const { listing } = this.props;
    const ModalToggle = this.props.toggle;
    const starIcon = (<img className="gallery-icon" src="../../public/img/icons/star.png" />);
    const medalIcon = (<img className="gallery-icon" src="../../public/img/icons/medal.png" />);
    const dotIcon = (<img className="gallery-dot-icon" src="../../public/img/icons/dotdotdot.png" />);

    return (
      <div className="gallery-top-container">
        <div className="gallery-title-container">
          <p className="gallery-title-heading">{listing.title}</p>
          <div className="gallery-tiny-margin-8">
            <p className="gallery-title-secondary">
              {starIcon}
&nbsp;&nbsp;
              {listing.rating}
&nbsp;&nbsp;
              <span className="gallery-title-secondary-silver">
                (
                {listing.reviews}
                )&nbsp;&nbsp;·&nbsp;
              </span>

              {listing.superhost
                ? (
                  <span className="gallery-title-secondary-silver">
                    {medalIcon}
                    {' '}
                    Superhost&nbsp;&nbsp;·&nbsp;&nbsp;
                  </span>
                )
                : null}

              <span className="gallery-title-secondary-location">{listing.location}</span>
            </p>
          </div>
        </div>
        <div className="gallery-container-large">
          {this.renderPhotoGalleryMain(listing)}
          <button className="gallery-button" onClick={ModalToggle}>
            {dotIcon}
            {' '}
            Show all photos
          </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
