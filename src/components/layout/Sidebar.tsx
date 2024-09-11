import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const items = [
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
  ];
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
        <h1>Bike Rentals</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
