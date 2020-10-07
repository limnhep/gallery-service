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
  GalleryIcon
} from '../../../styled/galleryMain';

const GalleryTitleBar = ({
  handleToggleFavorite, listing, savedListing, handleModalState,
}) => {
  const starIcon = (<GalleryIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/star.png" />);
  const medalIcon = (<GalleryIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/medal.png" />);

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
          && (
            <TitleSecondarySilver>
              {medalIcon}
              {' '}
              Superhost&nbsp;&nbsp;·&nbsp;&nbsp;
            </TitleSecondarySilver>
          )}
        <TitleSecondaryLocation>{listing.location}</TitleSecondaryLocation>

        { savedListing !== false
          ? (
            <>
              <NavBarButtons onClick={() => handleToggleFavorite('remove')}>
                <NavBarIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/heart.png" />
                <>&nbsp;&nbsp;</>
                <NavBarButtonsFont>Saved</NavBarButtonsFont>
              </NavBarButtons>
            </>
          )
          : (
            <>
              <NavBarButtons onClick={() => handleModalState(1)}>
                <NavBarIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/noheart.png" />
                <>&nbsp;&nbsp;</>
                <NavBarButtonsFont>Save</NavBarButtonsFont>
              </NavBarButtons>
            </>
          )}
        <NavBarButtons onClick={() => handleModalState(3)}>
          <NavBarIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/upload.svg" />
                  &nbsp;&nbsp;
          <NavBarButtonsFont>Share</NavBarButtonsFont>
        </NavBarButtons>

      </TitleSecondary>
    </TitleContainer>
  );
};

export default GalleryTitleBar;
