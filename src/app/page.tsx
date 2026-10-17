import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  FileText,
  Printer,
  ChevronRight,
  Landmark,
  ScrollText,
  Home,
  Copy,
  Keyboard,
  Sparkles,
  Layers,
  Laptop,
  CheckCircle2,
  FileCheck2,
  Handshake,
  Briefcase,
  HelpCircle,
  FileLock,
  Stamp,
  UsersRound,
  ShieldAlert,
  ScanLine
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function HomePage() {
  const whatsappGeneralUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMsgGeneral
  )}`;
  const whatsappPrintUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMsgPrint
  )}`;

  // Categorized services
  const propertyServices = BUSINESS_CONFIG.services.filter((s) => s.category === "property");
  const typingServices = BUSINESS_CONFIG.services.filter((s) => s.category === "typing");
  const affidavitServices = BUSINESS_CONFIG.services.filter((s) => s.category === "affidavit");

  return (
    <div className="bg-ambient-mesh min-h-screen">
      {/* 1. Mobile Hero Banner (Above the fold on 9:16 mobile) */}
      <section className="relative pt-6 pb-10 sm:pt-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Gold Trust Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <span className="text-amber-600">⭐</span>
            <span>{BUSINESS_CONFIG.experienceBadge} • CIDCO & Property Specialist</span>
          </div>

          {/* EXACT ONE H1 */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-4">
            Master Multi Services – Property Documentation, Kharedi Khat (खरेदीखत) & Typing Xerox Center in Lekha Nagar, CIDCO Nashik
          </h1>

          {/* Subheadline with Marathi & English local context */}
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed mb-6 font-medium">
            Fast, accurate legal documentation, CIDCO property transfers, registered rent agreements (भाडेकरार), notary affidavits, Marathi & English typing, and instant WhatsApp PDF printing at Savata Nagar, Lekha Nagar, CIDCO Nashik (422009).
          </p>

          {/* 2 High-Contrast Mobile CTA Buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 mb-8">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="touch-target w-full sm:w-auto px-6 py-3.5 bg-blue-700 hover:bg-blue-800 active:scale-98 text-white rounded-2xl font-bold text-sm sm:text-base shadow-md shadow-blue-200 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5 fill-white shrink-0" />
              <span>📞 Call Now for Inquiry ({BUSINESS_CONFIG.phoneDisplay})</span>
            </a>
            <a
              href={whatsappPrintUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white rounded-2xl font-bold text-sm sm:text-base shadow-md shadow-emerald-200 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>💬 Send PDF / Inquiry on WhatsApp</span>
            </a>
          </div>

          {/* 3-Column Mobile Trust Strip */}
          <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 bg-white/90 backdrop-blur-xs rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="border-r border-slate-200 pr-1">
              <div className="text-base sm:text-xl font-black text-blue-700">20+ Years</div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-semibold mt-0.5">Experience</div>
            </div>
            <div className="border-r border-slate-200 px-1">
              <div className="text-base sm:text-xl font-black text-emerald-600">23+ Services</div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-semibold mt-0.5">Government & Legal</div>
            </div>
            <div className="pl-1">
              <div className="text-base sm:text-xl font-black text-slate-800">Marathi & Eng</div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-semibold mt-0.5">Expert Typing</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Quick Jump" 4-Card Navigation Grid (2x2 on Mobile) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Explore Portals</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
              Quick Jump to Specialized Portals
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: CIDCO Property */}
          <Link
            href="/cidco-property-documentation-nashik"
            className="group p-4 bg-white hover:bg-blue-50/60 rounded-2xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-snug">
                CIDCO Property Documentation
              </h3>
              <p className="text-[11px] text-slate-500 font-marathi mt-1">
                सिडको हस्तांतरण, लीज डीड व एनओसी
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-blue-700">
              <span>View Portal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 2: Kharedi Khat & Rent */}
          <Link
            href="/kharedi-khat-rent-agreement-nashik"
            className="group p-4 bg-white hover:bg-blue-50/60 rounded-2xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <ScrollText className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-snug">
                Kharedi Khat & Rent Agreement
              </h3>
              <p className="text-[11px] text-slate-500 font-marathi mt-1">
                खरेदीखत, भाडेकरार व साठेखत नोंदणी
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-blue-700">
              <span>View Portal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 3: Typing & Xerox Shop */}
          <Link
            href="/typing-xerox-shop-lekha-nagar-nashik"
            className="group p-4 bg-white hover:bg-blue-50/60 rounded-2xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-snug">
                Typing & Xerox Shop Lekha Nagar
              </h3>
              <p className="text-[11px] text-slate-500 font-marathi mt-1">
                मराठी टायपिंग, झेरॉक्स व WhatsApp प्रिंट
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-blue-700">
              <span>View Portal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 4: Affidavit & Notary */}
          <Link
            href="/affidavit-notary-services-nashik"
            className="group p-4 bg-white hover:bg-blue-50/60 rounded-2xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-snug">
                Affidavit & Notary Services
              </h3>
              <p className="text-[11px] text-slate-500 font-marathi mt-1">
                प्रतिज्ञापत्र, नोटरी साक्षांकन व अर्ज
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-blue-700">
              <span>View Portal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. "Send PDF on WhatsApp & Pick Up Printout" Banner */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-4">
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-3xl p-5 sm:p-8 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              ⚡ Instant Print & Xerox (Zero Waiting)
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white leading-tight mb-2">
              Send PDF on WhatsApp & Pick Up Printout at Lekha Nagar Shop!
            </h2>
            <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed mb-4">
              Don&apos;t stand in line! Send your document PDF, hall ticket, Aadhaar card, or school/college project directly to our WhatsApp. We will keep your sharp laser prints ready for instant pickup.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mb-5">
              <div className="bg-emerald-800/60 p-2.5 rounded-xl border border-emerald-500/40 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500 font-black flex items-center justify-center text-xs">1</span>
                <span>Send PDF on WhatsApp</span>
              </div>
              <div className="bg-emerald-800/60 p-2.5 rounded-xl border border-emerald-500/40 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500 font-black flex items-center justify-center text-xs">2</span>
                <span>We Print (B&W / Colour)</span>
              </div>
              <div className="bg-emerald-800/60 p-2.5 rounded-xl border border-emerald-500/40 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500 font-black flex items-center justify-center text-xs">3</span>
                <span>Collect in Under 1 Min</span>
              </div>
            </div>

            <a
              href={whatsappPrintUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center gap-2 px-5 py-3 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-700 text-white" />
              <span>Send Document to WhatsApp (+91 98765 43210)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Complete 3-Category Service Bento Grid (All 23 Services Visible in HTML) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            All 23 Professional Services
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 mt-2">
            Complete Legal Documentation & Typing Xerox Services in CIDCO Nashik
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every document is drafted with strict compliance to Maharashtra legal standards, Sub-Registrar norms, and CIDCO administrative rules.
          </p>
        </div>

        {/* SECTION 1 (<h2>): Property & Legal Documentation Services in CIDCO Nashik */}
        <div className="mb-12">
          <div className="border-b border-slate-200 pb-3 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-blue-700" />
                <span>Property & Legal Documentation Services in CIDCO Nashik</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-marathi mt-0.5">
                खरेदीखत, सिडको मिळकत हस्तांतरण, भाडेकरार आणि दस्त नोंदणी
              </p>
            </div>
            <Link
              href="/cidco-property-documentation-nashik"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore CIDCO Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {propertyServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-bold">
                      {service.turnaroundTime}
                    </span>
                    {service.popular && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                        Most Requested
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-blue-700 font-semibold font-marathi mt-0.5">
                    {service.marathiTitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.longDesc}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 block mb-1">
                      Required Documents:
                    </span>
                    <ul className="text-[11px] text-slate-500 space-y-0.5">
                      {service.requiredDocs.slice(0, 3).map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.route}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                  >
                    <span>Detailed Info</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                    className="touch-target px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2 (<h2>): Marathi & English Typing, Printing & Xerox Shop in Lekha Nagar */}
        <div className="mb-12">
          <div className="border-b border-slate-200 pb-3 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <Printer className="w-6 h-6 text-emerald-600" />
                <span>Marathi & English Typing, Printing & Xerox Shop in Lekha Nagar</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-marathi mt-0.5">
                मराठी व इंग्रजी टायपिंग, व्हॉट्सॲप प्रिंटिंग आणि हाय-स्पीड झेरॉक्स
              </p>
            </div>
            <Link
              href="/typing-xerox-shop-lekha-nagar-nashik"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore Typing & Xerox</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {typingServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      {service.turnaroundTime}
                    </span>
                    {service.popular && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                        Fast Track
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-emerald-700 font-semibold font-marathi mt-0.5">
                    {service.marathiTitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={whatsappPrintUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target w-full text-center px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                    <span>Send PDF / Print</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3 (<h2>): Affidavit, Agreement & Government Application Drafting */}
        <div className="mb-12">
          <div className="border-b border-slate-200 pb-3 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <FileCheck2 className="w-6 h-6 text-purple-700" />
                <span>Affidavit, Agreement & Government Application Drafting</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-marathi mt-0.5">
                प्रतिज्ञापत्र (Affidavit), नोटरी साक्षांकन, हमीपत्र व शासकीय अर्ज
              </p>
            </div>
            <Link
              href="/affidavit-notary-services-nashik"
              className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore Affidavit Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {affidavitServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 text-[11px] font-bold">
                      {service.turnaroundTime}
                    </span>
                    {service.popular && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-purple-700 font-semibold font-marathi mt-0.5">
                    {service.marathiTitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.longDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.route}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                    className="touch-target px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-xs font-bold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Document Checklists (<details> Accordions) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
              Pre-Visit Checklists
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Essential Documents to Bring to Our Shop
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Save time! Check this list before coming to Master Multi Services in Lekha Nagar, CIDCO Nashik.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {/* Accordion 1 */}
            <details className="group border border-slate-200 rounded-2xl p-4 open:bg-blue-50/30 transition-colors">
              <summary className="font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-700" />
                  <span>1. Documents needed for Rent Agreement / Leave & License in Nashik</span>
                </span>
                <span className="text-blue-700 group-open:rotate-180 transition-transform text-lg">▾</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900">Please carry the following original or Xerox copies:</p>
                <ul className="space-y-1 text-xs text-slate-600 list-disc pl-5">
                  <li><strong>Owner (घरमालक):</strong> Aadhaar Card, PAN Card, Electricity Bill / Index II copy of property.</li>
                  <li><strong>Tenant (भाडेकरू):</strong> Aadhaar Card, PAN Card, Permanent address proof, Passport photo.</li>
                  <li><strong>Two Witnesses (दोन साक्षीदार):</strong> Aadhaar Card copy and active mobile number for OTP verification.</li>
                  <li><strong>Agreement Terms:</strong> Monthly rent amount, deposit amount, agreement duration (usually 11 months), maintenance terms.</li>
                </ul>
              </div>
            </details>

            {/* Accordion 2 */}
            <details className="group border border-slate-200 rounded-2xl p-4 open:bg-blue-50/30 transition-colors">
              <summary className="font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-blue-700" />
                  <span>2. Documents needed for Kharedi Khat (खरेदीखत) & CIDCO Transfer</span>
                </span>
                <span className="text-blue-700 group-open:rotate-180 transition-transform text-lg">▾</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900">Checklist for Sale Deed & CIDCO lease transfer files:</p>
                <ul className="space-y-1 text-xs text-slate-600 list-disc pl-5">
                  <li><strong>Title Documents:</strong> Original CIDCO Allotment Letter, Possession Letter, Sanctioned Building Plan.</li>
                  <li><strong>Revenue Records:</strong> Latest Property Card (मालमत्ता पत्रक) / 7/12 extract and NMC property tax paid receipt.</li>
                  <li><strong>Previous Chain Deeds:</strong> All previous Sale Deeds (मागील खरेदीखत) and Index II records.</li>
                  <li><strong>Buyer & Seller KYC:</strong> Original Aadhaar Cards, PAN Cards, passport-size photographs, and bank account details.</li>
                  <li><strong>Society NOC:</strong> No Objection Certificate from Cooperative Housing Society (if applicable).</li>
                </ul>
              </div>
            </details>

            {/* Accordion 3 */}
            <details className="group border border-slate-200 rounded-2xl p-4 open:bg-blue-50/30 transition-colors">
              <summary className="font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                  <span>3. Documents needed for Affidavits (प्रतिज्ञापत्र) & Notary</span>
                </span>
                <span className="text-blue-700 group-open:rotate-180 transition-transform text-lg">▾</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900">Quick requirements for walk-in Notary and Affidavits:</p>
                <ul className="space-y-1 text-xs text-slate-600 list-disc pl-5">
                  <li><strong>Photo Identity:</strong> Aadhaar Card, Voter ID, or Driving License.</li>
                  <li><strong>Name Change Affidavit:</strong> Gazette copy, marriage certificate, or school leaving certificate showing previous and new names.</li>
                  <li><strong>Education Gap Certificate:</strong> Last passed mark sheet, degree certificate, and reason for gap period.</li>
                  <li><strong>Stamp Paper:</strong> Appropriate ₹100 or ₹500 non-judicial stamp paper (formatting assistance provided at shop).</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 6. Local SEO FAQ Section (<h2>) */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            Help & Information
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 mt-2">
            Frequently Asked Questions – Lekha Nagar & CIDCO Nashik
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Common questions answered by Master Multi Services for local residents and property buyers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {BUSINESS_CONFIG.homeFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {faq.question}
              </h3>
              <p className="text-xs text-blue-700 font-semibold font-marathi mt-0.5">
                {faq.marathiQuestion}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Live Map & Shop Visit Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-10">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Info */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                Visit Master Multi Services
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
                Our Physical Shop Location in Savata Nagar, Lekha Nagar, CIDCO Nashik
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We are conveniently located in Lekha Nagar, CIDCO. Easily reachable within 5 to 10 minutes from Savata Nagar Chowk, Ambad MIDC, Indira Nagar, Pathardi Phata, and Trimurti Chowk.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Address:</strong>
                    <span>{BUSINESS_CONFIG.address.full}</span>
                    <span className="block text-slate-500 text-xs mt-0.5">
                      Landmark: {BUSINESS_CONFIG.address.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Business Hours:</strong>
                    <span>{BUSINESS_CONFIG.hours}</span>
                    <span className="block text-rose-600 text-xs font-semibold">Sunday Closed</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Direct Contact / WhatsApp:</strong>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                      className="text-blue-700 font-bold hover:underline"
                    >
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_CONFIG.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Open in Google Maps Navigation</span>
                </a>
                <a
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Live Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="Google Maps Location of Master Multi Services Lekha Nagar CIDCO Nashik"
                src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 sm:h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
