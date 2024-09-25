import { Button, Modal, Space, Table, TableColumnsType, Tag } from "antd";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  usePromotionUserMutation,
} from "../../redux/features/user/userManagement.api";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { toast } from "sonner";
type TDataType = {
  name: string;
  phone: string;
  email: string;
  role: string;
};
const ManageUser = () => {
  const { data: users, isFetching } = useGetAllUsersQuery(undefined);
  const [deletedUser] = useDeleteUserMutation();
  const [promotionUserToAdmin] = usePromotionUserMutation();
  const tableData = users?.data?.map(({ _id, name, role, phone, email }) => ({
    key: _id,
    name,
    role,
    phone,
    email,
  }));
  const handleDeleted = async (id: string) => {
    Modal.confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "If yes then click on the OK or Cancel",
      onOk: async () => {
        const res = await deletedUser(id);
        if (res.data) {
          toast.success(res?.data?.message);
        } else if (res?.error) {
          toast.error("Something is wrong");
        }
      },
      onCancel() {},
    });
  };
  const handleUserPromotion = async (id: string) => {
    Modal.confirm({
      title: "Do you want to promotion this user?",
      icon: <ExclamationCircleFilled />,
      content: "If yes then click on the OK or Cancel",
      onOk: async () => {
        const res = await promotionUserToAdmin(id);
        if (res.data) {
          toast.success(res?.data?.message);
        } else if (res?.error) {
          toast.error("Something is wrong");
        }
      },
      onCancel() {},
    });
  };
  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email",
      key: "email",
      align: "center",
      dataIndex: "email",
    },
    {
      title: "Phone No.",
      key: "phone",
      align: "center",
      dataIndex: "phone",
    },
    {
      title: "Role",
      key: "role",
      align: "center",
      render: (item) => {
        return (
          <Tag color="green" style={{ width: "60px", textAlign: "center" }}>
            {item.role.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "x",
      align: "center",
      render: (item) => {
        return (
          <Space>
            <div>
              <Button
                onClick={() => handleDeleted(item.key)}
                danger
                icon={<DeleteOutlined />}
              >
                Delete
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleUserPromotion(item.key)}
                type="primary"
                icon={<EditOutlined />}
              >
                Promote
              </Button>
            </div>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      pagination={false}
    />
  );
};

export default ManageUser;
