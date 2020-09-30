import styled from 'styled-components';

export const GalleryModalTopContainer = styled.div`
height: 100vh;
width: 100vw;
position: relative;
`;

export const GalleryModalNavBar = styled.div`
width: 100vw;
height: 24px;
padding: 40px 0 20px 0;

display: inline-block;
text-align: center;
`;

export const GalleryModalBackButton = styled.button`
position: fixed;
left: 40px;
top: 40px;
display: inline-block;
vertical-align: middle;
text-align: center;

width: 90px;
height: 36px;
border-radius: 8px;
border-color: none;
border-width: 0;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 14px;

&:hover {
    cursor: pointer;
}

&:focus {
    outline:0;
}
`;

export const GalleryModalImageIndex = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 400px;
vertical-align: middle;
`;

export const GalleryModalImageFrame = styled.div`
display: block;
text-align: center;

padding: 32px 120px 0 120px; 
`;

export const GalleryModalImageFrameLeftButton = styled.button`
height: 50px;
width: 50px;
border-radius: 50%;
border-width: 1px;
border-color: rgb(34, 34, 34);

background-color: white;

position: absolute;    
top: 50%;
left: 58px;
transform: translateY(-50%);

&:hover {
    cursor: pointer;
}
&:focus {
    outline:0;
}
`;

export const GalleryModalImageFrameRightButton = styled.button`
height: 50px;
width: 50px;
border-radius: 50%;
border-width: 1px;
border-color: rgb(34, 34, 34);

background-color: white;

position: absolute;
top: 50%;
right: 58px;
transform: translateY(-50%);

&:hover {
    cursor: pointer;
}
&:focus {
    outline:0;
}
`;

export const GalleryModalImageFramePhoto = styled.img`
height: auto;
width: auto;
max-width: 80vw;
max-height: 78vh;
`;

export const GalleryModalImageFrameComment = styled.h4`
padding-top: 30px;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 400px;
vertical-align: middle;
`;
