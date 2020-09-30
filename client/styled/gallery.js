import styled from 'styled-components';

export const GalleryTopContainer = styled.div`display: block;
width: 100vw;`;

export const GalleryTitleContainer = styled.div`height: 64px;
max-width: 1120px;
margin: 24px auto 24px auto;`;

export const GalleryTitleHeading = styled.span`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 26px;
line-height: 30px;
font-weight: 400px;
}`;

export const GalleryTitleSecondary = styled.span`
padding-top: 8px;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 700px;
`;

export const GalleryTinyMargin = styled.div`
margin-top: 6px;`;

export const GalleryTitleSecondarySilver = styled.span`
font-family: 'Airbnb Cereal App Light';
color: rgb(113, 113, 113);
font-size: 14px;
line-height: 20px;
font-weight: 400;
`;

export const GalleryTitleSecondaryLocation = styled.span`
font-family: 'Airbnb Cereal App Medium';
color: rgb(113, 113, 113);
font-size: 14px;
line-height: 20px;
font-weight: 400;

text-decoration: underline;
`;

export const GalleryContainerLarge = styled.div`
max-height: 750px;
max-width: 1120px;

margin: 0 auto;

width: 100vw;
height: 100vw;

position:relative;
z-index: 0;

display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 8px;
`;

export const GalleryButton = styled.button`
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

font-family: 'Airbnb Cereal App Light';
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

export const GalleryContainerLargeMain = styled.div`
grid-column: 1/2;
grid-row: 1/3;
`;

export const GalleryContainerLargeMainImg = styled.img`
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

export const GalleryContainerLargeAlt = styled.div`
height: 100%;
width: 100%;
grid-column-start: 2;

height: 100%;
width: 100%;
`;

export const GalleryContainerLargeAltImg = styled.img`
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

export const GalleryContainerLargeAltImg2 = styled.img`
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

export const GalleryContainerLargeAltPair = styled.div`
height: 100%;
width: 100%;
grid-column-start: 2;
grid-row: 1/3;
`;

export const GalleryContainerLargeAltPairImg = styled.img`
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
