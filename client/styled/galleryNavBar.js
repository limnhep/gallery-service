import styled, { css } from 'styled-components';

export const NavBarFullSpan = styled.div`
max-height: 80px;
max-width: 100vw;
width: 100%;
border-bottom: 1px solid rgb(245, 245, 245);
box-shadow: 0 1px 15px rgb(240, 240, 240);
grid-row: 1;

display: flex;
align-items: center;
`;

export const DivPadding = styled.div`
height: 112px;
width: 100vw;
position: absolute;
top: 64px;
z-index: 18;
background-color: white;
border-bottom: 1px solid rgb(245, 245, 245);
`;

export const DivPaddingToExitModal = styled.div`
height: 3000px;
top: 80px;
width: 100vw;

position: absolute;
z-index: 15;
opacity: 100%;
`;

export const NavBarModal = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
z-index: 5;
opacity: 0.5;
background-color: #484848;

top: 80px;
`;

export const NavBarContainer = styled.div`
height: 80px;
max-width: 1120px;
width: 90vw;
margin: 0 auto;

display: flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;

justify-content: space-between;
align-items: center;

@media screen and (max-width: 750px) {
  display: none;
}
`;

export const NavBarContainerMinWidth = styled.div`
height: 64px;
display: none;

@media screen and (max-width: 750px) {
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  max-width: 1120px;
  max-height: 64px;
  width: 100vw;
  margin: 0 auto;
  padding: 0 36px 0 12px;
  
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
`;

export const NavBarContainerMinWidthLeftNavigation = styled.div`
display: flex;
width: 250px;
height: 64px;
flex-wrap: nowrap;
align-items: center;
user-select: none;

&:hover {
  cursor: pointer;
}
`;

export const NavBarContainerMinWidthBackButton = styled.div`
color: rgb(34, 34, 34);
height: 32px;
width: 32px;

border-radius: 100px;
border-width: 0px;
background-color: white; 

display: flex;
align-items: center;
justify-content: center;

&:focus {
    outline:0;
}

&:hover {
    cursor: pointer;
}
`;

export const NavBarContainerMinWidthText = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 800px; 
`;

export const SearchHeading = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 12px;
line-height: 16px;
font-weight: 800px; 

flex-basis: 100%;
`;

export const SearchInputContainer = styled.div`
height: 36px;
width: 100%;
`;

export const SearchInput = styled.input`
font-family: ${({ bold }) => (bold ? 'Airbnb Cereal App Medium' : 'Airbnb Cereal App Light')};
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 18px;
font-weight: 600px; 
border: none;
background-color: ${({ state }) => ((state === 1 || state === 5 || state === 6 || state === 8) ? 'white' : '#F6F6F6')};
padding: 0 0;
overflow: hidden; 
text-overflow: ellipsis; 
white-space: nowrap;

flex-basis: 100%;

&:hover {
    background-color: ${({ state }) => ((state === 1 || state === 6) ? 'white' : '#F6F6F6')}
}

&:focus {
    outline: none;
    background-color: white;
}
`;

export const SearchSecondary = styled.div`
font-family: ${({ bold }) => (!bold ? 'Airbnb Cereal App Light' : 'Airbnb Cereal App Medium')};
color: rgb(43, 43, 43);
font-size: 14px;
line-height: 18px;
font-weight: 400px; 
border: none;

padding: 0 0;

flex-basis: 100%;

&:focus {
    outline: none;
}
`;

export const SearchSecondaryExtra = styled.span`
font-family: 'Airbnb Cereal App Light';
color: rgb(43, 43, 43);
font-size: 14px;
line-height: 18px;
font-weight: 400px; 
border: none;
margin-left: 8px;

padding: 0 0;

&:focus {
    outline: none;
}
`;

export const NavBarSearchExpandedContainer = styled.div`
--white-bg: white;
--grey-bg: #F6F6F6;
height: 66px;
max-width: 850px;
width: 90vw;
background-color: ${({ state }) => (state < 5 ? '#F6F6F6' : 'white')};

${({ modal }) => {
    if (modal > 0) {
      return 'background-color: white;';
    }
    return '';
  }}

position: relative;

margin: 12px auto 0 auto;
padding: 0 0;

border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;
border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;

border: 1px solid rgb(235,235,235);

display: grid;
grid-template-columns: ${({ state }) => (state === 5 ? '270px 179px 179px 227px' : '248px 165px 165px 278px')};

&.slideDown-appear {
  margin-top: -40px;
  transform: scale(0.5, 1);
}

&.slideDown-appear-active {
  margin-top: 12px;
  transform: scale(1, 1);
  transition: all 200ms ease;
}
`;

export const NavBarSearchExperienceContainer = styled.div`
--white-bg: white;
--grey-bg: #F6F6F6;
height: 66px;
width: 100%;
max-width: 850px;
background-color: ${({ state }) => (state < 8 ? '#F6F6F6' : 'white')};

${({ modal }) => {
    if (modal > 0) {
      return 'background-color: white;';
    }
    return '';
  }}

position: relative;

margin: 12px auto 0 auto;
padding: 0 0;

border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;
border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;

border: 1px solid rgb(235,235,235);

display: grid;
grid-template-columns: ${({ state }) => (state === 8 ? '410px 440px' : '375px 474px')};
`;

export const NavBarSearchExpandedLocation = styled.div`
height: 66px;
width: 100%;

position: relative;

grid-column: 1;

display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
padding-left 32px;

border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;

-webkit-box-shadow: 3px 3px 15px transparent;
-moz-box-shadow: 3px 3px 15px transparent;
box-shadow: 3px 3px 15px transparent;

${({ state }) => {
    if (state === 1 || state === 6) {
      return '-webkit-box-shadow: 3px 3px 15px transparent; -moz-box-shadow: 3px 3px 15px transparent; box-shadow: 3px 3px 15px rgb(210, 210, 210); background-color: var(--white-bg); border-top-right-radius: 50px 50px;border-bottom-right-radius: 50px 50px;}';
    }
    return 'box-shadow: 0 0 0 white;';
  }}

${({ state, modal }) => {
    if (modal > 0 || state === 5) {
      return 'background-color: none; box-shadow: 0 0 0 white;';
    }
    return '';
  }}

&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    ${({ state }) => state !== 1 && 'background-color: rgb(235,235,235)'};


    ${({ state }) => (state === 1 || state === 6) && 'background-color: white'};


    ${SearchInput} {
        background-color: ${({ state }) => ((state === 1 || state === 6) ? 'white' : 'rgb(235,235,235)')};
    }
}
`;

export const NavBarSearchExpandedLocationModal = styled.div`
width: 500px;
position: absolute;
z-index: 15px;
top: 76px;
left: 0;
background-color: white;

padding: 25px 0 25px 0;

border-top-right-radius: 32px 32px;
border-bottom-right-radius: 32px 32px;
border-top-left-radius: 32px 32px;
border-bottom-left-radius: 35px 32px;
border: 1px solid rgb(235,235,235);

display: block;
`;

export const LocationModalItemImg = styled.img`
height: 48px;
width: 48px;

border-top-right-radius: 8px 8px;
border-bottom-right-radius: 8px 8px;
border-top-left-radius: 8px 8px;
border-bottom-left-radius: 8px 8px;

margin-left: 8px;

flex-basis: 48px;
`;

export const LocationModalItemText = styled.div`
margin-left: 12px;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 
`;

export const LocationModalItemDiv = styled.div`
height: 64px;

padding: 0px 25px 0 25px;

display: flex;
align-items: center;

&:hover {
    cursor: pointer;
    background-color: #F6F6F6;

    ${LocationModalItemText} {
        background-color: #F6F6F6;
    }
}
`;

const ExpandedSearchDividerLeft = css`
&:after {
  position: absolute;
  height: 32px;
  content: '';
  left: 0;
  border-left: 1px solid lightgrey;
}
`;

export const NavBarSearchExpandedCalendarFrom = styled.div`
height: 66px;
width: 100%;

position: relative;

grid-column: 2;

display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
padding-left: 24px;

-webkit-box-shadow: 3px 3px 15px transparent;
-moz-box-shadow: 3px 3px 15px transparent;
box-shadow: 3px 3px 15px transparent;

${({ state, hoveringState }) => (state !== 1 && state !== 2 && hoveringState !== 1 && hoveringState !== 2) && ExpandedSearchDividerLeft}

${({ state }) => {
    if (state === 2) {
      return '-webkit-box-shadow: 3px 3px 15px transparent; -moz-box-shadow: 3px 3px 15px transparent; box-shadow: 3px 3px 15px rgb(210, 210, 210); background-color: var(--white-bg); border-top-left-radius: 50px 50px; border-bottom-left-radius: 50px 50px; border-top-right-radius: 50px 50px; border-bottom-right-radius: 50px 50px;}';
    }
    return '';
  }}

${({ modal }) => {
    if (modal > 0) {
      return 'background-color: none; box-shadow: 0 0 0 white;';
    }
    return '';
  }}

&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    background-color: rgb(235,235,235);

    ${({ state }) => state === 2 && 'background-color: white'}
}
`;

export const NavBarSearchExpandedCalendarTo = styled.div`
height: 66px;
width: 100%;

position: relative;

grid-column: 3;

display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
padding-left: 24px;

-webkit-box-shadow: 3px 3px 15px transparent;
-moz-box-shadow: 3px 3px 15px transparent;
box-shadow: 3px 3px 15px transparent;

${({ state, hoveringState }) => (state !== 2 && state !== 3 && hoveringState !== 2 && hoveringState !== 3) && ExpandedSearchDividerLeft}

${({ state }) => {
    if (state === 3) {
      return '-webkit-box-shadow: 3px 3px 15px transparent; -moz-box-shadow: 3px 3px 15px transparent; box-shadow: 3px 3px 15px rgb(210, 210, 210); background-color: var(--white-bg); border-top-left-radius: 50px 50px;border-bottom-left-radius: 50px 50px; border-top-right-radius: 50px 50px; border-bottom-right-radius: 50px 50px;}';
    }
    return '';
  }}

${({ modal }) => {
    if (modal > 0) {
      return 'background-color: none; box-shadow: 0 0 0 white;';
    }
    return '';
  }}

&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    background-color: rgb(235,235,235);

    ${({ state }) => state === 3 && 'background-color: white'}
}
`;

export const NavBarSearchExpandedExperienceCalendar = styled.div`
height: 66px;
width: 100%;

position: relative;

grid-column: 2;


display: flex;
align-items: center;
flex-wrap: wrap;
padding-left: 24px;
padding-right: 8px;

-webkit-box-shadow: 3px 3px 15px transparent;
-moz-box-shadow: 3px 3px 15px transparent;
box-shadow: 3px 3px 15px transparent;

${({ state, hoveringState }) => (state !== 6 && state !== 7 && hoveringState !== 6 && hoveringState !== 7) && ExpandedSearchDividerLeft}

${({ state }) => {
    if (state === 7) {
      return '-webkit-box-shadow: 3px 3px 15px transparent; -moz-box-shadow: 3px 3px 15px transparent; box-shadow: 3px 3px 15px rgb(210, 210, 210); background-color: var(--white-bg); border-top-left-radius: 50px 50px;border-bottom-left-radius: 50px 50px; border-top-right-radius: 50px 50px; border-bottom-right-radius: 50px 50px;}';
    }
    return '';
  }}

${({ modal }) => {
    if (modal > 0) {
      return 'background-color: none; box-shadow: 0 0 0 white;';
    }
    return '';
  }}

&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    background-color: rgb(235,235,235);

    ${({ state }) => state === 7 && 'background-color: white'}
}
`;

export const NavBarSearchExpandedExperienceCalendarText = styled.div`
height: 66px;
width: 322px;

position: relative;

display: flex;
flex-grow: 1.4;
align-items: center;
flex-wrap: wrap;
align-content: center;

border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;
`;

export const NavBarSearchExpandedCalendarModal = styled.div`
width: 850px;
position: absolute;
z-index: 15px;
top: 76px;
right: 0;
background-color: white;


border-top-right-radius: 32px 32px;
border-bottom-right-radius: 32px 32px;
border-top-left-radius: 32px 32px;
border-bottom-left-radius: 35px 32px;
border: 1px solid rgb(235,235,235);
`;

export const CalendarModal = styled.div`
width: 849px;
padding: ${({ extraDays }) => (extraDays === true ? '16px 32px 0 32px' : '16px 32px 28px 32px')};
display: flex;
justify-content: space-between;
`;

export const CalendarAdditionDaysContainers = styled.div`
width: 100%;
flex-basis: 100%;
display: block;
`;

export const CalendarAdditionDays = styled.div`
padding: 32px 0;
margin: 0 54px;
`;

export const CalendarAdditionDaysButton = styled.button`
height: 40px;
margin-left: 8px;
padding: 10px 18px;
border-top-right-radius: 24px;
border-top-left-radius: 24px;
border-bottom-left-radius: 24px;
border-bottom-right-radius: 24px;
border: ${({ days }) => (days === false ? '1px solid rgb(113, 113, 113)' : '2px solid rgb(43, 43, 43)')};
background-color: #F7F7F7;

display: inline-block;

user-select: none;

font-family: ${({ days }) => (days === null ? 'Airbnb Cereal App Light' : 'Airbnb Cereal App Medium')};
color: rgb(43, 43, 43);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 400px; 

&:hover {
  cursor: pointer;
}

&:focus {
  outline: none;
}
`;

export const CalendarModalMonthContainer = styled.div`
width: 390px;
padding: 0 27px 6px 27px;
`;

export const CalendarModalHeading = styled.div`
height: 79px;
width: 336px;
padding-top: 22px;
padding-bottom: 37px;

text-align: center;
user-select: none;

font-family: 'Airbnb Cereal App Medium';
color: #222222;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 

position: relative;
`;

export const CalendarModalHeadingWeekContainer = styled.div`
position: absolute;
bottom: 0;
display: grid;
width: 336px;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const CalendarModalButtonContainer = styled.div`
height: 32px;
width: 32px;
position: absolute;
${({ left }) => (left === true ? 'left: -12px' : 'right: -12px')};
top: 15px;
border-radius: 50px;

display: flex;
align-items: center;
justify-content: center;

&:hover {
  cursor: pointer;
  background-color: #F7F7F7;
}
`;

export const CalendarModalForwardButtonContainer = styled.div`
height: 32px;
width: 32px;
position: absolute;
right: -12px;
top: 15px;
border-radius: 50px;

display: flex;
align-items: center;
justify-content: center;

&:hover {
  cursor: pointer;
  background-color: #F7F7F7;
}
`;

export const CalendarModalNavigationButton = styled.img`
height: 12px;
width: 12px;

&:hover {
  cursor: pointer;
}
`;

export const CalendarModalHeadingWeek = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(113, 113, 113);
font-size: 12px;
line-height: 16px;
font-weight: 800px; 
`;

export const CalendarModalBody = styled.div`
width: 336px;

display: grid;
grid-row-gap: 2px;

grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const BoxDivGreyBackground = css`
&:hover {
  background-color: #F7F7F7;
  border-radius: 0;
}
`;

export const CalendarModalBodyDayBoxDiv = styled.div`
height: 48px;
width: 48px;

border-radius: 50px;

${({ forwardStyling }) => forwardStyling && 'border-top-right-radius: 0; border-bottom-right-radius: 0; background-color: #F7F7F7;'}
${({ backwardStyling }) => backwardStyling && 'border-top-left-radius: 0; border-bottom-left-radius: 0; background-color: #F7F7F7;'}
${({ betweenStylingFirstBox }) => betweenStylingFirstBox && 'box-shadow: -32px 0px 7px 1px #F7F7F7'};
${({ betweenStylingLastBox }) => betweenStylingLastBox && 'box-shadow: 32px 0px 7px 1px #F7F7F7'};
${({ betweenStyling }) => betweenStyling && BoxDivGreyBackground}
`;

export const CalendarModalBodyDayBox = styled.div`
height: 48px;
width: 48px;

${({ renderBackgroundBlack }) => (renderBackgroundBlack && 'background-color: rgb(34, 34, 34)')};
${({ renderBackgroundBlack }) => (renderBackgroundBlack && 'border-radius: 100px; border: 1px solid black')};
${({ betweenStyling }) => (betweenStyling && 'background-color: #F7F7F7')};

display: flex;
justify-content: center;
align-items: center;

border: 1px solid parent;

&:hover {
  cursor: ${({ validDay }) => (validDay ? 'pointer' : 'auto')};
   ${({ validDay }) => (validDay ? 'border-radius: 100px; border: 1px solid black' : '')};
}
`;

export const CalendarModalBodyDayText = styled.div`
font-family: 'Airbnb Cereal App Medium';

font-size: 14px;
line-height: 18px;
font-weight: 600; 

color: ${({ validDay }) => (validDay ? 'rgb(34, 34, 34)' : 'lightgrey')};
${({ renderBackgroundBlack }) => (renderBackgroundBlack && 'color: white')};
user-select: none;
`;

export const ExpandedSearchGuestContainer = styled.div`
width: 100%;
height: 66px;

grid-column: 4;

padding-right: 12px;
display: flex;
align-items: center;

position: relative; 

box-shadow: 3px 3px 15px transparent;

${({ state, hoveringState }) => (state !== 3 && state !== 4 && hoveringState !== 3 && hoveringState !== 4) && ExpandedSearchDividerLeft}

${({ state }) => {
    if (state === 4) {
      return 'padding-right: 8px; box-shadow: 3px 3px 15px rgb(210, 210, 210); background-color: var(--white-bg); border-top-left-radius: 50px 50px; border-bottom-left-radius: 50px 50px; border-top-right-radius: 50px 50px; border-bottom-right-radius: 50px 50px; }';
    }
    return '';
  }}

${({ state, modal }) => {
    if (modal > 0 || state === 5) {
      return 'background-color: none; box-shadow: 0 0 0 white;';
    }
    return '';
  }}


&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    background-color: rgb(235,235,235);

    ${({ state }) => state === 4 && 'background-color: white'}
}
`;

export const NavBarSearchExpandedGuestModal = styled.div`
width: 395px;
position: absolute;
z-index: 15px;
top: 76px;
right: 0;
background-color: white;

border-top-right-radius: 32px 32px;
border-bottom-right-radius: 32px 32px;
border-top-left-radius: 32px 32px;
border-bottom-left-radius: 35px 32px;
border: 1px solid rgb(235,235,235);

display: block;
padding: 16px 32px 16px 32px;
`;

export const GuestModalItem = styled.div`
height: 70px;
display: flex;
align-items: center;
`;

export const GuestModalItemText = styled.div`
flex-basis: 222px;
align-items: center;
display: block;
`;

export const GuestModalItemTextPrimary = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 
`;

export const GuestModalItemTextSecondary = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(113, 113, 113);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 200px; 
`;

export const GuestModalItemTextGuestNumber = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 200px; 
`;

export const GuestModalIncrementContainer = styled.div`
flex-basis: 104px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const GuestModalIncrementContainerIcon = styled.img`
height: 32px;
width: 32px;

opacity: ${({ valid }) => (valid ? '0.8' : '0.2')};

&:hover {
    cursor: ${({ valid }) => (valid ? 'pointer' : 'not-allowed')};
}
`;

export const RoundSearchIconContainer = styled.div`
height: 48px;
width: 48px;
border-radius: 50%;
background-color: rgb(146,23,77);

&:hover {
  background-color: rgb(229,35,83);
  transition: background-color 0.3s ease;
}

display: flex;
justify-content: center;
align-items: center;
`;

export const LargeSearchIconContainer = styled.div`
height: 48px;
width: 120px;
flex-basis: 120px;

border-top-right-radius: 25px 25px;
border-bottom-right-radius: 25px 25px;
border-top-left-radius: 25px 25px;
border-bottom-left-radius: 25px 25px;

--mouse-x: 30.625;
--mouse-y: 87.5;

transition: opacity 1.25s ease 0s !important;

background-size: 200% 200% !important;
background-image: radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%) !important;
background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%);


grid-column: 5;

display: flex;
justify-content: center;
align-items: center;
`;

export const LargeSearchIcon = styled.svg`
display: block; 
fill: none; 
color: white;
height: 16px; 
width: 16px; 
stroke: currentcolor; 
stroke-width: 4; 
overflow: visible;"
`;

export const LargeSearchIconText = styled.div`
padding-left: 8px;

font-family: 'Airbnb Cereal App Light';
color: white;
font-size: 16px;
line-height: 16px;
font-weight: 600px; 
`;

export const NavBarSearchExpandedGuests = styled.div`
height: 66px;
width: 166px;

display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
padding-left 32px;

position: relative;

border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;
`;

export const AirbnbIconContainer = styled.div`
width: 300px;
vertical-align: top;
@media screen and (max-width: 950px) {
  width: 100px;
}
`;

export const AirbnbIcon = styled.div`
height: 52px;
width: 112px;
background-image: url("https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/plus.png"); 

&:hover {
    cursor: pointer;
}

@media screen and (min-width: 745px) and (max-width: 1120px){
  display: none;
  // height: 40px;
  // width: 36px;
  // background-image: url("https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/plus-small.jpeg");
}
`;

export const AirbnbIconSmall = styled.div`
display: none
height: 40px;
width: 36px;
background-image: url("https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/plus-small.jpeg");

@media screen and (min-width: 745px) and (max-width: 1120px){
  display: block;
  height: 40px;
  width: 36px;
  background-image: url("https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/plus-small.jpeg");

  &:hover {
    cursor: pointer;
}
`;

export const NavBarSearch = styled.div`
height: 48px;
width: 300px;
border-top-left-radius: 25px 25px;
border-bottom-left-radius: 25px 25px;
border-top-right-radius: 25px 25px;
border-bottom-right-radius: 25px 25px;
border: 1px solid rgb(235,235,235);

margin-left: -20px;

display: flex;
align-items: center;
justify-content: space-between;
&:hover {
    cursor: pointer;
    box-shadow: 0 2px 5px rgb(200, 200, 200);
}
`;

export const NavBarSearchCategories = styled.div`
height: 48px;
width: 300px;

display: flex;
align-items: center;

&.slideDown-appear {
  margin-top: -50px;
  opacity: 0;
  transform: scale(0.3, 1);
}

&.slideDown-appear-active {
  margin-top: 0;
  opacity: 1;
  transform: scale(1, 1);
  transition: all 200ms ease;
}
`;

export const NavBarSearchCategoriesItem = styled.div`
height: 40px;
width: 122px;
padding: 10px 16px 10px 16px;

flex-basis: 50%;
display: flex;
align-items: center;
justify-content:center; 
`;

const HeadingActiveUnderline = css`
&:before {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 28px;
  width: 18px;
  content: '';
  border-top: 2px solid black;
}
`;

const HeadingHoverUnderline = css`
&:hover::before {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 28px;
  width: 4px;
  content: '';
  border-top: 2px solid black;
}

&:hover {
  cursor: pointer;
}
`;

export const NavBarSearchCategoriesItemHeading = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 

position: relative;

&:hover {
  cursor: default;
}

${({ valid }) => !valid && HeadingHoverUnderline}
${({ valid }) => valid && HeadingActiveUnderline}
`;

export const NavBarSearchText = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 600px; 

margin-left: 25px;
`;

export const NavBarSearchIconContainer = styled.div`
height: 32px;
width: 32px;
border-radius: 50px;
background-color: rgb(146,23,77);

margin-right: 8px;

display: flex;
align-items: center;
justify-content: center;
user-select: none;

transform: translate(0px, 0px)!important;

&:hover {
    cursor: pointer;
}
&:focus {
    outline: none;
}
`;

export const NavBarSearchIcon = styled.img`
height: 16px;
width: 16px;
border: none;

justify-self: flex-end;

background-color: white;

pointer-events: none;
user-select: none;

&:hover {
    cursor: pointer;
}
&:focus {
    outline: none;
    pointer-events: none;
}
`;

export const ButtonsContainer = styled.div`
width: 300px;
height: 42px;
margin-right: -10px;
position: relative;
`;

export const BecomeAHostButton = styled.button`
width: 121px;
height: 42px;
float: right; 

border-top-left-radius: 25px 25px;
border-bottom-left-radius: 25px 25px;
border-top-right-radius: 25px 25px;
border-bottom-right-radius: 25px 25px;
border: none;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 600px; 

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(96%);
    transition: -webkit-filter 0.3s;
}

&:focus {
    outline: none;
}
`;

export const WorldButtonContainer = styled.div`
width: 55px;
height: 42px;
float: right; 
margin-right: 8px;
background-color: white;

border: none;
border-top-left-radius: 25px 25px;
border-bottom-left-radius: 25px 25px;
border-top-right-radius: 25px 25px;
border-bottom-right-radius: 25px 25px;

display: flex;
align-items: center;
justify-content: center;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(96%);
    transition: -webkit-filter 0.3s;
}
`;

export const WorldButtonIcon = styled.img`
height: 16px;
width: 16px;
margin-right: 6px;

pointer-events: none;
user-select: none;
`;

export const WorldButtonIconDown = styled.img`
height: 9x;
width: 9px;
margin-top: 1px;

pointer-events: none;
user-select: none;
`;

export const WorldModal = styled.div`
width: 185px;
background-color: white;

position: absolute;
z-index: 20;
right: 85px;
top: 55px;

border-top-right-radius: 12px 12px;
border-bottom-right-radius: 12px 12px;
border-top-left-radius: 12px 12px;
border-bottom-left-radius: 12px 12px;
border: 1px solid rgb(235,235,235);

box-shadow: 0 1px 15px rgb(210, 210, 210);

display: block;
padding: 8px 0 8px 0;
`;

export const WorldModalIcon = styled.img`
height: 14px;
width: 14px;
margin-right: 12px;

pointer-events: none;
user-select: none;
`;

export const WorldModalText = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 600px; 

margin-right: 12px;
`;

export const WorldModalItem = styled.div`
height: 42px;
padding: 0 16px 0 16px;

display: flex;
align-items: center;

&:hover {
    cursor: pointer;
    background-color: #F6F6F6;

    ${WorldModalText} {
        background-color: #F6F6F6;
    }
}
`;

export const MenuIcon = styled.img`
height: 14px;
width: 14px;
margin-left: 12px;

pointer-events: none;
user-select: none;
`;

export const ProfileIconButton = styled.div`
width: 77px;
height: 42px;
float: right; 

border-top-left-radius: 25px 25px;
border-bottom-left-radius: 25px 25px;
border-top-right-radius: 25px 25px;
border-bottom-right-radius: 25px 25px;
border: 1px solid rgb(235,235,235);

display: flex;
align-items: center;

&:hover {
    cursor: pointer;
    box-shadow: 0 2px 5px rgb(200, 200, 200);
}
`;

export const ProfileIconProfileImg = styled.img`
height: 30px;
width: 30px;

pointer-events: none;
user-select: none;

border-radius: 50px;
margin-left: 13px;
`;

export const ProfileIconProfileDiv = styled.div`
height: 30px;
width: 30px;

pointer-events: none;
user-select: none;

border-radius: 50px;
margin-left: 13px;
`;

export const ProfileModal = styled.div`
width: 243px;
background-color: white;

position: absolute;
z-index: 20;
right: 3px;
top: 55px;

border-top-right-radius: 12px 12px;
border-bottom-right-radius: 12px 12px;
border-top-left-radius: 12px 12px;
border-bottom-left-radius: 12px 12px;
border: 1px solid rgb(235,235,235);

box-shadow: 0 1px 15px rgb(210, 210, 210);

display: block;
`;

export const ProfileContainers = styled.div`
padding: 12px 0 12px 0;
display: block;
${({ borderBottom }) => borderBottom && 'border-bottom: 1px solid lightgrey;'}
`;

export const ProfileContainersItem = styled.div`
flex-basis: 100%;
display: flex;
justify-content: space-between;
`;

export const ProfileContainersHeading = styled.div`
font-family: ${({ bold }) => (bold === true ? 'Airbnb Cereal App Medium' : 'Airbnb Cereal App Light')};
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 600px; 

position: relative;
`;

export const ProfileContainersStatus = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(113, 113, 113);
background-color: #ffffff;
font-size: 12px;
line-height: 16px;
font-weight: 400px; 
`;

export const NewMessagesNotification = styled.div`
width: 6px;
height: 6px;
background-color: rgb(146,23,77);
border-radius: 50%;

position: absolute;
top: -2px;
right: -8px;
`;

export const ProfileContainersDiv = styled.div`
padding: 0 16px 0 16px;
height: 42px;
display: flex;
align-items: center;

&:hover {
    cursor: pointer;
    background-color: #F6F6F6;

    ${ProfileContainersHeading} {
        background-color: #F6F6F6;
    }

    ${ProfileContainersStatus} {
        background-color: #F6F6F6;
    }
}
`;

// SVGS

export const AvatarIconSVG = styled.svg`
display: block; 
height: 100%; 
width: 100%; 
fill: #717171;
`;

export const CloseButton = styled.div`
height: 24px;
width: 24px;

border-radius: 50%;

position: absolute;
top: 50%;
right: 7%;

transform: translateY(-50%);

display: flex;
align-items: center;
justify-content: center;

background-color: rgb(235,235,235);
`;

export const CloseButtonIMG = styled.img`
height: 10px;
width: 10px;
`;

// ------------------------- NAVBAR STICKY  ------------ //

export const StickyNavBarDIV = styled.div`
position: fixed;
z-index: 2000;
top: 0;
height: 80px;
width: 100%;
background-color: white;

border-bottom: 1px solid rgb(245, 245, 245);

&.slideDown-appear {
  top: -100px;
  
}

&.slideDown-appear-active {
  top: 0;
  transition: top 200ms ease;
}

&.slideDown-enter {
  top: -100px;
  
}

&.slideDown-enter-active {
  top: 0;
  transition: top 200ms ease;
}

&.slideDown-exit {
  top: 0;
  
}

&.slideDown-exit-active {
  top: -100px;
  transition: top 200ms ease;
}

@media screen and (max-width: 750px){
  display: none;
}
`;

export const StickyNavBar = styled.div`
max-width: 1120px;
width: 90vw;
height: 80px;
margin: 0 auto;

display: flex;
align-items: center;
`;

export const StickyNavBarMinWidthDIV = styled.div`
display: none;

@media screen and (max-width: 750px){
  position: fixed;
  bottom: 0;
  z-index: 2000;
  width: 100vw;
  height: 80px;
  background-color: white;

  display: block;
  border-top: 1px solid rgb(245, 245, 245);
}
`;

export const StickyNavBarMinWidth = styled.div`
width: 90vw;
height: 80px;
display: none;

@media screen and (max-width: 750px){
  margin: 0 auto;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;

export const StickyNavBarIconContainer = styled.div`
height: 44px;
width: 79px;
background-size: contain;
background-image: url("https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/plus2.png"); 

margin-right: 24px;

@media screen and (max-width: 850px){
  margin-right: 12px;
}

&:hover {
  cursor: pointer;
}
`;

export const StickyNavBarIcon = styled.div`
object-fit: contain;
height: 100%;
width: 100%;
`;

export const StickyNavBarLinks = styled.div`
margin-right: 24px;
height: 80px;
display: flex;
align-items: center;

position: relative;

@media screen and (max-width: 850px){
  margin-right: 16px;
}

&:hover {
  cursor: pointer;

  &:after {
    position: absolute;
    width: 100%;
    content: '';
    bottom: 0;
    border-bottom: 5px solid black;
  }
}
`;

export const StickyNavBarLinksText = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(43, 43, 43);
background-color: #ffffff;
font-size: 14px;
line-height: 16px;
font-weight: 400px; 

&:hover {
  cursor: pointer;
}
`;

export const StickyNavBarCalendar = styled.div`
width: 284px;
height: 48px;
margin-left: auto;

font-family: 'Airbnb Cereal App Medium';
color: rgb(43, 43, 43);
background-color: #ffffff;
font-size: 14px;
line-height: 16px;
font-weight: 400px; 

display: flex;
align-items: center;

&.fadeIn-appear {
  opacity: 0;
}

&.fadeIn-appear-active {
  opacity: 1;
  transition: opacity 500ms ease;
}
`;

export const StickyNavBarCalendarPriceContainer = styled.div`
width: 104px;
height: 45px;
flex-basis: 104px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(43, 43, 43);
background-color: #ffffff;
font-size: 14px;
line-height: 16px;
font-weight: 400px; 

display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const StickyNavBarCalendarPrice = styled.div`
width: 104px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(43, 43, 43);
background-color: #ffffff;
font-size: 18px;
line-height: 24px;
font-weight: 400px; 
`;

export const StickyNavBarCalendarPriceSecondary = styled.span`
font-family: 'Airbnb Cereal App Light';
color: rgb(43, 43, 43);
background-color: #ffffff;
font-size: ${({ fontSize }) => fontSize}px;
line-height: 18px;
font-weight: 400px; 
`;

export const StickyNavBarCalendarRating = styled.div`
width: 104px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(43, 43, 43);
background-color: #ffffff;
font-size: 12px;
line-height: 14px;
font-weight: 400px; 
`;

export const StickyNavBarCalendarCheckAvailability = styled.button`
width: 180px;
height: 48px;
flex-basis: 180px;

font-family: 'Airbnb Cereal App Book';
color: white;

transition: opacity 1.25s ease 0s !important;

background: linear-gradient(90deg, rgba(185,29,88,1) 0%, rgba(136,21,81,1) 31%);

&:hover {  
  cursor: pointer;
  background: radial-gradient(circle at center, #BD1E59 0%, #92174D 35%, #861453 50%, #6C0D63 100% );
  ${({ position }) => (position !== null) && `background-position: ${position[0]}px ${position[1]}px`};
}
&:active {
  background: radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100%);
  transform: scale(.95);
  transition: all 100ms ease-out 0s;
}

font-size: 16px;
line-height: 20px;
font-weight: 600px; 

user-select: none;
border-radius: 8px;
border: none;

&:focus {
  outline: none;
}
`;

export const StarIcon = styled.img`
height: 10px;
width: 10px;
`;
