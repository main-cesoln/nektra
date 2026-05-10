import { COMPANY } from "./constants";

type Field = { label: string; value: string | undefined };

export function buildWhatsAppUrl(title: string, fields: Field[]): string {
  const lines = [
    `*${title}*`,
    "",
    ...fields
      .filter((f) => f.value && f.value.trim().length > 0)
      .map((f) => `*${f.label}:* ${f.value!.trim()}`),
  ];
  const text = lines.join("\n");
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}
