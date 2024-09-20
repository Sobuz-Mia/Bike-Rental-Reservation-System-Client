/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
} from "../../redux/features/bike/bikeManagementApi";
import DialogModal from "../../components/modal/DialogModal";
import { useState } from "react";
import { toast } from "sonner";
import BRModal from "../../components/modal/BRModal";
import BRForm from "../../components/form/BRForm";
import BRInput from "../../components/form/BRInput";
import { TBike } from "../../types/bikes.type";
import { FieldValues, SubmitHandler } from "react-hook-form";
type TDataType = {
  name: string;
  brand: string;
  model: string;
  cc: number;
};
// Example of the bikeData structure
type TDefaultValue = {
  data: Partial<TBike>;
};

const AvailableBikes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bikeId, setBikeId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteBike] = useDeleteBikeMutation();
  const { data: AllBikes } = useGetAllBikesQuery(undefined);
  const { data: bikeData, isFetching } = useGetSingleBikeQuery(bikeId) as {
    data: TDefaultValue;
    isFetching: boolean;
  };
  const [updateBike] = useUpdateBikeMutation();
  if (!bikeData) {
    return <p>Loading................</p>;
  }
  if (isFetching) {
    return <p>Fetching............</p>;
  }
  const defaultValues: Partial<TBike> = {
    name: bikeData?.data?.name || "N/A",
    brand: bikeData?.data?.brand || "",
    model: bikeData?.data?.model || "",
    year: bikeData?.data?.year || 0,
    cc: bikeData?.data?.cc || 0,
    pricePerHour: bikeData?.data?.pricePerHour || 0,
    description: bikeData?.data?.description || "",
  };

  const tableData = AllBikes?.data?.map(({ _id, name, brand, model, cc }) => ({
    key: _id,
    name,
    brand,
    model,
    cc,
  }));

  // toggle button
  const toggleModal = async () => {
    setModalOpen(!modalOpen);
  };
  const handleUpdateBike = (item: any) => {
    setBikeId(item.key);
    toggleModal();
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

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updateData = {
      id: bikeId,
      data: {
        ...data,
        year: Number(data?.year),
        cc: Number(data?.cc),
        pricePerHour: Number(data?.pricePerHour),
      },
    };
    const res = await updateBike(updateData);
    if (res?.data) {
      toggleModal();
      toast.success("Updated Successfully");
    } else if (res.error) {
      toast.error("Something is wrong");
    }
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
      title: "CC",
      key: "cc",
      align: "center",
      dataIndex: "cc",
    },
    {
      title: "Action",
      key: "x",
      align: "center",
      render: (item) => {
        return (
          <Space>
            <Button onClick={() => handleUpdateBike(item)}>Update</Button>
            {bikeData && (
              <BRModal
                modalOpen={modalOpen}
                onCancel={toggleModal}
                closeIcon
                title="Update Bike Info"
              >
                <div className="h-[580px] overflow-y-auto hide-scroll">
                  <BRForm onSubmit={handleSubmit} defaultValues={defaultValues}>
                    <BRInput type="text" label="Name" name="name" />
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
                      className="text-center flex justify-center text-xl text-green-500 w-full"
                      htmlType="submit"
                    >
                      Update
                    </Button>
                  </BRForm>
                </div>
              </BRModal>
            )}
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
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      pagination={false}
    />
  );
};

export default AvailableBikes;
