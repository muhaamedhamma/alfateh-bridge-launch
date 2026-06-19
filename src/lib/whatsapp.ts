// AL FATEH contact configuration
export const WHATSAPP_NUMBER = "2250503907326"; // E.164 without +
export const WHATSAPP_DISPLAY = "+225 05 03 90 73 26";

export const CALL_NUMBER = "2250710629429"; // E.164 without +
export const CALL_DISPLAY = "+225 07 10 62 94 29";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:+${CALL_NUMBER}`;
}
