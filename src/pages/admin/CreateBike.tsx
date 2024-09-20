/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import { CreateBikeSchema } from "../../schemas/addBikeSchema";
import BRForm from "../../components/form/BRForm";
import BRSelect from "../../components/form/BRSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import BRInput from "../../components/form/BRInput";
import { useCreateBikeMutation } from "../../redux/features/bike/bikeManagementApi";
import { toast } from "sonner";
import { TResponseRedux } from "../../types/global";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear - number),
  label: currentYear - number,
}));

const CreateBike = () => {
  const [createBike] = useCreateBikeMutation();
  // onSubmit function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading");
    const bikeData = {
      ...data,
      year: Number(data?.year),
      cc: Number(data?.cc),
      pricePerHour: Number(data?.pricePerHour),
    };

    try {
      const res = (await createBike(bikeData)) as TResponseRedux<any>;
      if (res?.data) {
        toast.success(res?.data?.message, { id: toastId });
      } else {
        toast.error(res?.error?.data?.message, { id: toastId });
      }
      console.log(res);
    } catch (err) {
      toast.error("Something want wrong", { id: toastId });
      console.log(err);
    }
  };

  return (
    <>
      <Row justify={"center"} className="my-5">
        <h1 className="text-xl font-bold">Create A Bike</h1>
      </Row>
      <Row justify="center" align="middle">
        <Col span={12}>
          <BRForm onSubmit={onSubmit} resolver={zodResolver(CreateBikeSchema)}>
            <BRInput type="text" name="name" label="Name" />
            <BRInput type="text" name="description" label="Description" />
            <BRInput type="text" name="pricePerHour" label="PricePerHour" />
            <BRInput type="text" name="cc" label="CC" />
            <BRSelect label="Year" name="year" options={yearOptions} />
            <BRInput type="text" name="model" label="Model" />
            <BRInput type="text" name="brand" label="Brand" />
            <Button htmlType="submit">Submit</Button>
          </BRForm>
        </Col>
      </Row>
    </>
  );
};

export default CreateBike;
