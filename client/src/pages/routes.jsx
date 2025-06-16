import Home from "./Home";
import Cheeses from "./Cheeses";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cheeses",
        element: <Cheeses />
    }
];

export default routes;