import * as z from "zod";

const hotItemSchema = z.object({
    id : z.number(),
    brand : z.string(),
    name : z.string(),
    sold : z.number(),
    image : z.string(),
})

export type hotItemType = z.infer<typeof hotItemSchema>