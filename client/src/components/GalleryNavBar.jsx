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
  CalendarModal,
  CalendarModalMonthContainer,
  CalendarModalHeading,
  CalendarModalHeadingWeekContainer,
  CalendarModalHeadingWeek,
  CalendarModalBody,
  CalendarModalBodyDay,
  CalendarModalBodyDayText,
  CalendarModalBackButtonContainer,
  CalendarModalForwardButtonContainer,
  CalendarModalNavigationButton,
  NavBarSearchExpandedLocation,
  NavBarSearchExpandedLocationModal,
  LocationModalItemDiv,
  LocationModalItemImg,
  LocationModalItemText,
  NavBarSearchExpandedGuests,
  NavBarSearchExpandedGuestModal,
  GuestModalItem,
  GuestModalItemText,
  GuestModalItemTextPrimary,
  GuestModalItemTextSecondary,
  GuestModalItemTextGuestNumber,
  GuestModalIncrementContainer,
  GuestModalIncrementContainerIcon,
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
  WorldModalItem,
  WorldModalIcon,
  WorldModalText,
  MenuIcon,
  ProfileIconButton,
  ProfileIconProfileImg,
  ProfileModal,
  ProfileContainers,
  ProfileContainersDiv,
  ProfileContainersItem,
  ProfileContainersHeading,
  NewMessagesNotification,
  ProfileContainersStatus,
} from '../../styled/galleryNavBar';

class GalleryNavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchBarState: 0,
      userModalState: 0,
      loggedIn: true,
      location: null,
      adults: 0,
      children: 0,
      infants: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScrollCloseModal());
  }

  handleSearchBarState(state, e) {
    e.stopPropagation();
    const { searchBarState } = this.state;
    if (state === searchBarState && state !== 1) {
      this.setState({ searchBarState: 5, userModalState: 0 });
    } else if (state === searchBarState && state === 1) {
      this.setState({ searchBarState: 1, userModalState: 0 });
    } else {
      this.setState({ searchBarState: state, userModalState: 0 });
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
    const { searchBarState, userModalState } = this.state;
    if (state === userModalState && searchBarState !== 0) {
      this.setState({ searchBarState: 5, userModalState: 0 });
    } else if (state === userModalState && searchBarState === 0) {
      this.setState({ searchBarState: 0, userModalState: 0 });
    } else if (searchBarState !== 0) {
      this.setState({ searchBarState: 5, userModalState: state });
    } else {
      this.setState({ searchBarState: 0, userModalState: state });
    }
  }

  handleCloseState(event) {
    const { searchBarState, userModalState } = this.state;
    const { className } = event.target;

    if (
      (className.includes('CalendarModal') && searchBarState === 2)
      || (className.includes('CalendarModal') && searchBarState === 3)
      || (className.includes('GuestModal') && searchBarState === 4)
    ) {
      return;
    }

    if (className.includes) {
      if (!className.includes('ProfileIconButton') && !className.includes('WorldButtonContainer') && userModalState > 0) {
        this.setState({ userModalState: 0 });
      } else if (className.includes('WorldButtonContainer') && userModalState === 2) {
        this.setState({ userModalState: 1 });
      } else if (className.includes('ProfileIconButton') && userModalState === 1) {
        this.setState({ userModalState: 2 });
      } else if (searchBarState !== 0) {
        this.setState({ searchBarState: 5 });
      }
    }
  }

  render() {
    const {
      adults, infants, children, loggedIn, searchBarState, userModalState,
    } = this.state;
    const totalGuests = adults + infants + children;

    const RenderProfileModal = (
      <ProfileModal onClick={(e) => e.stopPropagation()}>
        <ProfileContainers borderBottom>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading bold>
                Messages
                <NewMessagesNotification />
              </ProfileContainersHeading>
              <ProfileContainersStatus>
                16 unread
              </ProfileContainersStatus>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading bold>
                Trips
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading bold>
                Saved
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
        </ProfileContainers>
        <ProfileContainers borderBottom>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Host your home
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Host an experience
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Account
              </ProfileContainersHeading>
              <ProfileContainersStatus>
                Give $65
              </ProfileContainersStatus>
            </ProfileContainersItem>
          </ProfileContainersDiv>
        </ProfileContainers>
        <ProfileContainers>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Help
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv onClick={() => this.setState({ loggedIn: false, userModalState: 0 })}>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Logout
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
        </ProfileContainers>
      </ProfileModal>
    );

    const RenderLoginProfileModal = (
      <ProfileModal onClick={(e) => e.stopPropagation()}>
        <ProfileContainers borderBottom>
          <ProfileContainersDiv onClick={() => this.setState({ loggedIn: true, userModalState: 0 })}>
            <ProfileContainersItem>
              <ProfileContainersHeading bold>
                Log in
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Sign up
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
        </ProfileContainers>
        <ProfileContainers>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Host your home
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Host an experience
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
          <ProfileContainersDiv>
            <ProfileContainersItem>
              <ProfileContainersHeading>
                Help
              </ProfileContainersHeading>
            </ProfileContainersItem>
          </ProfileContainersDiv>
        </ProfileContainers>
      </ProfileModal>
    );

    const RenderLocationModel = (
      <NavBarSearchExpandedLocationModal onClick={(e) => e.stopPropagation()}>
        <LocationModalItemDiv>
          <LocationModalItemImg src="../../public/img/icons/map2.png" />
          <LocationModalItemText>Nearby</LocationModalItemText>
        </LocationModalItemDiv>
      </NavBarSearchExpandedLocationModal>
    );

    const RenderCalendarModal = (
      <NavBarSearchExpandedCalendarModal>
        <CalendarModal>
          <CalendarModalMonthContainer>
            <CalendarModalHeading>
              October 2020
              <CalendarModalBackButtonContainer>
                <CalendarModalNavigationButton src="../../public/img/icons/left-arrow.png" />
              </CalendarModalBackButtonContainer>
              <CalendarModalHeadingWeekContainer>
                <CalendarModalHeadingWeek>
                  Su
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Mo
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Tu
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  We
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Th
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Fr
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Sa
                </CalendarModalHeadingWeek>
              </CalendarModalHeadingWeekContainer>
            </CalendarModalHeading>
            <CalendarModalBody>
              {new Array(30).fill(1).map((day, index) => <CalendarModalBodyDay key={Math.random()} valid><CalendarModalBodyDayText>{index + 1}</CalendarModalBodyDayText></CalendarModalBodyDay>)}
            </CalendarModalBody>
          </CalendarModalMonthContainer>
          <CalendarModalMonthContainer>
            <CalendarModalHeading>
              November 2020
              <CalendarModalForwardButtonContainer>
                <CalendarModalNavigationButton src="../../public/img/icons/right-arrow.png" />
              </CalendarModalForwardButtonContainer>
              <CalendarModalHeadingWeekContainer>
                <CalendarModalHeadingWeek>
                  Su
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Mo
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Tu
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  We
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Th
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Fr
                </CalendarModalHeadingWeek>
                <CalendarModalHeadingWeek>
                  Sa
                </CalendarModalHeadingWeek>
              </CalendarModalHeadingWeekContainer>
            </CalendarModalHeading>
            <CalendarModalBody>
              {new Array(30).fill(1).map((day, index) => <CalendarModalBodyDay key={Math.random()} valid><CalendarModalBodyDayText>{index + 1}</CalendarModalBodyDayText></CalendarModalBodyDay>)}
            </CalendarModalBody>
          </CalendarModalMonthContainer>
        </CalendarModal>
      </NavBarSearchExpandedCalendarModal>
    );

    const RenderWorldModal = (
      <WorldModal onClick={(e) => e.stopPropagation()}>
        <WorldModalItem>
          <WorldModalIcon src="../../public/img/icons/world.png" />
          <WorldModalText>English (US)</WorldModalText>
        </WorldModalItem>
        <WorldModalItem>
          <WorldModalText>&nbsp;$</WorldModalText>
          <WorldModalText>&nbsp;USD</WorldModalText>
        </WorldModalItem>
      </WorldModal>
    );

    const RenderGuestModal = (
      <NavBarSearchExpandedGuestModal>
        <GuestModalItem>
          <GuestModalItemText>
            <GuestModalItemTextPrimary>Adults</GuestModalItemTextPrimary>
            <GuestModalItemTextSecondary>Ages 13 or above</GuestModalItemTextSecondary>
          </GuestModalItemText>
          <GuestModalIncrementContainer>
            <GuestModalIncrementContainerIcon
              valid={adults > 0}
              src="../../public/img/icons/minus.png"
              onClick={adults > 0 ? () => this.setState({ adults: adults - 1 }) : undefined}
            />
            <GuestModalItemTextGuestNumber>{adults}</GuestModalItemTextGuestNumber>
            <GuestModalIncrementContainerIcon
              valid
              src="../../public/img/icons/add.png"
              onClick={() => this.setState({ adults: adults + 1 })}
            />
          </GuestModalIncrementContainer>
        </GuestModalItem>
        <GuestModalItem>
          <GuestModalItemText>
            <GuestModalItemTextPrimary>Children</GuestModalItemTextPrimary>
            <GuestModalItemTextSecondary>Ages 2-12</GuestModalItemTextSecondary>
          </GuestModalItemText>
          <GuestModalIncrementContainer>
            <GuestModalIncrementContainerIcon
              valid={children > 0}
              src="../../public/img/icons/minus.png"
              onClick={children > 0 ? () => this.setState({ children: children - 1 }) : undefined}
            />
            <GuestModalItemTextGuestNumber>{children}</GuestModalItemTextGuestNumber>
            <GuestModalIncrementContainerIcon
              valid
              src="../../public/img/icons/add.png"
              onClick={() => this.setState({ children: children + 1 })}
            />
          </GuestModalIncrementContainer>
        </GuestModalItem>
        <GuestModalItem>
          <GuestModalItemText>
            <GuestModalItemTextPrimary>Infants</GuestModalItemTextPrimary>
            <GuestModalItemTextSecondary>Under 2</GuestModalItemTextSecondary>
          </GuestModalItemText>
          <GuestModalIncrementContainer>
            <GuestModalIncrementContainerIcon
              valid={infants > 0}
              src="../../public/img/icons/minus.png"
              onClick={() => this.setState({ infants: infants - 1 })}
            />
            <GuestModalItemTextGuestNumber>{infants}</GuestModalItemTextGuestNumber>
            <GuestModalIncrementContainerIcon
              valid
              src="../../public/img/icons/add.png"
              onClick={() => this.setState({ infants: infants + 1 })}
            />
          </GuestModalIncrementContainer>
        </GuestModalItem>
      </NavBarSearchExpandedGuestModal>
    );

    const RenderExpandedSearchBar = (
      <>
        <DivPadding>
          <NavBarSearchExpandedContainer state={searchBarState} modal={userModalState}>
            <NavBarSearchExpandedLocation
              state={searchBarState}
              modal={userModalState}
              onClick={(e) => this.handleSearchBarState(1, e)}
            >
              <SearchInputContainer>
                <SearchHeading>Location</SearchHeading>
                <SearchInput
                  placeholder="Where are you going?"
                  state={searchBarState}
                  modal={userModalState}
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
                <SearchSecondary totalGuests={totalGuests}>{totalGuests === 0 ? 'Add guests' : `${totalGuests} guests`}</SearchSecondary>
              </NavBarSearchExpandedGuests>
              <LargeSearchIconContainer />
            </ExpandedSearchGuestContainer>
            {searchBarState === 1 && RenderLocationModel}
            {(searchBarState === 2 || searchBarState === 3) && RenderCalendarModal}
            {searchBarState === 4 && RenderGuestModal}
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
              {(userModalState === 2 && loggedIn) && RenderProfileModal}
              {(userModalState === 2 && !loggedIn) && RenderLoginProfileModal}
              {userModalState === 1 && RenderWorldModal}
            </ButtonsContainer>
          </NavBarContainer>
          {searchBarState !== 0 && RenderExpandedSearchBar}
          {userModalState > 0 && <DivPaddingToExitModal onClick={() => this.setState({ searchBarState: 0, userModalState: 0 })} />}
        </TopContainer>
      </>
    );
  }
}

export default GalleryNavBar;
