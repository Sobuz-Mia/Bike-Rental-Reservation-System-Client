import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }),
  password: z.string({ required_error: "Password is required" }),
  phone: z.string({ required_error: "Phone number is required" }),
  address: z.string({ required_error: "Address is required" }),
});
