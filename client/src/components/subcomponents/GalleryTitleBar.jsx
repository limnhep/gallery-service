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
} from '../../../styled/gallery';

const GalleryTitleBar = ({
  starIcon, medalIcon, listing, saveModalToggle,
}) => (
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

      <NavBarButtons onClick={() => saveModalToggle(1)}>
        <NavBarIcon src="../../public/img/icons/heart.png" />
              &nbsp;&nbsp;
        <NavBarButtonsFont>Save</NavBarButtonsFont>
      </NavBarButtons>
      <NavBarButtons onClick={() => saveModalToggle(3)}>
        <NavBarIcon src="../../public/img/icons/upload.png" />
              &nbsp;&nbsp;
        <NavBarButtonsFont>Share</NavBarButtonsFont>
      </NavBarButtons>

    </TitleSecondary>
  </TitleContainer>
);

export default GalleryTitleBar;
