import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMsgGeneral
  )}`;

  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Business Identity & Trust */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                M
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{BUSINESS_CONFIG.name}</h3>
                <p className="text-xs text-amber-400 font-semibold font-marathi">
                  २०+ वर्षांचा कायदेशीर व दस्तऐवज अनुभव
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Leading property documentation, Kharedi Khat (खरेदीखत), CIDCO property transfer, registered rent agreements, notary, Marathi/English typing, and photocopy center in Lekha Nagar, CIDCO Nashik.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Legal & Government Compliant Formats</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20+ Years Trusted by CIDCO Residents</span>
              </div>
            </div>
          </div>

          {/* Column 2: 5 SEO Routes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {BUSINESS_CONFIG.routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-blue-400">›</span>
                    <span>{route.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Working Hours (NAP) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Visit Our Shop (NAP)
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Master Multi Services</strong>
                <span>{BUSINESS_CONFIG.address.full}</span>
                <span className="block text-slate-400 text-[11px] mt-0.5">
                  ({BUSINESS_CONFIG.address.landmark})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                  className="font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Shop Hours:</span>
                <span>{BUSINESS_CONFIG.hours}</span>
                <span className="block text-rose-400 text-[11px] font-medium">Sunday Closed</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 4: Live Google Map Iframe */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Shop Location Map
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-sm bg-slate-800">
              <iframe
                title="Master Multi Services Location Map CIDCO Nashik"
                src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <a
              href={BUSINESS_CONFIG.googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open in Google Maps App ›</span>
            </a>
          </div>
        </div>

        {/* Local Areas Served Strip */}
        <div className="pt-6 border-t border-slate-800">
          <p className="text-xs font-semibold text-slate-400 mb-2">
            📍 Areas Served in Nashik & Surrounding Regions:
          </p>
          <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
            {BUSINESS_CONFIG.areasServed.map((area) => (
              <span
                key={area}
                className="px-2.5 py-1 bg-slate-800/80 rounded-md border border-slate-700/60 text-[11px]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-marathi text-[11px] text-slate-400">
            सर्व हक्क सुरक्षित • सिडको, लेखा नगर, नाशिक ४२२००९
          </p>
        </div>
      </div>
    </footer>
  );
}
