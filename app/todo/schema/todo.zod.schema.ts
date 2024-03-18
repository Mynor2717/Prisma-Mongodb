import { title } from "process";
import { z } from "zod";

export const TodoSchemaZod = z.object({
    title: z.string().min(1).max(100),
});