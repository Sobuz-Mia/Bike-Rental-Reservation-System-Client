import { Link, useNavigate } from "react-router-dom";
import BRForm from "../../components/form/BRForm";
import BRInput from "../../components/form/BRInput";
import { Button } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema } from "../../schemas/userShema";
import { useCreateUserMutation } from "../../redux/features/user/userManagement.api";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";

const SignUp = () => {
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createUser(data);
      if (res?.data) {
        toast.success(res?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something want wrong");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-6">
          Welcome to Bike rentals services!
        </h2>
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
        <BRForm
          resolver={zodResolver(CreateUserSchema)}
          onSubmit={handleSubmit}
        >
          <BRInput type="text" label="Name" name="name" />
          <BRInput type="email" label="Email" name="email" />
          <BRInput type="password" label="Password" name="password" />
          <BRInput type="number" label="Phone" name="phone" />
          <BRInput type="text" label="Address" name="address" />
          <Button
            style={{
              backgroundColor: "#1B3E41",
              color: "#fff",
              fontWeight: "bold",
            }}
            size="large"
            className="w-full"
            htmlType="submit"
          >
            Sign Up
          </Button>
        </BRForm>
        <h2 className="text-xl font-semibold text-center mt-6">
          already have an account?
          <Link className="underline hover:cursor-pointer" to={"/login"}>
            Sign In
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
