import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email("Vul een geldig e-mailadres in.")
    .trim()
    .transform((value) => value.toLowerCase()),
  wachtwoord: z.string().min(1, "Vul je wachtwoord in."),
  onthoud: z.boolean().default(false),
});

export const registerSchema = z.object({
  naam: z
    .string()
    .trim()
    .min(2, "Naam moet minstens 2 tekens zijn.")
    .max(120, "Naam mag maximaal 120 tekens zijn."),
  email: z
    .email("Vul een geldig e-mailadres in.")
    .trim()
    .transform((value) => value.toLowerCase()),
  wachtwoord: z
    .string()
    .min(8, "Wachtwoord moet minstens 8 tekens zijn.")
    .max(72, "Wachtwoord mag maximaal 72 tekens zijn."),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
