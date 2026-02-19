import { InlineFlexPropsType } from "components/basic/flex/style";
import constantImages from "constants/img.constant";

const SkillsContainerStyle: InlineFlexPropsType = {
    vAlign: "center",
    hAlign: "center",
    h: "100vh",
    background: `url(${constantImages.BG5})`,
    position: "relative",
    w: "100%",
    backgroundPosition:"center",
    backgroundSize:"cover"
}

const ContentContainerStyle: InlineFlexPropsType = {
    fDirection: "column",
    zIndex: "10",
    position: "relative",
    maxW: "100%",
    h: "100%",
    overflow: "auto"
}

const CardRowStyle: InlineFlexPropsType = {
    gap: ".8rem",
    p: "1rem",
    h: "100%",
    fDirection: "row",
    vAlign: "flex-start"
}

const VideoWrapperStyle : InlineFlexPropsType = {
    position:"fixed",
    top:"0",
    left:"0",
    w:"100%",
    h:"100%",
    overflow:"hidden"
}

const SkillsStyles = {
    SkillsContainerStyle,
    ContentContainerStyle,
    CardRowStyle,
    VideoWrapperStyle
}

export default SkillsStyles;