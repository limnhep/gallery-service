import styled from 'styled-components';

export const TopContainer = styled.div`
padding-bottom: 54px;
`;

export const Header = styled.div`
height: 48px;
width: 100vw !important;
position: fixed;
background-color: white;
z-index: 2;
`;

export const ToggleButton = styled.button`
color: rgb(34, 34, 34);
height: 32px;
width: 32px;

position: absolute;
left: 16px;
bottom: 0;

border-radius: 100px;
border-width: 0px;
background-color: white; 

&:focus {
    outline:0;
}

&:hover {
    cursor: pointer;
    background-color: rgb(245, 245, 245); 
}
`;

export const Overview = styled.div`
max-width: 1120px;

padding-top: 48px;
margin: 0 auto;
`;

export const OverviewHeadingContainer = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 20px;
font-weight: 700px;

padding-top: 14px;
padding-bottom: 30px;
`;

export const OverviewHeadingContainerHeading = styled.h2`
font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 22px;
line-height: 30px;
font-weight: 400px;
`;

export const OverviewRoomsContainer = styled.div`
max-width: 1120px;
display: flex;
flex-direction: row;
gap: 16px;
flex-wrap: wrap;
`;

export const AmenitiesModule = styled.div`
`;
