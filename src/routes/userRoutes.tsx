import BikeDetails from "../pages/user/bikeManagement/BikeDetails";
import BIkeList from "../pages/user/bikeManagement/BIkeList";
import BookingProcess from "../pages/user/rentalsManagement/BookingProcess";
import Rentals from "../pages/user/rentalsManagement/Rentals";
import UserDashboard from "../pages/user/UserDashboard";
import UserProfile from "../pages/user/UserProfile";

export const UserRoutes = [
  {
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    path: "user-profile",
    element: <UserProfile />,
  },
  {
    path: "bike-list",
    element: <BIkeList />,
  },
  {
    path: "bike-details",
    element: <BikeDetails />,
  },
  {
    path: "booking-process",
    element: <BookingProcess />,
  },
  {
    path: "my-rentals",
    element: <Rentals />,
  },
];
