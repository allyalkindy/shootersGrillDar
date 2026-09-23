import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(
    "Hi Shooters Grill, I'd like to make a reservation.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-cream shadow-[0_10px_30px_-8px_rgba(125,26,31,0.8)] transition-transform duration-300 hover:scale-110 hover:bg-crimson-2"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
