import { Button, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const { Content, Sider } = Layout;

const items = [
  {
    key: "1",
    label: "User Management",
    children: [
      {
        key: "2",
        label: "User Profile",
      },
    ],
  },
];
const UserDashboardLayout = () => {
  return (
    <Layout style={{ height: "100%" }}>
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
      <Layout>
        <Header>
          <Button>Log Out</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserDashboardLayout;
