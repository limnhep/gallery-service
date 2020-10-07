import React, { Component } from 'react';
import GallerySearchBarCalendar from './subcomponents/GallerySearchBarCalendar.jsx';
import {
  NavBarFullSpan,
  DivPadding,
  DivPaddingToExitModal,
  NavBarModal,
  NavBarContainer,
  NavBarContainerMinWidth,
  NavBarContainerMinWidthBackButton,
  AirbnbIconContainer,
  AirbnbIcon,
  NavBarSearch,
  NavBarSearchCategories,
  NavBarSearchCategoriesItem,
  NavBarSearchCategoriesItemHeading,
  NavBarSearchExpandedContainer,
  NavBarSearchExperienceContainer,
  NavBarSearchExpandedCalendarFrom,
  NavBarSearchExpandedCalendarTo,
  NavBarSearchExpandedExperienceCalendar,
  NavBarSearchExpandedExperienceCalendarText,
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
  LargeSearchIconText,
  RoundSearchIconContainer,
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
  ProfileIconProfileDiv,
  AvatarIconSVG,
  ProfileModal,
  ProfileContainers,
  ProfileContainersDiv,
  ProfileContainersItem,
  ProfileContainersHeading,
  NewMessagesNotification,
  ProfileContainersStatus,
} from '../../styled/galleryNavBar';

import {
  IconContainer,
  ShareIcon,
  HeartIcon,
} from '../../styled/galleryModal';

import calendar from '../../public/calendar';

class GalleryNavBar extends Component {
  constructor() {
    super();

    const currentMonth = Date().split(' ')[1];
    const currentDay = Number(Date().split(' ')[2]);
    const currentYear = Number(Date().split(' ')[3]);
    const currentMonthIndex = calendar.findIndex((month) => month[0].split(' ')[0].substring(0, 3) === currentMonth && month[0].split(' ')[1].substring(0, 4) === currentYear.toString());

    this.state = {
      searchBarState: 0,
      userModalState: 0,
      loggedIn: false,
      location: '',
      hoveredDate: null,
      startDate: null,
      endDate: null,
      selectedMonthIndex: currentMonthIndex,
      adults: 0,
      children: 0,
      infants: 0,
      hoveredBoxBorderCheck: null,
    };
    this.setMonthIndex = this.setMonthIndex.bind(this);
    this.setCalendarDate = this.setCalendarDate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScrollCloseModal());
  }

  setCalendarDate(dateArray) {
    // Input with calendar selected dateArray [year, month, day]
    const { searchBarState, startDate, endDate } = this.state;

    // Check Valid;
    if (endDate && startDate) {
      const monthMapChart = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      };

      const [fromYear, fromMonth, fromDay] = startDate;
      const [toYear, toMonth, toDay] = endDate;
      const [selectedYear, selectedMonth, selectedDay] = dateArray;

      const fromMonthValue = monthMapChart[fromMonth];
      const toMonthValue = monthMapChart[toMonth];
      const selectedMonthValue = monthMapChart[selectedMonth];

      // const validDay = ((currentMonthIndex === monthIndex && currentDay <= i + 1 - dayGap) || currentMonthIndex < monthIndex || currentYear < renderedYear);
      if (searchBarState === 2) {
        if (selectedYear <= toYear && selectedMonthValue <= toMonthValue) {
          // MODAL STATE: CHOOSE START DATE
          // Case 1: If Selected Year is on or before TripToYear and Selected Month is on or before to TripStartMonth //
          if (selectedMonthValue < toMonthValue) {
            // Case a: If Selected Month is **before** TripToMonth SET start date to new start date and keep USER SELECTED END_Date//
            this.setState({ startDate: dateArray, searchBarState: 3 });
          } else if (selectedDay <= toDay) {
            // Case b: If Selected Day is on TripToMonth and Selected Day is on or before to TripToDay keep USER SELECTED END_Date//
            this.setState({ startDate: dateArray, searchBarState: 3 });
          } else {
            // Case c: If Selected Day is the SAME MONTH BUT **AFTER** END DATE. CLEAR ENDDATE AND SET SELECTED DAY AS startDate //
            this.setState({ startDate: dateArray, endDate: null, searchBarState: 3 });
          }
        } else {
          // Case 2; Selected Date is after TripStartYear and after TripStartMonth, re set startDate and clear End Date, change to Second Calendar Modal to choose end date.
          this.setState({ startDate: dateArray, searchBarState: 3, endDate: null });
        }
      } else if (searchBarState === 3) {
        if (selectedYear <= fromYear && selectedMonthValue <= fromMonthValue) {
          // MODAL STATE: CHOOSE END DATE
          // Case 1: If Selected Year is on or after TripFromYear and Selected Month is on or before to TripFromMonth //
          if (selectedMonthValue < fromMonthValue) {
            // Case a: If Selected Month is **before** TripFromMonth SET start date to new start date and keep USER END_Date//
            this.setState({
              startDate: dateArray, searchBarState: 3, endDate: null, hoveredDate: null,
            });
          } else if (selectedDay >= fromDay) {
            // Case b: If Selected Day is on TripStartMonth and Selected Day is on or before to TripStartDay keep USER START DATE and set NEW END Date//
            this.setState({ endDate: dateArray, searchBarState: 3 });
          } else {
            // Case c: If Selected Day is the SAME MONTH BUT **AFTER** END DATE. CLEAR ENDDATE AND SET SELECTED DAY AS startDate
            this.setState({ startDate: dateArray, endDate: null, searchBarState: 3 });
          }
        } else {
          // Case 2; Selected Date is after TripStartYear and after TripStartMonth, reset End Date and Keep Start Date //
          this.setState({ endDate: dateArray, searchBarState: 3 });
        }
      }
    } else if (searchBarState === 2) {
      this.setState({ startDate: dateArray, searchBarState: 3 });
    } else if (searchBarState === 3) {
      const monthMapChart = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      };

      const [fromYear, fromMonth, fromDay] = startDate;
      const [selectedYear, selectedMonth, selectedDay] = dateArray;

      const fromMonthValue = monthMapChart[fromMonth];
      const selectedMonthValue = monthMapChart[selectedMonth];

      if (!startDate) {
        this.setState({ startDate: dateArray, searchBarState: 3 });
      } else if (selectedYear <= fromYear && selectedMonthValue < fromMonthValue) {
        this.setState({ startDate: dateArray, searchBarState: 3 });
      } else if (selectedYear <= fromYear && selectedMonthValue === fromMonthValue && selectedDay < fromDay) {
        this.setState({ startDate: dateArray, searchBarState: 3 });
      } else {
        this.setState({ endDate: dateArray, searchBarState: 3 });
      }
    }
  }

  setMonthIndex(newIndex) {
    if (newIndex < 0 || newIndex > calendar.length - 2) {
      return;
    }
    this.setState({ selectedMonthIndex: newIndex });
  }

  handleSearchBarState(state, e) {
    e.stopPropagation();
    const { searchBarState } = this.state;
    if (searchBarState <= 5) {
      if (state === searchBarState && state !== 1) {
        this.setState({ searchBarState: 5, userModalState: 0 });
      } else if (state === searchBarState && state === 1) {
        this.setState({ searchBarState: 1, userModalState: 0 });
      } else {
        this.setState({ searchBarState: state, userModalState: 0 });
      }
    } else if (state === searchBarState && state !== 8) {
      this.setState({ searchBarState: 8, userModalState: 0 });
    } else if (state === searchBarState && state === 6) {
      this.setState({ searchBarState: 6, userModalState: 0 });
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
      } else if (searchBarState > 5) {
        this.setState({ searchBarState: 8 });
      } else if (searchBarState !== 0) {
        this.setState({ searchBarState: 5 });
      }
    }
  }

  render() {
    const {
      adults, infants, children, hoveredBoxBorderCheck, location, loggedIn, searchBarState, userModalState,
    } = this.state;
    const {
      startDate, endDate, hoveredDate, selectedMonthIndex,
    } = this.state; // Calendar
    const { savedListing, handleModalState, handleToggleFavorite, setFeaturePage } = this.props;
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
        <LocationModalItemDiv onClick={() => this.setState({ location: 'Explore nearby destinations', searchBarState: searchBarState === 1 ? 2 : 7 })}>
          <LocationModalItemImg src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/map2.png" />
          <LocationModalItemText>Explore nearby destinations</LocationModalItemText>
        </LocationModalItemDiv>
      </NavBarSearchExpandedLocationModal>
    );

    const RenderWorldModal = (
      <WorldModal onClick={(e) => e.stopPropagation()}>
        <WorldModalItem>
          <WorldModalIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/world.png" />
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
              src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/minus.png"
              onClick={adults > 0 ? () => this.setState({ adults: adults - 1 }) : undefined}
            />
            <GuestModalItemTextGuestNumber>{adults}</GuestModalItemTextGuestNumber>
            <GuestModalIncrementContainerIcon
              valid
              src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/add.png"
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
              src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/minus.png"
              onClick={children > 0 ? () => this.setState({ children: children - 1 }) : undefined}
            />
            <GuestModalItemTextGuestNumber>{children}</GuestModalItemTextGuestNumber>
            <GuestModalIncrementContainerIcon
              valid
              src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/add.png"
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
              src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/minus.png"
              onClick={infants > 0 ? () => this.setState({ infants: infants - 1 }) : undefined}
            />
            <GuestModalItemTextGuestNumber>{infants}</GuestModalItemTextGuestNumber>
            <GuestModalIncrementContainerIcon
              valid
              src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/add.png"
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
              hoveringState={hoveredBoxBorderCheck}
              onMouseEnter={() => this.setState({ hoveredBoxBorderCheck: 1 })}
              onMouseLeave={() => this.setState({ hoveredBoxBorderCheck: null })}
              onClick={(e) => this.handleSearchBarState(1, e)}
            >
              <SearchInputContainer>
                <SearchHeading>Location</SearchHeading>
                <SearchInput
                  value={location}
                  placeholder="Where are you going?"
                  bold={location}
                  state={searchBarState}
                  modal={userModalState}
                  onChange={(event) => this.setState({ location: event.target.value })}
                />
              </SearchInputContainer>
            </NavBarSearchExpandedLocation>
            <NavBarSearchExpandedCalendarFrom
              state={searchBarState}
              hoveringState={hoveredBoxBorderCheck}
              onMouseEnter={() => this.setState({ hoveredBoxBorderCheck: 2 })}
              onMouseLeave={() => this.setState({ hoveredBoxBorderCheck: null })}
              onClick={(e) => this.handleSearchBarState(2, e)}
            >
              <SearchHeading>Check in</SearchHeading>
              <SearchSecondary bold={startDate}>{startDate ? `${startDate[1]} ${startDate[2]}` : 'Add dates' }</SearchSecondary>
            </NavBarSearchExpandedCalendarFrom>
            <NavBarSearchExpandedCalendarTo
              state={searchBarState}
              hoveringState={hoveredBoxBorderCheck}
              onMouseEnter={() => this.setState({ hoveredBoxBorderCheck: 3 })}
              onMouseLeave={() => this.setState({ hoveredBoxBorderCheck: null })}
              onClick={(e) => this.handleSearchBarState(3, e)}
            >
              <SearchHeading>Check out</SearchHeading>
              <SearchSecondary bold={endDate}>{endDate ? `${endDate[1]} ${endDate[2]}` : 'Add dates' }</SearchSecondary>
            </NavBarSearchExpandedCalendarTo>
            <ExpandedSearchGuestContainer
              state={searchBarState}
              hoveringState={hoveredBoxBorderCheck}
              onMouseEnter={() => this.setState({ hoveredBoxBorderCheck: 4 })}
              onMouseLeave={() => this.setState({ hoveredBoxBorderCheck: null })}
              onClick={(e) => this.handleSearchBarState(4, e)}
            >
              <NavBarSearchExpandedGuests>
                <SearchHeading>Guests</SearchHeading>
                <SearchSecondary bold={!!totalGuests}>{totalGuests === 0 ? 'Add guests' : `${totalGuests} guests`}</SearchSecondary>
              </NavBarSearchExpandedGuests>
              {searchBarState !== 5
                ? (
                  <LargeSearchIconContainer>
                    <LargeSearchIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                      </g>
                    </LargeSearchIcon>
                    <LargeSearchIconText>
                      Search
                    </LargeSearchIconText>
                  </LargeSearchIconContainer>
                )
                : (
                  <RoundSearchIconContainer>
                    <LargeSearchIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                      </g>
                    </LargeSearchIcon>
                  </RoundSearchIconContainer>
                )}
            </ExpandedSearchGuestContainer>
            {(searchBarState === 1 || (searchBarState === 6 && !location)) && RenderLocationModel}
            {(searchBarState === 2 || searchBarState === 3) && (
            <GallerySearchBarCalendar
              props={{
                calendar, startDate, endDate, selectedMonthIndex, hoveredDate,
              }}
              setHoveredDate={(date) => this.setState({ hoveredDate: date })}
              setMonthIndex={this.setMonthIndex}
              setCalendarDate={this.setCalendarDate}
            />
            )}
            {searchBarState === 4 && RenderGuestModal}
          </NavBarSearchExpandedContainer>
        </DivPadding>
        <NavBarModal onClick={(e) => this.handleSearchBarState(0, e)} />
      </>
    );

    const RenderExperienceSearchBar = (
      <>
        <DivPadding>
          <NavBarSearchExperienceContainer state={searchBarState} modal={userModalState}>
            <NavBarSearchExpandedLocation
              state={searchBarState}
              modal={userModalState}
              hoveringState={hoveredBoxBorderCheck}
              onMouseEnter={() => this.setState({ hoveredBoxBorderCheck: 6 })}
              onMouseLeave={() => this.setState({ hoveredBoxBorderCheck: null })}
              onClick={(e) => this.handleSearchBarState(6, e)}
            >
              <SearchInputContainer>
                <SearchHeading>Location</SearchHeading>
                <SearchInput
                  value={location}
                  placeholder="Where are you going?"
                  bold={location}
                  state={searchBarState}
                  modal={userModalState}
                  onChange={(event) => this.setState({ location: event.target.value })}
                />
              </SearchInputContainer>
            </NavBarSearchExpandedLocation>
            <NavBarSearchExpandedExperienceCalendar
              state={searchBarState}
              hoveringState={hoveredBoxBorderCheck}
              onMouseEnter={() => this.setState({ hoveredBoxBorderCheck: 7 })}
              onMouseLeave={() => this.setState({ hoveredBoxBorderCheck: null })}
              onClick={(e) => this.handleSearchBarState(7, e)}
            >
              <NavBarSearchExpandedExperienceCalendarText>
                <SearchHeading>Check out</SearchHeading>
                <SearchSecondary bold={endDate}>{endDate ? `${endDate[1]} ${endDate[2]}` : 'Add when you want to go' }</SearchSecondary>
              </NavBarSearchExpandedExperienceCalendarText>
              {searchBarState !== 8
                ? (
                  <LargeSearchIconContainer>
                    <LargeSearchIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                      </g>
                    </LargeSearchIcon>
                    <LargeSearchIconText>
                      Search
                    </LargeSearchIconText>
                  </LargeSearchIconContainer>
                )
                : (
                  <RoundSearchIconContainer>
                    <LargeSearchIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                      </g>
                    </LargeSearchIcon>
                  </RoundSearchIconContainer>
                )}
            </NavBarSearchExpandedExperienceCalendar>
            {searchBarState === 6 && RenderLocationModel}
            {(searchBarState === 7) && (
            <GallerySearchBarCalendar
              props={{
                calendar, startDate, endDate, selectedMonthIndex, hoveredDate,
              }}
              setHoveredDate={(date) => this.setState({ hoveredDate: date })}
              setMonthIndex={this.setMonthIndex}
              setCalendarDate={this.setCalendarDate}
            />
            )}
          </NavBarSearchExperienceContainer>
        </DivPadding>
        <NavBarModal onClick={(e) => this.handleSearchBarState(0, e)} />
      </>
    );

    return (
      <NavBarFullSpan onClick={(e) => this.handleCloseState(e)}>
        <NavBarContainer>
          <AirbnbIconContainer>
            <AirbnbIcon />
          </AirbnbIconContainer>
          {searchBarState === 0
            ? (
              <NavBarSearch onClick={(e) => this.handleSearchBarState(1, e)}>
                <NavBarSearchText>Start your search</NavBarSearchText>
                <NavBarSearchIconContainer>
                  <NavBarSearchIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/search-tool.png" />
                </NavBarSearchIconContainer>
              </NavBarSearch>
            )
            : (
              <NavBarSearchCategories>
                <NavBarSearchCategoriesItem onClick={(e) => e.stopPropagation()}>
                  <NavBarSearchCategoriesItemHeading
                    valid={searchBarState >= 1 && searchBarState <= 5}
                    onClick={searchBarState > 5 ? (e) => this.handleSearchBarState(1, e) : null}
                  >
                    Places to stay
                  </NavBarSearchCategoriesItemHeading>
                </NavBarSearchCategoriesItem>
                <NavBarSearchCategoriesItem onClick={(e) => e.stopPropagation()}>
                  <NavBarSearchCategoriesItemHeading
                    valid={searchBarState >= 6 && searchBarState <= 8}
                    onClick={searchBarState <= 5 ? (e) => this.handleSearchBarState(6, e) : null}
                  >
                    Experiences
                  </NavBarSearchCategoriesItemHeading>
                </NavBarSearchCategoriesItem>
              </NavBarSearchCategories>
            )}
          <ButtonsContainer>
            <ProfileIconButton onClick={(e) => this.handlePopUpState(2, e)}>
              <MenuIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/menu.png" />
              {loggedIn
                ? <ProfileIconProfileImg src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/profile.png" />
                : (
                  <ProfileIconProfileDiv>
                    <AvatarIconSVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                    </AvatarIconSVG>
                  </ProfileIconProfileDiv>
                )}
            </ProfileIconButton>
            <WorldButtonContainer onClick={(e) => this.handlePopUpState(1, e)}>
              <WorldButtonIcon src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/world.png" />
              <WorldButtonIconDown src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/down-arrow.png" />
            </WorldButtonContainer>
            <BecomeAHostButton>
              Become a host
            </BecomeAHostButton>
            {(userModalState === 2 && loggedIn) && RenderProfileModal}
            {(userModalState === 2 && !loggedIn) && RenderLoginProfileModal}
            {userModalState === 1 && RenderWorldModal}
          </ButtonsContainer>
        </NavBarContainer>
        <NavBarContainerMinWidth>
          <NavBarContainerMinWidthBackButton onClick={setFeaturePage}>
            <img src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/left-arrow.png" alt="img" />
          </NavBarContainerMinWidthBackButton>
          <IconContainer>
            <ShareIcon onClick={() => handleModalState(3)} src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/upload.png" />
            {savedListing !== false
              ? <HeartIcon onClick={() => handleToggleFavorite('remove')} src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/heart.png" />
              : <HeartIcon onClick={() => handleModalState(1)} src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/noheart.png" />}
          </IconContainer>
        </NavBarContainerMinWidth>
        {(searchBarState > 0 && searchBarState <= 5) && RenderExpandedSearchBar}
        {(searchBarState >= 6 && searchBarState <= 8) && RenderExperienceSearchBar}
        {userModalState > 0 && <DivPaddingToExitModal onClick={() => this.setState({ searchBarState: 0, userModalState: 0 })} />}
      </NavBarFullSpan>
    );
  }
}

export default GalleryNavBar;
