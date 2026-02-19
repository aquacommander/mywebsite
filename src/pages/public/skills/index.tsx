import AboutPageUI from "./ui"
import { useSelector } from "react-redux";

export default function SkillsPage() {

    const menu = useSelector((state: any) => state.app.menu);

    return (
        <AboutPageUI
            menu={menu}
        />
    )
}