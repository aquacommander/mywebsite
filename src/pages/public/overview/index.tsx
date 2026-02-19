import apis from "api";
import OverviewPageUI from "./ui";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function OverviewPage() {

    const menu = useSelector((state: any) => state.app.menu);
    const [follows, setFollows] = useState(0);

    useEffect(() => {
        getFollows();
    }, [])

    const getFollows = async () => {
        const { follows } = await apis.getFollows();
        setFollows(follows);
    }

    return (
        <OverviewPageUI
            menu={menu}
            follows={follows}
        />
    )
}