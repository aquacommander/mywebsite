import { InlineFlexPropsType } from "components/basic/flex/style";
import constantImages from "constants/img.constant";

const OverviewContainerStyle: InlineFlexPropsType = {
    fDirection: "column",
    vAlign: "center",
    hAlign: "center",
    gap: "3rem",
    position: "relative",
    w: "100%",
    background: `url(${constantImages.BG2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    h: "100vh",
    overflow: "auto",
}

const ContentContainerStyle: InlineFlexPropsType = {
    fDirection: "column",
    gap: "1rem",
    vAlign: "center",
    position: "relative",
    zIndex: "10",
    radius: ".8rem",
    w: "100%",
}

const CardStyle: InlineFlexPropsType = {
    background: "#22272c",
    p: "1rem",
    radius: ".8rem",
    gap: "1rem",
}

const OverviewWrapperStyle: InlineFlexPropsType = {
    gap: "1rem",
    w: "100%",
    maxW: "80rem",
    overflow: "auto",
    p: "1rem"
}

const UserInfoCardStyle: InlineFlexPropsType = {
    background: "#22272c",
    zIndex: "10",
    position: "relative",
    radius: ".8rem",
    vAlign: "center",
    p: "3rem 1rem",
    w: "100%",
    maxW: "20rem",
    fDirection: "column",
}

const BarChartWrapperStyle: InlineFlexPropsType = {
    background: "#22272c",
    w: "60%",
    radius: ".8rem",
    p: "2rem",
    fDirection: "column",
    gap: "1rem"
}

const PieChartWrapperStyle: InlineFlexPropsType = {
    background: "#22272c",
    w: "40%",
    radius: ".8rem",
    p: "1rem",
    fDirection: "column"
}

const ContributionWrapperStyle: InlineFlexPropsType = {
    w: "100%",
    background: "#22272c",
    radius: ".8rem",
    p: "1rem",
    fontFamily: "Titillium Web",
    h: "15rem",
    fDirection:"column"
}
const DotStyle = (background: string): InlineFlexPropsType => ({
    w: ".5rem",
    h: ".5rem",
    radius: "100%",
    background: background
});

const AvatarStyle = {
    radius: "100%",
    maxW: "12rem"
}

const AvatarWrapperStyle: InlineFlexPropsType = {
    maxW: "100%",
    hAlign: "center"
}

const GraphWrapperStyle: InlineFlexPropsType = {
    w: "100%",
    h: "23rem",
    gap: "1rem",
}

const GraphCategoryStyle: InlineFlexPropsType = {
    hAlign: "center",
    gap: "1rem",
    fWrap: "wrap",
}

const NameStyle: InlineFlexPropsType = {
}

const InformationWrapperStyle: InlineFlexPropsType = {
    fDirection: "column",
    w: "100%",
    gap: ".5rem"
}

const InformationTagWrapperStyle: InlineFlexPropsType = {
    vAlign: "center",
    gap: "1rem"
}

const GraphTagWrapperStyle: InlineFlexPropsType = {
    vAlign: "center",
    gap: ".5rem",
}

const OverviewStyles = {
    OverviewContainerStyle,
    ContentContainerStyle,
    CardStyle,
    OverviewWrapperStyle,
    UserInfoCardStyle,
    BarChartWrapperStyle,
    PieChartWrapperStyle,
    ContributionWrapperStyle,
    DotStyle,
    AvatarStyle,
    AvatarWrapperStyle,
    GraphWrapperStyle,
    GraphCategoryStyle,
    NameStyle,
    InformationWrapperStyle,
    InformationTagWrapperStyle,
    GraphTagWrapperStyle
}



export default OverviewStyles;