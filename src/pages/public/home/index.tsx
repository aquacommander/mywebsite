import HomePageUI from "./ui"
import { useSelector } from "react-redux";

export default function HomePage() {

    const menu = useSelector((state: any) => state.app.menu);

    return (
        <HomePageUI
            menu={menu}
        />
    )
}