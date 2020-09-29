import styled from 'styled-components';

export const GalleryFeaturesOverviewRoomsContainerItems = styled.div`
display: inline-block;
margin-bottom:2px;

&:hover {
    cursor: pointer;
    filter: brightness(1.1);
    transition: -webkit-filter 0.3s;
}
`;

export const GalleryFeaturesOverviewRoomsContainerItemsImg = styled.img`
object-fit: cover;
width: 146px;
height: 96px;
margin-bottom: 10px;

box-shadow: 2px 2px rgb(238, 238, 238);
`;

export const GalleryFeaturesOverviewRoomsContainerItemsTitle = styled.h4`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
font-weight: 200px;
`;
