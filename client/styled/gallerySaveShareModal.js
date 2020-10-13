import styled from 'styled-components';

export const ModalBackground = styled.div`
top: 0; 
position: absolute;
z-index: 8;
height: 100vh;
width: 100vw;
opacity: 0.5;
background-color: #484848;
`;

export const SaveModal = styled.div`
position: fixed;
z-index: 10;
min-height: 530px;
width: 572px;
left: 50%;
bottom: 50%;
transform: translate(-50%, 50%);
background-color: white;
border-color: black;
border-radius: 1px;

border-radius: 15px;

display: grid;
grid-template-rows: 64px auto 74px;

&.slideUp-appear {
    bottom: 0;
}
&.slideUp-appear-active {
    bottom: 50%;
    transition: all 400ms ease;
}
&.slideUp-exit {
    bottom: 50%;
}
&.slideUp-exit-active {
    bottom: 0;
    transition: all 400ms ease;
}
`;

export const CreateListModal = styled.div`
position: fixed;
z-index: 10;
height: 305px;
width: 568px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: white;
border-color: black;
border-radius: 1px;

border-radius: 15px;

display: grid;
grid-template-rows: 64px 160px 81px;
`;

export const ShareModal = styled.div`
position: fixed;
z-index: 10;
height: 789px;
width: 378px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: white;
border-color: black;
border-width: 1px;

display: flex;
flex-direction: column;
`;

export const ShareModalContainer = styled.div`
height: 789px;
width: 378px;
padding: 32px 32px 32px 32px;
`;

export const ShareModalCloseButtonContainer = styled.div`
height: 45px;
width: 312px;
`;

export const ShareModalCloseButton = styled.img`
&:hover {
    cursor: pointer;
}
`;

export const ShareModalHeading = styled.div`
height: 84px;
width: 312px;
border-bottom: 1px solid rgb(230, 230, 230);

font-family: 'Airbnb Cereal App Medium';
color: rgb(72, 72, 72);
font-size: 24px;
line-height: 1.25em;
font-weight: 800; 
`;

export const ShareModalItem = styled.div`
height: 75px;
width: 312px;
border-bottom: 1px solid rgb(230, 230, 230);

display: flex;
align-items: center;
`;

export const ShareModalItemLink = styled.div`
font-family: 'Airbnb Cereal App Medium';
color: #008489;
font-size: 16px;
line-height: 1.375em;
font-weight: 600px; 

&:hover {
    cursor: pointer;
}
`;

export const ShareModalItemIcon = styled.img`
vertical-align: middle;
max-width: 16px;
max-height: 16px;
`;

export const ModalNavBar = styled.div`
grid-row: 1/2;
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalBody = styled.div`

${({ saveModalState }) => saveModalState === 1 && `
grid-row: 2/4;
border-top: 1px solid lightgrey;
`}

${({ saveModalState }) => saveModalState === 2 && `
grid-row: 2/3;
border-top: 1px solid lightgrey;
border-bottom: 1px solid lightgrey;
`}
`;

export const ModalFooter = styled.div`
grid-row: 3/4;
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalNavBarHeading = styled.div`
background-color: white;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 
`;

export const ModalNavBarBackButton = styled.img`
color: rgb(34, 34, 34);
padding: 8px 8px;

position: absolute;
left: 12px;

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

export const SaveModalBodyContainer = styled.div`
min-height: 352px;
width: 568px;
padding: 20px 15px 20px 16px;

display: flex;
flex-direction: column;
`;

export const SaveModalBodyButton = styled.button`
height: 88px;
background-color: white;
border: none;
padding-left: 12px;
padding-right: 12px;

&:hover {
    cursor: pointer;
    background-color: #f7f7f7;
    border-radius: 10px;
}
}
&:active {
    transform: scale(0.99);
}
&:focus {
    outline: none;
}
`;

export const SaveModalBodyButtonDiv = styled.div`
height: 64px;
width: 512px;
display: flex;
`;

export const SaveModalBodyButtonDivImgContainer = styled.div`
height: 64px;
width: 64px;
margin-right: 16px;
`;

export const SaveModalBodyButtonDivImg = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
`;

export const SaveModalBodyButtonDivTextContainer = styled.div`
height: 64px;
width: 432px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
`;

export const SaveModalBodyButtonDivTextContainerTime = styled.div`
height: 16x;
width: 100%;
text-align: left;
margin-bottom: 4px;

font-family: 'Airbnb Cereal App Light';
color: rgb(113, 113, 113);
font-size: 16px;
line-height: 20px;
font-weight: 400px; 
`;

export const SaveModalBodyButtonDivTextContainerTitle = styled.div`
height: 20px;
width: 100%;
text-align: left;

font-family: 'Airbnb Cereal App Medium';
color: rgb(34, 34, 34);
font-size: 16px;
line-height: 20px;
font-weight: 600px; 
`;

export const SaveModalBodyButtonDivTextContainerStays = styled.div`
height: 18px;
width: 100%;
text-align: left;
margin-top: 4px;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size: 14px;
line-height: 18px;
font-weight: 400px; 
`;

export const SaveModalFooterButton = styled.div`
background-color: white;

font-family: 'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
background-color: #ffffff;
font-size: 16px;
line-height: 20px;
font-weight: 400px; 

text-decoration: underline;

&:hover {
    cursor: pointer;
}
`;

export const CreateListModalInputContainer = styled.div`
padding: 32px 16px 32px 16px;
`;

export const CreateListModalInputContainerFormText = styled.h4`
z-index: 5;
position: absolute;
top: 6px;
font-size: 12px;
left: 14px;
pointer-events: none;
visibility: ${(props) => props.visibility};

width: 536px;

font-family: 'Airbnb Cereal App Light';
line-height: 20px;
font-weight: 400px; 
color: rgb(113, 113, 113);
`;

export const CreateListModalInputContainerForm = styled.div`
width: 536px;
height: 56px;

position: relative;

border-radius: 2px;
border-width: 5px;
border-color: rgb(113, 113, 113);
box-shadow: 0 0 1px 1px white;

&:focus-within ${CreateListModalInputContainerFormText}{
    visibility: visible !important;
}
`;

export const CreateListModalInputContainerFormInput = styled.input`
width: 536px;
height: 56px;
padding: 18px 12px 18px 12px;

z-index: 10;

font-family: 'Airbnb Cereal App Light';
font-size: 16px;
line-height: 20px;
font-weight: 400px; 
color: rgb(113, 113, 113);

border-radius: 15px;
border-width: 1px;
border-color: rgb(113, 113, 113);
box-shadow: 0 0 1px 1px white;

&:focus {
    outline: none;
    border-width: 2px;
    border-color: black;
    box-shadow: 0 0 1px 1px white;
    padding-top: 32px;
    font-size: 16px;
    color: rgb(34, 34, 34);
}

&:valid {
    outline: none;
    border-width: 1px;
    border-color: black;
    box-shadow: 0 0 1px 1px white;
    padding-top: 32px;
    font-size: 16px;
    color: rgb(34, 34, 34);
}

&:valid:focus {
    outline: none;
    border-width: 2px;
    border-color: black;
    box-shadow: 0 0 1px 1px white;
    padding-top: 32px;
    font-size: 16px;
    color: rgb(34, 34, 34);
}
`;

export const CreateListModalInputContainerText = styled.h4`
width: auto;
margin-top: 8px;

font-family: 'Airbnb Cereal App Light';
font-size: 12px;
line-height: 16px;
font-weight: 400px; 
color: rgb(113, 113, 113);
&:focus {
    outline: none;
    -moz-outline-radius: 1em: 10px;
}
`;

export const CreateListModalCreateButton = styled.button`
height: 48px;
width: 520px;

border-radius: 10px;
border: none;
color: white;

padding: 14px 24px 14px 24px;
vertical-align: center;
background-color: rgb(220,220,220);

font-family: 'Airbnb Cereal App Light';
font-size: 16px;
line-height: 20px;
font-weight: 600px; 
&:hover {
    cursor: not-allowed;
}
&:focus {
    outline:0;
}
`;

export const CreateListModalCreateButtonBlack = styled.button`
height: 48px;
width: 520px;

border-radius: 10px;
border: none;
color: white;

padding: 14px 24px 14px 24px;
vertical-align: center;
background-color: rgb(43,43,43);

font-family: 'Airbnb Cereal App Light';
font-size: 16px;
line-height: 20px;
font-weight: 600px; 
&:hover {
    cursor: pointer;
}
&:focus {
    outline:0;
}
`;
