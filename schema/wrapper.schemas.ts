import * as z from "zod";
import { initTrdSchema, actionTrdSchema } from "./form.schemas";

const modalSchema = z.object({
  status: z.boolean(),
  setter: z.function().input([z.boolean()]).output(z.void()),
});


const wrapperDetailTrdSchema = z.object({
  detailTrd: initTrdSchema,
  setDetailTrd: z.function().input([actionTrdSchema]).output(z.void()),
});

export type modalType = z.infer<typeof modalSchema>;
export type wrapperDetailTrdType = z.infer<typeof wrapperDetailTrdSchema>;