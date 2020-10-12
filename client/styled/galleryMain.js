import styled from 'styled-components';

export const AppTopContainer = styled.div`
display: grid;
grid-template-rows: minmax(80px, max-content) minmax(88px, max-content) minmax(min-content, max-content) minmax(min-content, max-content);
justify-items: center;

@media screen and (max-width: 750px) {
    grid-template-rows: 64px minmax(650px, max-content) 48px minmax(120px, max-content) auto;
} 
`;

export const GalleryListingTitleContainer = styled.div`
max-width: 1120px;

width: 90vw;

grid-row: 2;

display: flex;
justify-content:center;

@media screen and (max-width: 750px) {
    grid-row: 4;
    width: 92vw;
    padding-bottom: 24px;
    border-bottom: 1px solid rgb(238, 238, 238);
}
`;

export const TitleContainer = styled.div`
height: 100%;
padding-top: 24px;
flex-basis:100%;

@media screen and (max-width: 750px) {
    width: 92vw;
}
`;

export const TitleHeading = styled.span`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 26px;
line-height: 30px;
font-weight: 400px;

width: 100%;
}`;

export const TitleSecondary = styled.span`
padding-top: 8px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 700px;
`;

export const TitleAirbnbIconContainer = styled.div`
display: none;
width: 92vw;

@media screen and (max-width: 750px) {
    display: flex;
    height: 100%;
    grid-row: 3;
    align-items: center;
    padding-top: 32px;
}
`;

export const TitleAirbnbIconMinWidth = styled.div` 
padding-left: 20px;
display: block;
background-size: contain;
height: 39px;
width: 86px;
background-image: url("https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/plus.png"); 
`;

export const TinyMargin = styled.div`
margin-top: 12px;
`;

export const TitleSecondarySilver = styled.span`
font-family: 'Airbnb Cereal App Light';
color: rgb(113, 113, 113);
font-size: 14px;
line-height: 20px;
font-weight: 400;
`;

export const TitleSecondaryLocation = styled.span`
font-family: 'Airbnb Cereal App Medium';
color: rgb(113, 113, 113);
font-size: 14px;
line-height: 20px;
font-weight: 400;

text-decoration: underline;
`;

export const MainImageContainer = styled.div`
max-height: 771px;
max-width: 1120px;

padding-top: 10px;

grid-row: 3;

width: 90vw;
height: calc(90vw * 0.67);

position: relative;
z-index: 0;

display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 8px;

@media screen and (max-width: 750px) {
    grid-row: 2;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100vw;

    padding-top: 0;

    height: calc(100vw * 1.1);
    min-height: 650px;
}
`;

export const ShowMoreButton = styled.button`
position: absolute;
height: 34px;
width: 155px;
z-index: 1;
bottom: 25px;
right: 25px;

border-radius: 10px;
border-width: 1px;
border-color: black;
box-shadow: none;

border: 1px solid rgb(43, 43, 43) !important;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 600px; 

display: flex;
align-items: center;
justify-content: center;

&:hover {
    cursor: pointer;
}

&:active {
    transform: scale(0.95);
}

&:focus {
    outline: 0;
}
`;

export const ContainerLargeMain = styled.div`
grid-column: 1;
grid-row: 1/3;
height: 100%;
width: 100%;

@media screen and (max-width: 750px) {
    grid-column: 1;
    grid-row: 1;
}
`;

export const ContainerLargeMainImgDIV = styled.div`
height: 100%;
width: 100%;
border-top-left-radius: 13px;
border-bottom-left-radius: 13px;

background-image: url('https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/loading-blur.jpg');

@media screen and (max-width: 750px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

`;

export const ContainerLargeMainImg = styled.img`
height: 100%;
width: 100%;

object-fit: cover;
object-position: 50%;
vertical-align: bottom;


border-top-left-radius: 13px;
border-bottom-left-radius: 13px;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}

@media screen and (max-width: 750px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
`;

export const ContainerLargeAlt = styled.div`
height: 100%;
width: 100%;
grid-column-start: 2;

@media screen and (max-width: 750px) {
    display: none;
}
`;

export const ContainerLargeAltImg = styled.img`
object-fit: cover;
object-position: 50%;
vertical-align: bottom;

height: 100%;
width: 100%;
border-top-right-radius: 13px;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}

@media screen and (max-width: 750px) {
    display: none;
}
`;

export const ContainerLargeAltImg2 = styled.img`
object-fit: cover;
object-position: 50%;
vertical-align: bottom;

height: 100%;
width: 100%;
border-bottom-right-radius: 13px;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}

@media screen and (max-width: 750px) {
    display: none;
}
`;

export const ContainerLargeAltPair = styled.div`
height: 100%;
width: 100%;
grid-column: 2/3;
grid-row: 1/3;

@media screen and (max-width: 750px) {
    display: none;
}
`;

export const ContainerLargeAltPairImg = styled.img`
object-fit: cover;
object-position: 50%;
vertical-align: bottom;

height: 100%;
width: 100%;
border-top-right-radius: 13px;
border-bottom-right-radius: 13px;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}

@media screen and (max-width: 750px) {
    display: none;
}
`;

export const NavBarButtonsFont = styled.span`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 14px;
line-height: 18px;
font-weight: 600px; 

text-decoration: underline;

&:hover {
    cursor: pointer;
    background-color: rgb(245, 245, 245); 
}
&:focus {
    outline:0;
}
`;

export const NavBarButtons = styled.button`
position: relative;
background-color: white;
border: none;
z-index: 5;
border-radius: 10px;
float: right;
margin-left: 4px;
width: 76px;
height: 34px;
vertical-align: top;
right: -5px;
bottom: 6px;

&:hover {
    cursor: pointer;
    background-color: rgb(245, 245, 245); 
}

&:hover ${NavBarButtonsFont}{
    background-color: rgb(245, 245, 245); 
}

&:focus {
    outline:0;
}

@media screen and (max-width: 750px) {
    display: none;
}
`;

export const NavBarIcon = styled.img`
vertical-align: bottom;
padding-bottom: 2px;
width: 16px;
height: 16px;
`;

export const ListingBodyContainer = styled.div`
max-width: 1120px;
width: 90vw;
margin: 0 auto;
grid-row: 4;

display: grid;
grid-template-columns: minmax(56vw, 653px) minmax(34vw, 467px);

@media screen and (max-width: 750px) {
    grid-row: 5;
    width: 92vw;
    padding-bottom: 24px;
    border-bottom: 1px solid rgb(238, 238, 238);
    grid-template-columns: 92vw;
}
`;

export const ListingInfoContainer = styled.div`
display: block;
grid-column: 1;
width: 100%;
padding-top:48px;

@media screen and (max-width: 750px) {
    padding-top: 18px;
    padding-bottom: 24px;
}
`;

export const ListingInfoTitle = styled.div`
max-width: 653px;
width: 100%;
padding-bottom: 24px;

display: flex;
justify-content: space-between;

flex-basis: 100%;
`;

export const ListingAvatarContainer = styled.div`
height: 56px;
width: 56px;

border-radius: 50%;
position: relative;
`;

export const ListingInfoHostAvatar = styled.img`
height: 56px;
width: 56px;

user-select: none;

border-radius: 50%;
object-fit: cover;
`;

export const ListingInfoSuperHost = styled.img`
height: 28px;
width: 28px;

user-select: none;

position: absolute;
bottom: -2px;
right: -8px;
`;

export const ListingRoomInfo = styled.div`
display: inline-block;
`;

export const ListingRoomHeading = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 22px;
line-height: 26px;
font-weight: 600px; 

margin-bottom: 8px;

@media screen and (max-width: 750px) {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600px; 
}
`;

export const ListingRoomSecondary = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 
`;

export const ListingInfoDesc = styled.p`
max-width: 653px;
padding-top: 38px;
padding-bottom: 32px;

white-space: pre-wrap;

border-top: 1px solid rgb(235, 235, 235);

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 24px;
font-weight: 400px; 
`;

export const ListingInfoQuote = styled.div`
max-width: 458px;
padding-top: 32px;

border-top: 1px solid rgb(235, 235, 235);

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 24px;
font-weight: 400px; 
`;

export const ListingInfoQuoteHost = styled.div`
max-width: 458px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 24px;
font-weight: 600px; 
`;

export const ListingInfoContactHost = styled.div`
max-width: 653px;
margin-top: 32px;
margin-bottom: 48px;
text-decoration: underline;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 600px; 

user-select: none;

&:hover {
    cursor: pointer;
}
`;

export const ListingInfoGallery = styled.div`
max-width: 653px;
min-height: 280px;
max-height: 442px;
width: 100%;
margin-bottom: 42px;
height: 39vh;

border-radius: 12px;

display: grid;
grid-gap: 8px;
grid-template-rows: 66% 34%;
grid-template-columns: 33% 33% 33%;

@media screen and (max-width: 750px) {
    grid-row: 5;
    width: 92vw;
    margin-bottom: 18px;
    grid-template-rows: 16% 16% 16% 16% 16% 16%;
    grid-template-columns: 50% 50%;
    min-height: 1365px;
    height: auto;
}

@media screen and (min-width: 750px) and (max-width: 950px) {
    height: 30vh;
}
`;

export const ListingInfoGalleryImgDIV = styled.div`
${({ index }) => index === 0 && 'grid-column: 1/3; grid-row: 1; border-top-left-radius: 8px;'}
${({ index }) => index === 1 && 'grid-column: 3/4; grid-row: 1; border-top-right-radius: 8px;'}
${({ index }) => index === 2 && 'grid-column: 1/2; grid-row: 2; border-bottom-left-radius: 8px;'}
${({ index }) => index === 3 && 'grid-column: 2/3; grid-row: 2;'}
${({ index }) => index === 4 && 'grid-column: 3/4; grid-row: 2; border-bottom-right-radius: 8px;'}

@media screen and (max-width: 750px) {
    ${({ index }) => index === 0 && 'grid-column: 1/3; grid-row: 1/3; border-top-left-radius: 8px; border-top-right-radius: 8px;'}
    ${({ index }) => index === 1 && 'grid-column: 1/2; grid-row: 3/5;'}
    ${({ index }) => index === 2 && 'grid-column: 2/3; grid-row: 3/4;'}
    ${({ index }) => index === 3 && 'grid-column: 2/3; grid-row: 4/5;'}
    ${({ index }) => index === 4 && 'grid-column: 1/3; grid-row: 5/7; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;'}
}
`;

export const ListingInfoGalleryImg = styled.img`
width: 100%;
height: 100%;

object-fit: cover;

${({ index }) => index === 0 && 'border-top-left-radius: 8px;'}
${({ index }) => index === 1 && 'border-top-right-radius: 8px;'}
${({ index }) => index === 2 && 'border-bottom-left-radius: 8px;'}
${({ index }) => index === 3 && ''}
${({ index }) => index === 4 && 'border-bottom-right-radius: 8px;'}

@media screen and (max-width: 750px) {
    ${({ index }) => index === 0 && 'grid-column: 1/3; grid-row: 1/3; border-top-left-radius: 8px; border-top-right-radius: 8px;'}
    ${({ index }) => index === 1 && 'grid-column: 1/2; grid-row: 3/5;'}
    ${({ index }) => index === 2 && 'grid-column: 2/3; grid-row: 3/4;'}
    ${({ index }) => index === 3 && 'grid-column: 2/3; grid-row: 4/5;'}
    ${({ index }) => index === 4 && 'grid-column: 1/3; grid-row: 5/7; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;'}
}

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

export const ListingInfoGalleryShowButton = styled.button`
width: 166px;
height: 48px;
margin-bottom: 48px;

background-color: white;
border-radius: 6px; 
border: 1px solid rgb(112, 112, 112);

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 600px; 

&:hover {
    cursor: pointer;
}

&:focus {
    outline: none;
}

@media screen and (max-width: 750px) {
    width: 92vw;
}

`;

export const SleepingArrangementContainer = styled.div`
padding: 48px 0;
max-width: 653px;
max-height: 458px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 600px; 

border-top: 1px solid rgb(235, 235, 235);
`;

export const SleepingArrangementHeadingBar = styled.div`
padding-bottom: 24px;
height: 56px;

display: flex;
justify-content: space-between;
align-items: center;
`;

export const SleepingArrangementHeadingTitle = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 20px;
line-height: 26px;
font-weight: 600px; 
`;

export const SleepingArrangementHeadingNavigation = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 600px; 

display: flex;
align-items: center;
`;

export const SleepingArrangementHeadingNavigationIndex = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 16px;
font-weight: 400px; 
align-text: center;
`;

export const SleepingArrangementRoomSliderContainer = styled.div`
height: 306px;
margin: 0 -8px;
max-width: 680px;
max-height: 306px;
overflow: hidden;
`;

export const SleepingArrangementRoomSlider = styled.div`
height: 100%;

display: flex;
justify-content: space-between;
-webkit-overflow-scrolling: touch;
-webkit-overflow-scrolling property;

transform: translateX(-${({ view }) => view}%);
`;

export const SleepingArrangementRoomSliderButton = styled.div`
color: rgb(34, 34, 34);
height: 32px;
width: 32px;
margin-left: 12px;

border-radius: 100px;
border-width: 0px;
background-color: white; 
border-radius: 1px solid rgb(0, 0, 0);
box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px !important;

display: flex;
align-items: center;
justify-content: center;

&:focus {
    outline:0;
}

&:hover {
    cursor: pointer;
    box-shadow: transparent 0px 0px 0px 12px, transparent 0px 0px 0px 12px, rgba(0, 0, 0, 0.18) 0px 6px 12px !important;
}

&:active {
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px !important;
}
`;

export const SleepingArrangementRoomSliderButtonIcon = styled.img`
height: 12px;
width: 12px;

user-select: none;
`;

export const SleepingArrangementRoomItem = styled.div`
height: 100%;
width: 100%;
flex-basis: 50%;
flex-shrink: 0;
padding: 0 8px;

display: block;

&:hover {
    cursor: pointer;
}
`;

export const SleepingArrangementRoomImage = styled.img`
width: 100%;
height: auto;
max-height: 212px;

object-fit: cover;

border-radius: 8px;

&:hover {
    cursor: pointer;
}

`;

export const SleepingArrangementRoomTitle = styled.div`
margin-top: 16px;
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 600px; 
`;

export const SleepingArrangementRoomFeatures = styled.div`
margin-top: 4px;
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 18px;
font-weight: 600px; 
`;

export const GalleryIcon = styled.img`
height: 18px;
vertical-align: middle;
padding-bottom: 4px;
`;

export const GalleryDotIcon = styled.img`
height: 22px;
vertical-align: middle;
padding-right: 4px;
`;

export const SaveSharePopUpContainer = styled.div`
width: 330px;
height: 105px;
border-radius: 25px;
box-shadow: 2px 2px 10px rgb(210, 210, 210);
padding: 24px;

background-color: white;

position: fixed;
bottom: 22px;
left: 22px;

display: flex;
align-items: center;
justify-content: space-between;

&.slideUp-appear {
    bottom: -200px;
}

&.slideUp-appear-active {
    bottom: 22px;
    transition: bottom 400ms ease;
}

&.slideUp-enter {
    bottom: -200px;
}

&.slideUp-enter-active {
    bottom: 22px;
    transition: bottom 400ms ease;
}

&.slideUp-exit {
    bottom: 22px;
}

&.slideUp-exit-active {
    bottom: -200px;    
    transition: bottom 400ms ease;
}
`;

export const SaveSharePopUpTextBox = styled.div`
width: 200px;
height: 60px;

display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const SaveSharePopUpStatusMain = styled.div`
width: 100%;
text-align: left;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 15px;
line-height: 16px;
font-weight: 600px;
`;

export const SaveSharePopUpStatusSecondary = styled.div`
width: 100%;
text-align: left;


font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 12px;
line-height: 16px;
font-weight: 400px;
`;

export const SaveSharePopUpRevertButton = styled.div`
width: 90px;
border-radius: 25px;
text-align: right;
text-decoration: underline;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 600px;

user-select: none;

&:hover {
    cursor:pointer;
}
`;
