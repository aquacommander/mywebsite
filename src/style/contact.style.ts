import { InlineFlexPropsType } from "components/basic/flex/style";
import constantImages from "constants/img.constant";

const ContactWrapperStyle: InlineFlexPropsType = {
    w: "100%",
    h: "100vh",
    background: `url(${constantImages.BG7})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    vAlign: "center",
    hAlign: "center",
    position: "relative"
}

const ContentWrapperStyle: InlineFlexPropsType = {
    fDirection: "column",
    position: "relative",
    zIndex: "10",
    gap: ".5rem",
    w: "100%",
    vAlign: "center",
    hAlign: "center",
    maxW: "30rem",
    background: "#22272c",
    radius: "1rem"
}

const BannerStyle: InlineFlexPropsType = {
    background: `url(${constantImages.BANNER})`,
    w: "100%",
    h: "10rem",
    backgroundSize: "cover",
    radius: "1rem 1rem 0 0"
}

const CardContentWrapperStyle: InlineFlexPropsType = {
    fDirection: "column",
    transform: "translateY(-25%)",
    vAlign: "center"
}

const ImageWrapperStyle: InlineFlexPropsType = {
    border: ".5rem solid #22272c",
    radius: "100%"
}

const CardInfoWrapperStyle: InlineFlexPropsType = {
    fDirection: "column",
    mb: "2rem",
    vAlign: "center"
}


const ContactStyles = {
    ContactWrapperStyle,
    ContentWrapperStyle,
    BannerStyle,
    CardContentWrapperStyle,
    ImageWrapperStyle,
    CardInfoWrapperStyle,
}

export default ContactStyles;