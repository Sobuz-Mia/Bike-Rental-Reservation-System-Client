import { NavLink } from "react-router-dom";
export const adminItems = [
  {
    key: "Profile",
    label: <NavLink to={"/admin/admin-profile"}>Profile</NavLink>,
  },
  {
    key: "Bike-Management",
    label: "Bike Management",
    children: [
      {
        key: "bikes",
        label: <NavLink to={"/admin/available-bikes"}>Available Bikes</NavLink>,
      },
      {
        key: "create-bike",
        label: <NavLink to={"/admin/create-bike"}>Create/Edit Bike</NavLink>,
      },
    ],
  },
  {
    key: "User-Management",
    label: <NavLink to={"/admin/manage-user"}>User Management</NavLink>,
  },
  {
    key: "Return-Bike",
    label: <NavLink to={"/admin/return-bike"}>Return Bike</NavLink>,
  },
];
export const userItems = [
  {
    key: "User-profile-management",
    label: "User Profile Management",
    children: [
      {
        key: "User-profile",
        label: <NavLink to={"/user/user-profile"}>Profile</NavLink>,
      },
    ],
  },
  {
    key: "Bike-Management",
    label: "Bike Management",
    children: [
      {
        key: "bike list",
        label: <NavLink to={"/user/bike-list"}>Bike List</NavLink>,
      },
      {
        key: "bike details",
        label: <NavLink to={"/user/bike-details"}>Bike Details</NavLink>,
      },
    ],
  },
  {
    key: "Rentals-Management",
    label: "Rentals Management",
    children: [
      {
        key: "Booking Process",
        label: <NavLink to={"/user/booking-process"}>Booking Process</NavLink>,
      },
      {
        key: "My Rentals",
        label: <NavLink to={"/user/my-rentals"}>My Rentals</NavLink>,
      },
    ],
  },
];
