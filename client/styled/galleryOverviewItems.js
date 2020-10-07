import styled from 'styled-components';

export const RoomsContainerItems = styled.div`
display: inline-block;
margin-bottom:2px;

&:hover {
    cursor: pointer;
    filter: brightness(1.1);
    transition: -webkit-filter 0.3s;
}
`;

export const RoomsContainerItemDiv = styled.div`
width: 146px;
height: 96px;
margin-bottom: 10px;

background-image: url('https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/loading-blur.jpg');

box-shadow: 2px 2px rgb(238, 238, 238);
`;

export const RoomsContainerItemsImg = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
`;

export const RoomsContainerItemsTitle = styled.h4`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
font-weight: 200px;
`;
