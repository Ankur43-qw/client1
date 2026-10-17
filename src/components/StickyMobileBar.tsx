"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function StickyMobileBar() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMsgPrint
  )}`;

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Action 1: Direct Call */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneTel}`}
          className="touch-target w-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white rounded-xl flex flex-col items-center justify-center py-1.5 shadow-sm transition-transform"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5 fill-white mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-tight">Call Now</span>
        </a>

        {/* Action 2: WhatsApp PDF / Print */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl flex flex-col items-center justify-center py-1.5 shadow-sm transition-transform"
          aria-label="Send PDF on WhatsApp for Printing"
        >
          <MessageCircle className="w-5 h-5 fill-white mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-tight">Send PDF</span>
        </a>

        {/* Action 3: Open Google Map */}
        <a
          href={BUSINESS_CONFIG.googleMapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target w-full bg-slate-800 hover:bg-slate-900 active:scale-95 text-white rounded-xl flex flex-col items-center justify-center py-1.5 shadow-sm transition-transform"
          aria-label="Find Shop on Google Maps"
        >
          <MapPin className="w-5 h-5 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-tight">Visit Shop</span>
        </a>
      </div>
    </aside>
  );
}
