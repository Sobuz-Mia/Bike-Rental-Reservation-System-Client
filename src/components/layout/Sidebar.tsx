import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { adminItems, userItems } from "./sidebar.items";
import { Link } from "react-router-dom";
const userRole = {
  ADMIN: "admin",
  USER: "user",
};
const Sidebar = () => {
  const role = "admin";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = adminItems;
      break;
    case userRole.USER:
      sidebarItems = userItems;
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "#fff",
          display: "flex",
          justifyItems: "center",
          height: "4rem",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Link to={"/"}>
          <h1>Bike Rentals</h1>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
