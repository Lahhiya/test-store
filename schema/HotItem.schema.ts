import * as z from "zod";

const hotItemSchema = z.object({
    id : z.number(),
    brand : z.string(),
    category : z.string(),
    product : z.string(),
    sold : z.number(),
    image : z.string(),
})

export type hotItemType = z.infer<typeof hotItemSchema>