import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/layout/MainLayout";

// page
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/singleProduct/:id",
                    element: <SingleProduct />,
                },
            ],
        },
    ]);
    return <RouterProvider router={routes} />;
}

export default App;
