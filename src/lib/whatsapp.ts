// AL FATEH WhatsApp configuration
export const WHATSAPP_NUMBER = "2250503907326"; // E.164 without +
export const WHATSAPP_DISPLAY = "+225 05 03 90 73 26";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
