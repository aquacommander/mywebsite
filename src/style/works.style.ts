import Flex from "components/basic/flex"
import { InlineFlexPropsType } from "components/basic/flex/style"
import constantImages from "constants/img.constant"
import styled from "styled-components"

export const ScrollableWorkContainer = styled.div`
    width: 100%;
    height: 100vh;
    height: 100dvh;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
`

const WorkContainerStyle: InlineFlexPropsType = {
    vAlign: "center",
    hAlign: "center",
    minH: "100vh",
    p: "2rem 0",
    background: `url(${constantImages.BG9})`,
    position: "relative",
    w: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
}

const FrontendWrapperStyle: InlineFlexPropsType = {
    position: "absolute",
    w: "100%",
    zIndex: "-1",
    overflow: "hidden",
    h: "100%",
    radius: ".5rem"
}

const TitleWrapperStyle: InlineFlexPropsType = {
    position: "relative",
    zIndex: "5",
    p: "2rem 0",
}

const WorkStyles = {
    WorkContainerStyle,
    FrontendWrapperStyle,
    TitleWrapperStyle,
}

export const FrontendWrapper = styled(Flex)`
    width: 100%;
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
    z-index: 5;
    max-width: 10rem;
`

export const BackendWrapper = styled(FrontendWrapper)`
    max-width: 17rem;
`

export const AIWrapper = styled(FrontendWrapper)`
    max-width: 17rem;
`

/**
 * Desktop: single horizontal row, cards side by side.
 * Mobile: vertical column, centered, scrollable.
 */
export const CardsRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    z-index: 10;
    position: relative;
    padding: 2rem 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.8rem;
        width: 100%;
        padding: 4.5rem 0 2.5rem;
    }
`

export const CardWrapper = styled(Flex)`
    position: relative;
    perspective: 2500px;
    z-index: 1;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;

    /*
     * Portrait aspect ratio drives height from width automatically —
     * no hardcoded px/rem heights needed on any device.
     * Desktop: fixed width, ratio gives the height.
     * Mobile: vw-based width, same ratio scales height proportionally.
     */
    aspect-ratio: 3 / 4;

    /* Desktop */
    width: 18rem;

    /* Mobile: vw-based width with a max-width cap so it never gets too large */
    @media (max-width: 768px) {
        width: 52vw;
        max-width: 16rem;
    }

    h3 {
        transition: transform 0.5s;
    }

    .wrapper {
        transition: all 0.5s;

        &::before,
        &::after {
            content: "";
            opacity: 0;
            width: 100%;
            height: 10rem;
            transition: all 0.5s;
            position: absolute;
            left: 0;
        }

        &::before {
            top: 0;
            background-image: linear-gradient(
                to top,
                transparent 46%,
                rgba(12, 13, 19, 0.5) 68%,
                rgba(12, 13, 19, .8) 97%
            );
        }
        &::after {
            bottom: 0;
            opacity: 1;
            background-image: linear-gradient(
                to bottom,
                transparent 16%,
                rgba(12, 13, 19, 0.5) 38%,
                rgba(12, 13, 19, .8) 97%
            );
        }
    }

    &:hover {
        .wrapper {
            transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
            box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
            &::before,
            &::after {
                opacity: 1;
            }
        }

        h3 {
            transform: translate3d(0%, -1rem, 100px);
        }

        div {
            &:nth-child(2) {
                opacity: 1;
                transform: translate3d(0%, -20%, 100px);
            }
        }
    }
`

export default WorkStyles
