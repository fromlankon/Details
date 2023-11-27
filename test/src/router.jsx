import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Main from "./layouts/main/Main";
import Home from "./layouts/main/pages/Home";
import Detail from "./layouts/main/pages/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: ":id",
                element: <Detail />,
            }
        ],
    },
]);

export const MainRouter = () => {
    return <RouterProvider router={router} />
}