import { Button, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllBikesQuery } from "../../redux/features/bike/bikeManagementApi";
type TDataType = {
  name: string;
  brand: string;
  model: string;
  year: number;
};

const AvailableBikes = () => {
  const { data: AllBikes } = useGetAllBikesQuery(undefined);
  console.log(AllBikes);
  const tableData = AllBikes?.data?.map(
    ({ _id, name, brand, model, year }) => ({
      key: _id,
      name,
      brand,
      model,
      year,
    })
  );
  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Brand",
      key: "brand",
      dataIndex: "brand",
    },
    {
      title: "Model",
      key: "model",
      dataIndex: "model",
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <Space>
            <Button>Deleted</Button>
            <Button>Update</Button>
          </Space>
        );
      },
    },
  ];

  const onChange: TableProps<TDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AvailableBikes;
