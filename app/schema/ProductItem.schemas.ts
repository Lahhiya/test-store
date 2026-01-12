import * as z from "zod";

const gameSchema = z.object({
  id: z.number(),
  brand: z.string(),
  name: z.string(),
  category: z.literal("game"),
  price: z.number(),
  sold: z.number(),
  image: z.string(),
  instant: z.boolean(),
});

const eWalletSchema = z.object({
  id: z.number(),
  brand: z.string(),
  name: z.string(),
  category: z.literal("ewallet"),
  price: z.number(),
  sold: z.number(),
  image: z.string(),
  paylater: z.boolean(),
});


const productSchema = z.object({
  name: z.string(),
  data : z.array(z.discriminatedUnion("category",[gameSchema,eWalletSchema]))
});

export type productType = z.infer<typeof productSchema>
export type gameType = z.infer<typeof gameSchema>
export type eWalletType = z.infer<typeof eWalletSchema>