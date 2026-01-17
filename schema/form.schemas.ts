import * as z from "zod";

export const initTrdSchema = z.object({
  id: z.number().optional(),
  brand: z.string().optional(),
  product: z.string().optional(),
  price: z.number().optional(),
  userId: z.number().optional(),
  serverId: z.number().optional(),
  payment: z.string().optional(),
  voucher: z.string().optional(),
  email: z.email().optional(),
});

const addIDSchema = z.object({
  key: z.literal("ADD_ID"),
  payload: z.number(),
});

const addBrandSchema = z.object({
  key: z.literal("ADD_BRAND"),
  payload: z.string(),
});

const addProductSchema = z.object({
  key: z.literal("ADD_PRODUCT"),
  payload: z.string(),
});

const addPriceSchema = z.object({
  key: z.literal("ADD_PRICE"),
  payload: z.number(),
});

const addUserIdSchema = z.object({
  key: z.literal("ADD_USERID"),
  payload: z.number(),
});

const addServerIdSchema = z.object({
  key: z.literal("ADD_SERVERID"),
  payload: z.number(),
});

const addPaymentSchema = z.object({
  key: z.literal("ADD_PAYMENT"),
  payload: z.enum(["bank", "qris", "gopay", "dana"]),
});

const addVoucherSchema = z.object({
  key: z.literal("ADD_VOUCHER"),
  payload: z.string(),
});

const addEmailSchema = z.object({
  key: z.literal("ADD_EMAIL"),
  payload: z.email(),
});

export const validUserIdSchema = z.coerce.number().positive()
export const validServerIdSchema = z.coerce.number().positive();
export const validPaymentSchema = z.enum(["bank", "qris", "gopay", "dana"]);
export const validVoucherSchema = z.string()
export const validEmailSchema = z.email()
export const validMsgSchema = z.string().max(50)

const outputTrdSchema = z.object({
  id: z.number(),
  brand: z.string(),
  product: z.string(),
  price: z.number(),
  userId: validUserIdSchema,
  serverId: validServerIdSchema,
  payment: validPaymentSchema,
  voucher: validVoucherSchema,
  email: validEmailSchema,
  message : validMsgSchema
});

export const actionTrdSchema = z.discriminatedUnion("key", [
  addIDSchema,
  addBrandSchema,
  addProductSchema,
  addPriceSchema,
  addUserIdSchema,
  addServerIdSchema,
  addPaymentSchema,
  addVoucherSchema,
  addEmailSchema,
]);

export type validPaymentType = z.infer<typeof validPaymentSchema>
export type validVoucherType = z.infer<typeof validVoucherSchema>
export type validEmailType = z.infer<typeof validEmailSchema>
export type validMsgType = z.infer<typeof validMsgSchema>
export type initTransactionType = z.infer<typeof initTrdSchema>;
export type outputTransactionType = z.infer<typeof outputTrdSchema>;
export type actionTrdType = z.infer<typeof actionTrdSchema>;