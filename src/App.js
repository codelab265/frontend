import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import PageNotFound from "./pages/PageNotFound";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/single-post",
        element: <SinglePost />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <div className="">
      <div className="container mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
