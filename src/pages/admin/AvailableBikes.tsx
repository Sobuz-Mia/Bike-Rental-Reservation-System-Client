import { Button, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from "../../redux/features/bike/bikeManagementApi";
import DialogModal from "../../components/modal/DialogModal";
import { useState } from "react";
import { toast } from "sonner";
import BRModal from "../../components/modal/BRModal";
import BRForm from "../../components/form/BRForm";
import BRInput from "../../components/form/BRInput";
type TDataType = {
  name: string;
  brand: string;
  model: string;
  year: number;
};

const AvailableBikes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteBike] = useDeleteBikeMutation();

  const { data: AllBikes } = useGetAllBikesQuery(undefined);
  const tableData = AllBikes?.data?.map(
    ({ _id, name, brand, model, year }) => ({
      key: _id,
      name,
      brand,
      model,
      year,
    })
  );

  // toggle button
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  // deleted options
  const handleOk = async (id: string) => {
    setIsModalOpen(false);
    const res = await deleteBike(id);
    if (res?.data?.data) {
      toast.success("Bike Deleted Successfully");
    } else {
      toast.error("Something want wrong");
    }
  };
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Brand",
      key: "brand",
      align: "center",
      dataIndex: "brand",
    },
    {
      title: "Model",
      key: "model",
      align: "center",
      dataIndex: "model",
    },
    {
      title: "Year",
      key: "year",
      align: "center",
      dataIndex: "year",
    },
    {
      title: "Action",
      key: "x",
      align: "center",
      render: (item) => {
        return (
          <Space>
            <Button onClick={toggleModal}>Update</Button>
            <BRModal
              modalOpen={modalOpen}
              onCancel={toggleModal}
              closeIcon
              title="Update Bike Info"
            >
              <div className="h-[580px] overflow-y-auto hide-scroll">
                <BRForm onSubmit={handleSubmit}>
                  <BRInput type="text" label="Name" name="bike" />
                  <BRInput
                    type="text"
                    label="Descriptions"
                    name="description"
                  />
                  <BRInput
                    type="number"
                    label="PricePerHour"
                    name="pricePerHour"
                  />
                  <BRInput type="number" label="CC" name="cc" />
                  <BRInput type="number" label="Year" name="year" />
                  <BRInput type="text" label="Model" name="model" />
                  <BRInput type="text" label="Brand" name="brand" />
                  <Button
                    className="text-center flex justify-center"
                    htmlType="submit"
                  >
                    Update
                  </Button>
                </BRForm>
              </div>
            </BRModal>
            <div onClick={showModal}>
              <DialogModal
                isModalOpen={isModalOpen}
                handleOk={() => handleOk(item.key)}
                btnTitle={"Delete"}
              />
            </div>
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

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      pagination={false}
    />
  );
};

export default AvailableBikes;
