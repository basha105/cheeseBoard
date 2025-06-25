import Home from "./Home";
import Cheeses from "./Cheeses";
import Cheese from "./Cheese";
import SignIn from "./SignIn";

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
    },
    {
        path: "/sign-in",
        element: <SignIn />
    }
];

export default routes;