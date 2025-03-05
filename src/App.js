import React from "react";
import ReactDOM from "react-dom/client";
//import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";  // ✅ Corrected import
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";  // ✅ Corrected import

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/Error";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/restaurant/:resID", element: <RestaurantMenu /> }
        ],
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
