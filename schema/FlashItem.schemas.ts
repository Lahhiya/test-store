import * as z from "zod";

const FlashItemsSchema = z.object({
    id: z.number(),
    brand: z.string(),
    product: z.string(),
    category: z.string(),
    price: z.number(),
    discount: z.number(),
    stock: z.number(),
    sold: z.number(),
    image: z.string(),
})

export type FlashItemTypes = z.infer<typeof FlashItemsSchema>