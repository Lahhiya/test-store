import * as z from "zod";
import { initTrdSchema, actionTrdSchema } from "./form.schemas";

const modalSchema = z.object({
  status: z.boolean(),
  setter: z.function().input([z.boolean()]).output(z.void()),
});

const wrapBrandInfoSchema = z.object({
  name : z.string(),
  image : z.string(),
  category : z.string(),
})

const wrapperDetailTrdSchema = z.object({
  detailTrd: initTrdSchema,
  setDetailTrd: z.function().input([actionTrdSchema]).output(z.void()),
});

export type wrapBrandInfoType = z.infer<typeof wrapBrandInfoSchema>;
export type modalType = z.infer<typeof modalSchema>;
export type wrapperDetailTrdType = z.infer<typeof wrapperDetailTrdSchema>;