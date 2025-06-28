import { createBrowserRouter } from "react-router";
import LandingPage from "../page/LandingPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: LandingPage
    }
])