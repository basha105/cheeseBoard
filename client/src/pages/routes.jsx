import Home from "./Home";
import Cheeses from "./Cheeses";
import Cheese from "./Cheese";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cheeses",
        element: <Cheeses />

    },
    {
        path: "/cheeses/:cheeseName",
        element: <Cheese />
    }
];

export default routes;