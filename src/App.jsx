import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AdminRoute from "./components/protect/AdminRoute";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/auth/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: (
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
