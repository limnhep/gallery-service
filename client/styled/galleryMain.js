import styled from 'styled-components';

export const AppTopContainer = styled.div`
display: grid;
grid-template-rows: 80px minmax(88px, max-content) minmax(min-content, max-content) max-content;
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
right: -10px;
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
grid-template-columns: 653px 467px;

@media screen and (max-width: 750px) {
    grid-row: 5;
    width: 92vw;
    padding-bottom: 24px;
    border-bottom: 1px solid rgb(238, 238, 238);
}
`;

export const ListingInfoContainer = styled.div`
display: inline;
grid-column: 1/2;
height: 56px;
padding-top:48px;
padding-bottom:24px;

@media screen and (max-width: 750px) {
    padding-top: 18px;
    padding-bottom: 24px;
}
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

export const ListingAvatarContainer = styled.div`
display: inline-block;
float:right
width: 56px;
height: 56px;
border-radius:50%;
background-color:orange;
`;

export const GalleryIcon = styled.img`
height:22px;
vertical-align: middle;
padding-right:4px;
`;
