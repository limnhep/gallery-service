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
  NavBarSearchExpandedCalendar,
  NavBarSearchExpandedCalendarModal,
  NavBarSearchExpandedLocation,
  NavBarSearchExpandedLocationModal,
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

  handleSearchBarState(state) {
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

  handlePopUpState(state) {
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
    const { secondaryModals } = this.state;
    if (event.target.className !== 'galleryNavBar__ProfileIconButton-mtzhcf-35 eFvWC' && secondaryModals > 0) {
      this.setState({ secondaryModals: 0 });
    }
  }

  render() {
    console.log(this.state);
    const { searchBarState, secondaryModals } = this.state;
    const ExpandedSearchBar = (
      <>
        <DivPadding>
          <NavBarSearchExpandedContainer state={searchBarState}>
            <NavBarSearchExpandedLocation state={searchBarState} onClick={() => this.handleSearchBarState(1)}>
              <SearchInputContainer>
                <SearchHeading>Location</SearchHeading>
                <SearchInput
                  placeholder="Where are you going?"
                />
              </SearchInputContainer>
            </NavBarSearchExpandedLocation>
            <NavBarSearchExpandedCalendar onClick={() => this.handleSearchBarState(2)}>
              <SearchHeading>Check in</SearchHeading>
              <SearchSecondary>Add dates</SearchSecondary>
            </NavBarSearchExpandedCalendar>
            <NavBarSearchExpandedCalendar onClick={() => this.handleSearchBarState(3)}>
              <SearchHeading>Check out</SearchHeading>
              <SearchSecondary>Add dates</SearchSecondary>
            </NavBarSearchExpandedCalendar>
            <ExpandedSearchGuestContainer onClick={() => this.handleSearchBarState(4)}>
              <NavBarSearchExpandedGuests>
                <SearchHeading>Guests</SearchHeading>
                <SearchSecondary>Add guests</SearchSecondary>
              </NavBarSearchExpandedGuests>
              <LargeSearchIconContainer />
            </ExpandedSearchGuestContainer>
            {searchBarState === 1 ? <NavBarSearchExpandedLocationModal /> : null}
            {searchBarState === 2 || searchBarState === 3 ? <NavBarSearchExpandedCalendarModal /> : null}
            {searchBarState === 4 ? <NavBarSearchExpandedGuestModal /> : null}
          </NavBarSearchExpandedContainer>
        </DivPadding>
        <NavBarModal onClick={() => this.handleSearchBarState(0)} />
      </>
    );

    return (
      <>
        <TopContainer onClick={(event) => this.handleCloseState(event)}>
          <NavBarContainer>
            <AirbnbIconContainer>
              <AirbnbIcon src="../../public/img/icons/plus.png" />
            </AirbnbIconContainer>
            {searchBarState === 0
              ? (
                <NavBarSearch onClick={() => this.handleSearchBarState(1)}>
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
              <ProfileIconButton onClick={() => this.handlePopUpState(2)}>
                <MenuIcon src="../../public/img/icons/menu.png" />
                <ProfileIconProfileImg src="../../public/img/icons/profile.png" />
              </ProfileIconButton>
              <WorldButtonContainer onClick={() => this.handlePopUpState(1)}>
                <WorldButtonIcon src="../../public/img/icons/world.png" />
                <WorldButtonIconDown src="../../public/img/icons/down-arrow.png" />
              </WorldButtonContainer>
              <BecomeAHostButton>
                Become a host
              </BecomeAHostButton>
              {secondaryModals === 2 ? <ProfileModal /> : null}
              {secondaryModals === 1 ? <WorldModal /> : null}
            </ButtonsContainer>
          </NavBarContainer>
          {searchBarState === 0 ? null : ExpandedSearchBar}
          {secondaryModals > 0 ? <DivPaddingToExitModal onClick={() => this.handleSearchBarState(0)} /> : null}
        </TopContainer>
      </>
    );
  }
}

export default GalleryNavBar;
