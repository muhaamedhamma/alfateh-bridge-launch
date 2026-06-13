import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const baseSchema = {
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().nullable(),
  message: z.string().trim().min(5).max(4000),
  source: z.string().trim().max(80).optional().nullable(),
};

const buyerSchema = z.object({
  type: z.literal("buyer"),
  ...baseSchema,
  company: z.string().trim().min(1).max(200),
  commerceType: z.string().trim().max(80),
  zone: z.string().trim().max(120),
});

const brandSchema = z.object({
  type: z.literal("brand"),
  ...baseSchema,
  company: z.string().trim().min(1).max(200),
  country: z.string().trim().max(120),
  brandType: z.string().trim().max(80),
});

const quoteSchema = z.object({
  type: z.literal("quote"),
  ...baseSchema,
  company: z.string().trim().max(200).optional().nullable(),
  zone: z.string().trim().max(120).optional().nullable(),
  products: z.string().trim().min(2).max(4000),
});

const inputSchema = z.discriminatedUnion("type", [
  buyerSchema,
  brandSchema,
  quoteSchema,
]);

export type SubmitLeadInput = z.infer<typeof inputSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    const row = {
      type: data.type,
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      message: data.message,
      source: data.source ?? null,
      payload: JSON.parse(JSON.stringify(data)),
      company:
        data.type === "buyer" || data.type === "brand"
          ? data.company
          : data.company ?? null,
      commerce_type: data.type === "buyer" ? data.commerceType : null,
      zone:
        data.type === "buyer"
          ? data.zone
          : data.type === "quote"
            ? data.zone ?? null
            : null,
      country: data.type === "brand" ? data.country : null,
      brand_type: data.type === "brand" ? data.brandType : null,
      products: data.type === "quote" ? data.products : null,
    };

    const { data: inserted, error } = await supabaseAdmin
      .from("leads")
      .insert(row)
      .select("id, created_at")
      .single();

    if (error) {
      console.error("[submitLead] insert error", error);
      throw new Error("Une erreur est survenue. Merci de réessayer.");
    }

    return { id: inserted.id, createdAt: inserted.created_at };
  });
