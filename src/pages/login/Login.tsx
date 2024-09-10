import { Button, Input } from "@nextui-org/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyAccessToken } from "../../utils/verifyAccessToken";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "joh@example.com", password: "password123" },
  });

  // On successful form submission, redirect to the dashboard
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const userInfo = {
        email: data?.email,
        password: data?.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyAccessToken(res?.data?.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res?.data?.accessToken }));
      // Redirect to dashboard
      navigate("/");

      // display toast
      toast.success(`${res?.message}`);
    } catch (error) {
      if (error) {
        toast.error("Something want wrong");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Welcome Back !
        </h2>
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1B3E41] text-white font-bold text-xl"
          >
            Sign In
          </Button>
        </form>
        <h2 className="text-xl font-semibold text-center mt-6">
          Don't have an account?{" "}
          <Link className="underline hover:cursor-pointer" to={"/register"}>
            Sign Up
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
