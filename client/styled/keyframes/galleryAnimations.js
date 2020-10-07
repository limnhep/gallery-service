import { keyframes } from 'styled-components';

export const slideUp = keyframes`
from {
    transform: translateY(100%);
    opacity: 0;
    overflow: hidden;
    overflow-y: hidden;
}
to {
    transform: translateY(0);
    opacity: 1;
    overflow: visible;
    overflow-y: visible;
}
`;

export const ImageFadeIn = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0.5;
}
100% {
    opacity: 1;
}
`;
