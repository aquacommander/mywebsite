import Imgs from "constants/img.constant";

const HomeContainerStyle = {
    height: "100vh",
    background: `url(${Imgs.BG1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
}

const ContentContainerStyle = {
    gap: "3rem",
    zIndex: "10",
    width: "100%",
    alignItems: "center",
}

const HomeStyles = {
    HomeContainerStyle,
    ContentContainerStyle
}

export default HomeStyles
