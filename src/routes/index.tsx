import configs from "configs";
import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.route";
import PublicPages from "pages/public";

const mainRouter = createBrowserRouter([
    {
        path: configs.path.HOME_PREFIX,
        element: <PublicPages />,
        children: publicRoutes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element
        }))
    }
]);

export default mainRouter;  