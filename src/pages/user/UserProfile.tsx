import { Row, Col, Card, Avatar, Button, Typography } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
const { Meta } = Card;
const { Text } = Typography;
const UserProfile = () => {
  const user = {
    name: "Sobuz Mia",
    email: "sobuz@example.com",
    phone: "+123456789",
    address: "123 Main St, Dhaka, Bangladesh",
  };
  return (
    <Row justify="center">
      <Col span={12}>
        <Card
          style={{ width: "100%" }}
          cover={
            <h1 className="text-center text-3xl p-4">
              Welcome Back <span className="text-red-500">{user.name}</span>
            </h1>
          }
        >
          <Meta
            avatar={<Avatar size={100} icon={<UserOutlined />} />}
            title={<Text strong>{user.name}</Text>}
            description={
              <div>
                <Text>Email: {user.email}</Text> <br />
                <Text>Phone: {user.phone}</Text> <br />
                <Text>Address: {user.address}</Text> <br />
              </div>
            }
          />
          <div className="text-center mt-4">
            <Button type="primary" icon={<EditOutlined />}>
              Update Profile
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
