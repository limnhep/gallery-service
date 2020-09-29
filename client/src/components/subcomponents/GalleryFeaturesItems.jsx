/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';

class GalleryFeaturesItems extends Component {
  renderRoomGallery() {
    const {
      name, hostname, images, index, setModalImage,
    } = this.props;
    console.log(this.props);
    if (images.length === 1 && index === 0) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} id={name} />,
      ]);
    } if (images.length === 1 && !images[0].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-large" src={images[0].url} />,
      ]);
    } if (images.length === 1 && images[0].comment) {
      return ([
        <div key={Math.random()} className="gallery-features-modules-container-images-comment">
          <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container">
            <img key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-icon" src="../../../public/img/icons/quotes.png" />
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-text">{images[0].comment}</div>
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-host">
              {hostname}
              , your host
            </div>
          </div>
        </div>,
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-comment-photo" src={images[0].url} />,
      ]);
    } if (images.length === 2) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
      ]);
    } if (images.length === 3) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
      ]);
    } if (images.length === 4 && !images[3].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[3].url} />,
      ]);
    } if (images.length === 4 && images[3].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <div key={Math.random()} className="gallery-features-modules-container-images-comment">
          <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container">
            <img key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-icon" src="../../../public/img/icons/quotes.png" />
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-text">{images[3].comment}</div>
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-host">
              {hostname}
              , your host
            </div>
          </div>
        </div>,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-comment-photo" src={images[3].url} />,
      ]);
    } if (images.length === 5) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-1" src={images[3].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[4].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-2" src={images[4].url} />,
      ]);
    } if (images.length === 6 && !images[5].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-2" src={images[3].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[4].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-1" src={images[4].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[5].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[5].url} />,
      ]);
    } if (images.length === 6 && images[5].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-2" src={images[3].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[4].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-1" src={images[4].url} />,
        <div key={Math.random()} className="gallery-features-modules-container-images-comment">
          <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container">
            <img key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-icon" src="../../../public/img/icons/quotes.png" />
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-text">{images[5].comment}</div>
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-host">
              {hostname}
              , your host
            </div>
          </div>
        </div>,
        <img key={Math.random()} onClick={() => setModalImage(images[5].url)} className="gallery-darken-img gallery-features-modules-container-images-comment-photo" src={images[5].url} />,
      ]);
    } if (images.length === 7 && !images[6].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[3].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[4].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-2" src={images[4].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[5].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-1" src={images[5].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[6].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[6].url} />,
      ]);
    } if (images.length === 7 && images[6].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[3].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[4].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-2" src={images[4].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[5].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-1" src={images[5].url} />,
        <div key={Math.random()} className="gallery-features-modules-container-images-comment">
          <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container">
            <img key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-icon" src="../../../public/img/icons/quotes.png" />
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-text">{images[6].comment}</div>
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-host">
              {hostname}
              , your host
            </div>
          </div>
        </div>,
        <img key={Math.random()} onClick={() => setModalImage(images[6].url)} className="gallery-darken-img gallery-features-modules-container-images-comment-photo" src={images[6].url} />,
      ]);
    } if (images.length === 8 && !images[7].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-2" src={images[3].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[4].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-1" src={images[4].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[5].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[5].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[6].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[6].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[7].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[7].url} />,
      ]);
    } if (images.length === 8 && images[7].comment) {
      return ([
        <img key={Math.random()} onClick={() => setModalImage(images[0].url)} className="gallery-darken-img gallery-features-modules-container-images-single" src={images[0].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[1].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[1].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[2].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[2].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[3].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-2" src={images[3].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[4].url)} className="gallery-darken-img gallery-features-modules-container-images-skewed-1" src={images[4].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[5].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[5].url} />,
        <img key={Math.random()} onClick={() => setModalImage(images[6].url)} className="gallery-darken-img gallery-features-modules-container-images-pair" src={images[6].url} />,
        <div key={Math.random()} className="gallery-features-modules-container-images-comment">
          <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container">
            <img key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-icon" src="../../../public/img/icons/quotes.png" />
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-text">{images[7].comment}</div>
            <div key={Math.random()} className="gallery-features-modules-container-images-comment-text-container-host">
              {hostname}
              , your host
            </div>
          </div>
        </div>,
        <img key={Math.random()} onClick={() => setModalImage(images[7].url)} className="gallery-darken-img gallery-features-modules-container-images-comment-photo" src={images[7].url} />,
      ]);
    }
    return null;
  }

  renderStickyClass() {
    const { sticky } = this.props;
    if (sticky === 0) {
      return null;
    } if (sticky === 1) {
      return 'gallery-feature-left-container-heading-sticky';
    }
    return null;
  }

  renderPositionClass() {
    const { sticky } = this.props;
    if (sticky === 2) {
      return 'gallery-features-modules-left-container-bottom';
    }
    return 'gallery-features-modules-left-container';
  }

  render() {
    const { amenities, name } = this.props;
    const features = amenities.reduce((string, feature, index) => {
      if (index !== amenities.length - 1) {
        return `${string + feature} · `;
      }
      return string + feature;
    }, '');

    return (
      <>
        <div className="gallery-features-modules-top-container">
          <div className={this.renderPositionClass()}>
            <div className={this.renderStickyClass()}>
              <h2 className="gallery-features-overview-heading-container-heading">{name}</h2>
              <div className="gallery-tiny-margin-bot-6" />
              <h2 className="gallery-features-modules-container-heading-secondary"><span>{features}</span></h2>
            </div>
          </div>
          <div className="gallery-features-modules-container-right-container" id={name}>
            <div className="gallery-features-modules-container-images-container">
              {this.renderRoomGallery()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GalleryFeaturesItems;
