import AdminProfile from "../pages/admin/AdminProfile";
import CreateBike from "../pages/admin/CreateBike";
import ManageUser from "../pages/admin/ManageUser";
import ReturnBike from "../pages/admin/ReturnBike";
import UserDashboard from "../pages/user/UserDashboard";
import AvailableBikes from "./../pages/admin/AvailableBikes";

export const AdminRoutes = [
  {
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    path: "admin-profile",
    element: <AdminProfile />,
  },
  {
    path: "available-bikes",
    element: <AvailableBikes />,
  },
  {
    path: "create-bike",
    element: <CreateBike />,
  },
  {
    path: "manage-user",
    element: <ManageUser />,
  },
  {
    path: "return-bike",
    element: <ReturnBike />,
  },
];
