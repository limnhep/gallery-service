import styled from 'styled-components';

export const AppTopContainer = styled.div`
display: block;
width: 100vw;
`;

export const TitleContainer = styled.div`
height: 64px;
max-width: 1120px;
padding-top: 24px;
margin: 0 auto 20px auto;`;

export const TitleHeading = styled.span`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 26px;
line-height: 30px;
font-weight: 400px;
}`;

export const TitleSecondary = styled.span`
padding-top: 8px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 700px;
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

export const ContainerLarge = styled.div`
max-height: 771px;
max-width: 1120px;

left: 50%;
transform: translate(-50%);
padding-top: 24px;

width: 100vw;
height: 100vw;

position:relative;
z-index: 0;

display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 8px;
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
grid-column: 1/2;
grid-row: 1/3;
`;

export const ContainerLargeMainImg = styled.img`
height: 100%;
width: 100%;
border-top-left-radius: 13px;
border-bottom-left-radius: 13px;

object-fit: cover;
object-position: 50%;
vertical-align: bottom;

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(85%);
    transition: -webkit-filter 0.3s;
}
`;

export const ContainerLargeAlt = styled.div`
height: 100%;
width: 100%;
grid-column-start: 2;

height: 100%;
width: 100%;
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
`;

export const ContainerLargeAltPair = styled.div`
height: 100%;
width: 100%;
grid-column-start: 2;
grid-row: 1/3;
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
`;

export const NavBarIcon = styled.img`
vertical-align: bottom;
padding-bottom: 2px;
width: 16px;
height: 16px;
`;

export const ListingBodyContainer = styled.div`
width:1120px;
margin: 0 auto;
display: grid;
grid-template-columns: 653px 467px;
height: 1000px;
`;

export const ListingInfoContainer = styled.div`
display: inline;
grid-column: 1/2;
height: 56px;
padding-top:48px;
padding-bottom:24px;
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
height:16px;
vertical-align: middle;
padding-bottom: 2px;
`;
