import { InlineFlexPropsType } from "components/basic/flex/style";
import { TextPropsType } from "components/basic/text/style";
import styled from "styled-components";

const AICardContentStyle: InlineFlexPropsType = {
    fDirection: "column",
    p: "1rem",
    gap: ".75rem",
    flex: "1",
    w: "100%",
}

const AITagsWrapperStyle: InlineFlexPropsType = {
    fWrap: "wrap",
    gap: ".4rem",
}

const AITagStyle: InlineFlexPropsType = {
    p: ".2rem .5rem",
    radius: ".25rem",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.25)",
}

export const ProjectTag = styled.span`
    color: #ffffff !important;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.02em;
`

const AITitleStyle: TextPropsType = {
    size: "1.1rem",
    weight: "600",
}

const AIDescriptionStyle: TextPropsType = {
    size: ".85rem",
    color: "rgba(255,255,255,0.8)",
}

export const AICardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #22272c;
    border-radius: .8rem;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 32px rgba(0,0,0,0.4);
        border-color: rgba(255,255,255,0.2);
    }

    @media (max-width: 768px) {
        &:hover { transform: none; }
        &:active { border-color: rgba(255,255,255,0.2); }
    }
`

/** Card image — fixed height on desktop, taller on mobile to balance the wider card */
export const CardImage = styled.img`
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
    /* Desktop: compact */
    height: 10rem;

    @media (max-width: 768px) {
        /* Mobile: ~55% of card width (88vw) gives a balanced portrait feel */
        height: 48vw;
        max-height: 14rem;
    }
`

export const HorizontalScrollRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1.5rem;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 100%;
    align-items: stretch;
    justify-content: safe center;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    cursor: grab;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar { display: none; }

    /* Under 769px: vertical stack, one card per row, centered */
    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: nowrap;
        overflow-x: hidden;
        overflow-y: visible;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
        padding: 1rem 1.5rem 2rem;
        cursor: default;
        width: 100%;
    }
`

export const CardItemWrapper = styled.div`
    flex-shrink: 0;
    /* Desktop: fixed width, height grows naturally with content */
    width: 18rem;
    min-width: 18rem;
    max-width: 18rem;

    /* Under 769px: full-width centered card like the reference image */
    @media (max-width: 768px) {
        width: 88vw;
        min-width: unset;
        max-width: 26rem;
    }
`

const AIStyles = {
    AICardContentStyle,
    AITagsWrapperStyle,
    AITagStyle,
    AITitleStyle,
    AIDescriptionStyle,
}

export default AIStyles;
