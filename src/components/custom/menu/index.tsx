import MenuUI from "./ui";
import { useDispatch } from "react-redux";
import { actions as appActions } from "store/app.slice";

export default function Menu() {

    const dispatch = useDispatch();

    const handleHover = (flag:boolean) => {
        dispatch(appActions.toggleMenu(flag));
    };

    return (
        <MenuUI
            handleHover={handleHover}
        />
    )
}