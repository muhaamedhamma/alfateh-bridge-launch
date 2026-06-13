import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const { t, lang } = useI18n();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const msg =
    lang === "fr"
      ? "Bonjour AL FATEH, je souhaite échanger avec votre équipe."
      : "Hello AL FATEH, I would like to get in touch with your team.";

  return (
    <a
      href={whatsappLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      className="fixed bottom-5 right-5 z-50 print:hidden group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
      <span className="relative flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-black/30 hover:bg-[#1DA851] transition-all hover:scale-105">
        <MessageCircle size={22} strokeWidth={2.4} />
        <span className="hidden sm:inline text-sm font-semibold">
          {t.whatsapp.label}
        </span>
      </span>
    </a>
  );
}
