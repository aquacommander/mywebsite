import Flex from "components/basic/flex";
import { InlineFlexPropsType } from "components/basic/flex/style";
import { TextPropsType } from "components/basic/text/style";
import constantImages from "constants/img.constant";
import styled from "styled-components";

const FrontendWrapperStyle: InlineFlexPropsType = {
    minH: "100vh",
    h: "100%",
    background: `url(${constantImages.BG6})`,
    position: "relative",
    w: "100%",
    overflow: "auto",
    vAlign: "center",
    hAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "cover"
}

const ContentWrapperStyle: InlineFlexPropsType = {
    position: "relative",
    zIndex: "10",
    h: "fit-content",
    w: "100%",
    hAlign: "center",
}

const GridStyle = {
    columns: "3",
    gap: "1rem",
    maxW: "70rem",
    h: "100%",
}

const CardContentWrapperStyle: InlineFlexPropsType = {
    fDirection: "column",
    position: "absolute",
    vAlign: "center",
    zIndex: "15",
    opacity: "0",
    p: "1rem"
}

const CardInfoWrapperStyle: InlineFlexPropsType = {
    fDirection: "column",
    mb: "1rem",
    vAlign: "center",
    gap: ".5rem"
}

const CardDescriptionWrapperStyle: TextPropsType = {
    align: "center",
    maxW: "22rem",
    size: ".9rem"
}

const LinkStyle: InlineFlexPropsType = {
    w: "3rem",
    h: "3rem",
    background: "white",
    radius: "100%",
    vAlign: "center",
    hAlign: "center"
}

const CardOverlayStyle: InlineFlexPropsType = {
    position: "absolute",
    w: "100%",
    h: "100%",
    background: "rgba(0,0,0,.6)",
    opacity: "0",
    zIndex: "1"
}

const FrontendStyles = {
    FrontendWrapperStyle,
    ContentWrapperStyle,
    GridStyle,
    CardContentWrapperStyle,
    CardInfoWrapperStyle,
    CardDescriptionWrapperStyle,
    LinkStyle,
    CardOverlayStyle
}



export const CardWrapper = styled(Flex)`
    flex-direction: column;
    background: #22272c;
    border-radius: .8rem;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    transition: all .35s;
    width:100%;
    height:100%;

    .ant-image {
        width:100%;
        height:100%;
    }

    div {
        transition: all .45s;
    }

    &:hover {
        div {
            opacity: 1;
        }

        transform: scale(1.03);
    }
`




export default FrontendStyles;