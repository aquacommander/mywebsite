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
    min-height: 22rem;
    min-width: 18rem;
    flex-shrink: 0;
    border: 2px solid transparent;

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 12px 32px rgba(0,0,0,0.4);
        border-color: rgba(255,255,255,0.2);
    }
`

export const HorizontalScrollRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1.5rem;
    padding: 1rem;
    width: 100%;
    max-width: 100%;
    align-items: stretch;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    cursor: grab;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: auto;
        max-height: calc(100vh - 8rem);
        cursor: default;
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        -ms-overflow-style: scrollbar;

        &::-webkit-scrollbar {
            display: block;
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
        }
    }
`

export const CardItemWrapper = styled.div`
    flex-shrink: 0;
    min-width: 18rem;
    max-width: 20rem;
    width: 18rem;

    @media (max-width: 768px) {
        min-width: 100%;
        max-width: 100%;
        width: 100%;
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
