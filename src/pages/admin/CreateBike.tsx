import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import { toast } from "sonner";
import { CreateBikeSchema } from "../../schemas/addBikeSchema";
import BRForm from "../../components/form/BRForm";
import BRSelect from "../../components/form/BRSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import BRInput from "../../components/form/BRInput";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: currentYear - number,
  label: currentYear - number,
}));

const CreateBike = () => {
  // onSubmit function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating........");
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    // try {
    //   const res = (await addAcademicSemester(semesterData)) as TResponse<any>;
    //   console.log(res);
    //   if (res?.error) {
    //     toast.error(res?.error?.data?.message, { id: toastId });
    //   } else {
    //     toast.success(res?.data?.message, { id: toastId });
    //   }
    //   console.log(res);
    // } catch (err) {
    //   toast.error("Something want wrong", { id: toastId });
    //   console.log(err);
    // }
  };

  return (
    <Row justify="center" align="middle">
      <Col span={6}>
        <BRForm onSubmit={onSubmit} resolver={zodResolver(CreateBikeSchema)}>
          <BRInput type="text" name="name" label="Name" />
          <BRSelect label="Year" name="year" options={yearOptions} />

          <Button htmlType="submit">Submit</Button>
        </BRForm>
      </Col>
    </Row>
  );
};

export default CreateBike;
