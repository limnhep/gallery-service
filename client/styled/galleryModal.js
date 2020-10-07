import styled from 'styled-components';

export const TopContainer = styled.div`
height: 100%;
width: 100vw;
position: relative;
`;

export const NavBar = styled.div`
height: 24px;
padding: 40px 40px 20px 40px;

display: flex;
align-items: center;
justify-content: space-between;
`;

export const BackButton = styled.button`
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

&:hover {
    cursor: pointer;
    -webkit-filter: brightness(92%);
    transition: -webkit-filter 0.3s;
}
`;

export const IconContainer = styled.div`
`;

export const ShareIcon = styled.img`
height: 16px;
width: 16px;

&:hover {
    cursor: pointer;
}

&:focus {
    outline:0;
}
`;

export const HeartIcon = styled.img`
height: 16px;
width: 16px;
margin-left: 15px;

&:hover {
    cursor: pointer;
}

&:focus {
    outline:0;
}
`;

export const ImageIndex = styled.div`
font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 400px;

margin: 0 auto;
`;

export const ImageFrame = styled.div`
display: block;
text-align: center;

padding: 32px 120px 0 120px; 
`;

export const ImageFrameLeftButton = styled.button`
height: 50px;
width: 50px;
border-radius: 50%;
border-width: 1px;
border-color: rgb(120, 120, 120);

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

&:hover {
    cursor: pointer;
    background-color: #F7F7F7;
}
`;

export const ImageFrameRightButton = styled.button`
height: 50px;
width: 50px;
border-radius: 50%;
border-width: 1px;
border-color: rgb(120, 120, 120);

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

&:hover {
    cursor: pointer;
    background-color: #F7F7F7;
}
`;

export const ImageFramePhoto = styled.img`
height: auto;
width: auto;
max-width: 80vw;
max-height: 78vh;

&.fade-appear {
    opacity: 0;
}
&.fade-enter-active {
    opacity: 1;
    transition: opacity 150ms ease-out; 
}
&.fade-enter {
    opacity: 0;
}
&.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms ease-out 250ms; 
}
&.fade-exit {
    display: none;

}
&.fade-exit-active {
    display: none;
}
`;

export const ImageFrameComment = styled.h4`
padding-top: 30px;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 400px;
vertical-align: middle;
`;

export const ImageArrowButton = styled.img`
height: 10px;
width: 10px;
`;
