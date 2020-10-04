import React, { Component } from 'react';
import {
  TopContainer,
  DivPadding,
  DivPaddingToExitModal,
  NavBarModal,
  NavBarContainer,
  AirbnbIconContainer,
  AirbnbIcon,
  NavBarSearch,
  NavBarSearchCategories,
  NavBarSearchCategoriesItem,
  NavBarSearchCategoriesItemHeading,
  NavBarSearchExpandedContainer,
  NavBarSearchExpandedCalendarFrom,
  NavBarSearchExpandedCalendarTo,
  NavBarSearchExpandedCalendarModal,
  NavBarSearchExpandedLocation,
  NavBarSearchExpandedLocationModal,
  LocationModalItemDiv,
  LocationModalItemImg,
  LocationModalItemText,
  NavBarSearchExpandedGuests,
  NavBarSearchExpandedGuestModal,
  SearchHeading,
  SearchInput,
  SearchInputContainer,
  SearchSecondary,
  NavBarSearchText,
  NavBarSearchIconContainer, // Base Search Bar ICON
  NavBarSearchIcon, // Base Search Bar ICON
  ExpandedSearchGuestContainer, // Expanded Search Bar Icon
  LargeSearchIconContainer, // Expanded Search Bar Icon
  LargeSearchIcon, // Expanded Search Bar Icon
  ButtonsContainer,
  BecomeAHostButton,
  WorldButtonContainer,
  WorldButtonIcon,
  WorldButtonIconDown,
  WorldModal,
  MenuIcon,
  ProfileIconButton,
  ProfileIconProfileImg,
  ProfileModal,
} from '../../styled/galleryNavBar';

class GalleryNavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchBarState: 0,
      secondaryModals: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScrollCloseModal());
  }

  handleSearchBarState(state, e) {
    e.stopPropagation();
    const { searchBarState } = this.state;
    if (state === searchBarState && state !== 1) {
      this.setState({ searchBarState: 5, secondaryModals: 0 });
    } else if (state === searchBarState && state === 1) {
      this.setState({ searchBarState: 1, secondaryModals: 0 });
    } else {
      this.setState({ searchBarState: state, secondaryModals: 0 });
    }
  }

  handleScrollCloseModal() {
    const { searchBarState } = this.state;
    if (window.scrollY > 55 && searchBarState > 0) {
      this.setState({ searchBarState: 0 });
    }
  }

  handlePopUpState(state, e) {
    e.stopPropagation();
    const { searchBarState, secondaryModals } = this.state;
    if (state === secondaryModals && searchBarState !== 0) {
      this.setState({ searchBarState: 5, secondaryModals: 0 });
    } else if (state === secondaryModals && searchBarState === 0) {
      this.setState({ searchBarState: 0, secondaryModals: 0 });
    } else if (searchBarState !== 0) {
      this.setState({ searchBarState: 5, secondaryModals: state });
    } else {
      this.setState({ searchBarState: 0, secondaryModals: state });
    }
  }

  handleCloseState(event) {
    const { searchBarState, secondaryModals } = this.state;
    const { className } = event.target;
    if (!className.includes('ProfileIconButton') && !className.includes('WorldButtonContainer') && secondaryModals > 0) {
      this.setState({ secondaryModals: 0});
    } else if (className.includes('WorldButtonContainer') && secondaryModals === 2) {
      this.setState({ secondaryModals: 1 });
    } else if (className.includes('ProfileIconButton') && secondaryModals === 1) {
      this.setState({ secondaryModals: 2 });
    }
  }

  render() {
    const { searchBarState, secondaryModals } = this.state;

    const RenderLocationModel = (
      <NavBarSearchExpandedLocationModal>
        <LocationModalItemDiv>
          <LocationModalItemImg src="../../public/img/icons/map2.png" />
          <LocationModalItemText>Nearby</LocationModalItemText>
        </LocationModalItemDiv>
      </NavBarSearchExpandedLocationModal>
    );

    const RenderExpandedSearchBar = (
      <>
        <DivPadding>
          <NavBarSearchExpandedContainer state={searchBarState} modal={secondaryModals}>
            <NavBarSearchExpandedLocation
              state={searchBarState}
              modal={secondaryModals}
              onClick={(e) => this.handleSearchBarState(1, e)}
            >
              <SearchInputContainer>
                <SearchHeading>Location</SearchHeading>
                <SearchInput
                  placeholder="Where are you going?"
                  state={searchBarState}
                  modal={secondaryModals}
                />
              </SearchInputContainer>
            </NavBarSearchExpandedLocation>
            <NavBarSearchExpandedCalendarFrom
              state={searchBarState}
              onClick={(e) => this.handleSearchBarState(2, e)}
            >
              <SearchHeading>Check in</SearchHeading>
              <SearchSecondary>Add dates</SearchSecondary>
            </NavBarSearchExpandedCalendarFrom>
            <NavBarSearchExpandedCalendarTo
              state={searchBarState}
              onClick={(e) => this.handleSearchBarState(3, e)}
            >
              <SearchHeading>Check out</SearchHeading>
              <SearchSecondary>Add dates</SearchSecondary>
            </NavBarSearchExpandedCalendarTo>
            <ExpandedSearchGuestContainer
              state={searchBarState}
              onClick={(e) => this.handleSearchBarState(4, e)}
            >
              <NavBarSearchExpandedGuests>
                <SearchHeading>Guests</SearchHeading>
                <SearchSecondary>Add guests</SearchSecondary>
              </NavBarSearchExpandedGuests>
              <LargeSearchIconContainer />
            </ExpandedSearchGuestContainer>
            {searchBarState === 1 && RenderLocationModel}
            {(searchBarState === 2 || searchBarState === 3) && <NavBarSearchExpandedCalendarModal />}
            {searchBarState === 4 && <NavBarSearchExpandedGuestModal />}
          </NavBarSearchExpandedContainer>
        </DivPadding>
        <NavBarModal onClick={(e) => this.handleSearchBarState(0, e)} />
      </>
    );

    return (
      <>
        <TopContainer onClick={(e) => this.handleCloseState(e)}>
          <NavBarContainer>
            <AirbnbIconContainer>
              <AirbnbIcon src="../../public/img/icons/plus.png" />
            </AirbnbIconContainer>
            {searchBarState === 0
              ? (
                <NavBarSearch onClick={(e) => this.handleSearchBarState(1, e)}>
                  <NavBarSearchText>Start your search</NavBarSearchText>
                  <NavBarSearchIconContainer>
                    <NavBarSearchIcon src="../../public/img/icons/search-tool.png" />
                  </NavBarSearchIconContainer>
                </NavBarSearch>
              )
              : (
                <NavBarSearchCategories>
                  <NavBarSearchCategoriesItem>
                    <NavBarSearchCategoriesItemHeading>
                      Places to stay
                    </NavBarSearchCategoriesItemHeading>
                  </NavBarSearchCategoriesItem>
                  <NavBarSearchCategoriesItem>
                    <NavBarSearchCategoriesItemHeading>
                      Experiences
                    </NavBarSearchCategoriesItemHeading>
                  </NavBarSearchCategoriesItem>
                </NavBarSearchCategories>
              )}
            <ButtonsContainer>
              <ProfileIconButton onClick={(e) => this.handlePopUpState(2, e)}>
                <MenuIcon src="../../public/img/icons/menu.png" />
                <ProfileIconProfileImg src="../../public/img/icons/profile.png" />
              </ProfileIconButton>
              <WorldButtonContainer onClick={(e) => this.handlePopUpState(1, e)}>
                <WorldButtonIcon src="../../public/img/icons/world.png" />
                <WorldButtonIconDown src="../../public/img/icons/down-arrow.png" />
              </WorldButtonContainer>
              <BecomeAHostButton>
                Become a host
              </BecomeAHostButton>
              {secondaryModals === 2 && <ProfileModal />}
              {secondaryModals === 1 && <WorldModal />}
            </ButtonsContainer>
          </NavBarContainer>
          {searchBarState !== 0 && RenderExpandedSearchBar}
          {secondaryModals > 0 && <DivPaddingToExitModal onClick={() => this.setState({ searchBarState: 0, secondaryModals: 0})} />}
        </TopContainer>
      </>
    );
  }
}

export default GalleryNavBar;
