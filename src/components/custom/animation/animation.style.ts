import { HeadingContainer } from 'components/basic/heading/style';
import { SpanWrapper } from 'components/basic/text/style';
import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    100% {
        transform: scale(1);
    } 
`

const fadeIn = keyframes`
    100% {
        opacity: 1;
        filter: blur(0);
    }
`

const pulse = keyframes`
    0% {
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        width: 100%;
        height: 100%;
        opacity: 0;
    }
`

export const heartPulse = keyframes`
    0% { box-shadow: 0 0 0 0 #03a9f4; }
`

interface StyledSpanProps {
    delay?: any
    fontFamily? : string
}

const ANIMATION_STYLE_PROPS = ['delay', 'fontFamily'];
const shouldForwardAnimationProp = (prop: string) => !ANIMATION_STYLE_PROPS.includes(prop);

export const ScaleAnimeStyle = styled(HeadingContainer)`
    transform: scale(0.94);
    animation: ${scale} 3s forwards cubic-bezier(0.5, 1, 0.89, 1);   
`

export const FadeAnimeStyle = styled(SpanWrapper).withConfig({
    shouldForwardProp: shouldForwardAnimationProp
})<StyledSpanProps>`
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
    animation: ${fadeIn} 0.8s ${({ delay }) => delay ? delay + 's' : '0.1s'} forwards cubic-bezier(0.11, 0, 0.5, 0);
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
`

export const PulseAnimeWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    div {
        position: absolute;
        background-color: #fc4747;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ${pulse} 4.5s ease-out infinite;
    }

    div:nth-child(2) {
        animation-delay: -1.5s;
    }

    div:nth-child(3) {
        animation-delay: -3s;
    }
`