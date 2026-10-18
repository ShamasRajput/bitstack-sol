import { z } from "zod";

export const services = [
  "AI automation",
  "Web development",
  "Integrations & systems",
  "Not sure yet",
] as const;
const optionalText = (max: number) =>
  z.string().trim().max(max).optional().default("");
export const inquirySchema = z.object({
  service: z.enum(services),
  description: z
    .string()
    .trim()
    .min(1, "Please describe your project.")
    .max(5000),
  company: optionalText(200),
  website: optionalText(500).refine((value) => {
    if (!value) return true;
    try {
      return ["http:", "https:"].includes(new URL(value).protocol);
    } catch {
      return false;
    }
  }, "Website must be a complete http:// or https:// URL."),
  tools: optionalText(1000),
  budget: optionalText(100),
  timeline: optionalText(100),
  name: z.string().trim().min(1, "Please enter your name.").max(150),
  email: z
    .string()
    .trim()
    .max(254)
    .email("Please enter a valid email address."),
});
export type Inquiry = z.infer<typeof inquirySchema>;
export type SavedInquiry = Inquiry & { id: string; submittedAt: string };
export const emptyInquiry: Inquiry = {
  service: "Not sure yet",
  description: "",
  company: "",
  website: "",
  tools: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
};
