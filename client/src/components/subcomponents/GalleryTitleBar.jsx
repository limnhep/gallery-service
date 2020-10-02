/* eslint-disable react/prop-types */
import React from 'react';
import {
  TitleContainer,
  TitleHeading,
  TitleSecondary,
  TinyMargin,
  TitleSecondarySilver,
  TitleSecondaryLocation,
  NavBarButtons,
  NavBarButtonsFont,
  NavBarIcon,
} from '../../../styled/galleryMain';

const GalleryTitleBar = ({ handleToggleFavorite, listing, savedListing, handleModalState }) => {
  const starIcon = (<img className="gallery-icon" src="../../public/img/icons/star.png" />);
  const medalIcon = (<img className="gallery-icon" src="../../public/img/icons/medal.png" />);

  return (
    <TitleContainer>
      <TitleHeading>{listing.title}</TitleHeading>
      <TinyMargin />
      <TitleSecondary>
        {starIcon}
    &nbsp;&nbsp;
        {listing.rating}
    &nbsp;&nbsp;
        <TitleSecondarySilver>
          (
          {listing.reviews}
          )&nbsp;&nbsp;·&nbsp;
        </TitleSecondarySilver>
        {listing.superhost
          ? (
            <TitleSecondarySilver>
              {medalIcon}
              {' '}
              Superhost&nbsp;&nbsp;·&nbsp;&nbsp;
            </TitleSecondarySilver>
          )
          : null}

        <TitleSecondaryLocation>{listing.location}</TitleSecondaryLocation>

        { savedListing !== false
          ? (
            <>
              <NavBarButtons onClick={() => handleToggleFavorite('remove')}>
                <NavBarIcon src="../../public/img/icons/heart.png" />
                <>&nbsp;&nbsp;</>
                <NavBarButtonsFont>Saved</NavBarButtonsFont>
              </NavBarButtons>
            </>
          )
          : (
            <>
              <NavBarButtons onClick={() => handleModalState(1)}>
                <NavBarIcon src="../../public/img/icons/noheart.png" />
                <>&nbsp;&nbsp;</>
                <NavBarButtonsFont>Save</NavBarButtonsFont>
              </NavBarButtons>
            </>
          )}
        <NavBarButtons onClick={() => handleModalState(3)}>
          <NavBarIcon src="../../public/img/icons/upload.svg" />
                  &nbsp;&nbsp;
          <NavBarButtonsFont>Share</NavBarButtonsFont>
        </NavBarButtons>

      </TitleSecondary>
    </TitleContainer>
  );
};

export default GalleryTitleBar;
