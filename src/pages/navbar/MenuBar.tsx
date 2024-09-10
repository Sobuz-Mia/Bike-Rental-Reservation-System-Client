import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    toast.success("User Log out successfully");
    navigate("/");
  };
  return (
    <Navbar isBordered onMenuOpenChange={() => setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit">Bike Rental</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#DF453E]" : "")}
          >
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "text-[#DF453E]" : "")}
          >
            About Us
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem>
          <Link href="/login">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          {user ? (
            <Button style={{ backgroundColor: "#DF453E", color: "#fff" }}>
              <Link onClick={handleLogout} className="text-white" href="/login">
                Log Out
              </Link>
            </Button>
          ) : (
            <Button style={{ backgroundColor: "#DF453E", color: "#fff" }}>
              <Link className="text-white" href="/login">
                Sign In
              </Link>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#DF453E]" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? "text-[#DF453E]" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-[#DF453E]" : "")}
        >
          Login
        </NavLink>
      </NavbarMenu>
    </Navbar>
  );
};

export default MenuBar;
