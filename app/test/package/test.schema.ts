import * as z from "zod";

const actionSchema = z.enum(["plus","reset","minus"])

export type actionType = z.infer<typeof actionSchema>