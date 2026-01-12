import * as z from "zod";

export const FlashItemsSchema = z.object({
    id: z.number(),
    name: z.string(),
    subCategory: z.string(),
    price: z.number(),
    discount: z.number(),
    stock: z.number(),
    sold: z.number(),
})

export type FlashItemTypes = z.infer<typeof FlashItemsSchema>