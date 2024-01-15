import { z } from "zod";

export const simplePasswordSchema = z.object({
  password: z.string().trim().min(8, "O tamanho mínimo é de 8 caracteres :)"),
});
