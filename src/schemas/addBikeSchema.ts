import { z } from "zod";

export const CreateBikeSchema = z.object({
  name: z.string({ required_error: "Bike name is required" }),
  description: z.string({ required_error: "Description is required" }),
  pricePerHour: z.number({ required_error: "Price per hours is required" }),
  cc: z.number({ required_error: "CC is required" }),
  year: z.number({ required_error: "Please select year" }),
  model: z.string({ required_error: "Model is required" }),
  brand: z.string({ required_error: "Please select Brand" }),
});
