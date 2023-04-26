import { createBrowserRouter } from "react-router-dom";
import DashboardLayut from "../Layouts/DashboardLayut";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayut />,
  }
]);

export default router;
