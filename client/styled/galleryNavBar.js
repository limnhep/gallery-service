import styled from 'styled-components';

export const TopContainer = styled.div`
height: 80px;
border-bottom: 1px solid rgb(245, 245, 245);
box-shadow: 0 1px 15px rgb(240, 240, 240);
`;

export const DivPadding = styled.div`
height: 112px;
width: 100vw;
position: absolute;
z-index: 15;
background-color: white;
border-bottom: 1px solid rgb(245, 245, 245);
`;

export const DivPaddingToExitModal = styled.div`
height: 100vh;
width: 100vw;

position: absolute;
z-index: 15;
opacity: 0;
`;

export const NavBarModal = styled.div`
height: 100vw;
width: 100vw;
position: fixed;
z-index: 5;
background-color: pink;
opacity: 0.5;
background-color: #484848;
`;

export const NavBarContainer = styled.div`
width: 1120px;
padding-top: 16px;
margin: 0 auto;

display: flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;

justify-content: space-between;
`;

export const SearchHeading = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 12px;
line-height: 16px;
letter-spacing: 0.04em;
font-weight: 800px; 

flex-basis: 100%;
`;

export const SearchInputContainer = styled.div`
height: 36px;
width: 183px;
`;

export const SearchInput = styled.input`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 18px;
font-weight: 600px; 
border: none;

padding: 0 0;

flex-basis: 100%;

&:focus {
    outline: none;
    background-color: white;
}
`;

export const SearchSecondary = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(113, 113, 113);
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

export const NavBarSearchExpandedContainer = styled.div`
height: 66px;
width: 850px;
background-color: ${({ state }) => (state < 5 ? '#F6F6F6' : 'white')};

position: relative;

margin: 12px auto 0 auto;
padding: 0 0;

border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;
border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;

border: 1px solid lightgrey;

display: flex;
justify-content: space-between;
`;

export const ActiveClass = styled.div`
border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;
box-shadow: 0 1px 15px rgb(240, 240, 240);
background-color: white; 
`;

export const NavBarSearchExpandedLocation = styled.div`
height: 66px;
width: 246px;

display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
padding-left 32px;

border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;

${({ state }) => {
    if (state === 1) {
      return 'background-color: white; box-shadow: 0 1px 15px rgb(240, 240, 240);border-top-right-radius: 50px 50px;border-bottom-right-radius: 50px 50px;';
    }
}}

&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    background-color: lightgrey;
}
`;

export const NavBarSearchExpandedLocationModal = styled.div`
height: 342px;
width: 500px;
position: absolute;
z-index: 15px;
top: 76px;
left: 0;
background-color: white;

border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;
border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;
border: 1px solid lightgrey;
`;

export const NavBarSearchExpandedCalendar = styled.div`
height: 66px;
width: 166px;

display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
padding-left: 24px;

&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    background-color: lightgrey;
}
`;

export const NavBarSearchExpandedCalendarModal = styled.div`
height: 374px;
width: 850px;
position: absolute;
z-index: 15px;
top: 76px;
right: 0;
background-color: white;

border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;
border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;
border: 1px solid lightgrey;
`;

export const ExpandedSearchGuestContainer = styled.div`
width: 223px;
height: 66px;
padding-right: 8px;
display: flex;
align-items: center;

&:hover {
    cursor: pointer;
    border-top-right-radius: 50px 50px;
    border-bottom-right-radius: 50px 50px;
    border-top-left-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px;
    background-color: lightgrey;
}
`;

export const NavBarSearchExpandedGuestModal = styled.div`
height: 245px;
width: 395px;
position: absolute;
z-index: 15px;
top: 76px;
right: 0;
background-color: white;

border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;
border-top-left-radius: 50px 50px;
border-bottom-left-radius: 50px 50px;
border: 1px solid lightgrey;
`;

export const LargeSearchIconContainer = styled.div`
height: 48px;
width: 48px;
border-radius: 50%;
background-color: rgb(146,23,77);

position: relative;
`;

export const LargeSearchIcon = styled.img`
position: absolute;
z-index: 5;

top: 50%;
left: 50%;

transform: translate(-50%, -50%);
`;

export const NavBarSearchExpandedGuests = styled.div`
height: 66px;
width: 172px;

display: flex;
align-items: center;
flex-wrap: wrap;
align-content: center;
padding-left 32px;

border-top-right-radius: 50px 50px;
border-bottom-right-radius: 50px 50px;
`;

export const AirbnbIconContainer = styled.div`
width: 300px;
vertical-align: top;
`;

export const AirbnbIcon = styled.img`
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
border: 1px solid lightgrey;

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
&:hover {
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

export const NavBarSearchCategoriesItemHeading = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 
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
user-select: none

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
height: 110px;
width: 185px;
background-color: white;

position: absolute;
z-index: 20;
right: 85px;
top: 55px;

border-top-right-radius: 15px 15px;
border-bottom-right-radius: 15px 15px;
border-top-left-radius: 15px 15px;
border-bottom-left-radius: 15px 15px;
border: 1px solid lightgrey;

box-shadow: 0 1px 15px rgb(210, 210, 210);
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
border: 1px solid lightgrey;

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

export const ProfileModal = styled.div`
height: 390px;
width: 243px;
background-color: white;

position: absolute;
z-index: 20;
right: 3px;
top: 55px;

border-top-right-radius: 15px 15px;
border-bottom-right-radius: 15px 15px;
border-top-left-radius: 15px 15px;
border-bottom-left-radius: 15px 15px;
border: 1px solid lightgrey;

box-shadow: 0 1px 15px rgb(210, 210, 210);
`;
