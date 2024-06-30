import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
function App() {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/singleproduct/:id",
                    element: <SingleProduct />,
                },
            ],
        },
    ]);
    return <RouterProvider router={routers} />;
}

export default App;
