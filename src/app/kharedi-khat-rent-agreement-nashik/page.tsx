import { Metadata } from "next";
import Link from "next/link";
import {
  ScrollText,
  Home,
  FileSignature,
  Stamp,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  Clock,
  Sparkles
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Kharedi Khat (खरेदीखत), Rent Agreement & Property Registration in CIDCO Nashik",
  description:
    "Expert legal drafting of Kharedi Khat (Sale Deed), registered rent agreements (भाडेकरार), Sathekhat, and Sub-Registrar registration in Lekha Nagar, CIDCO Nashik.",
  keywords: [
    "Kharedi Khat Nashik",
    "खरेदीखत नाशिक",
    "Rent agreement CIDCO Nashik",
    "नोंदणीकृत भाडेकरार नाशिक",
    "Sathekhat Nashik",
    "साठेखत लेखा नगर",
    "Property registration Sub-Registrar Nashik",
    "Gift deed बक्षीस पत्र नाशिक"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/kharedi-khat-rent-agreement-nashik`,
  },
  openGraph: {
    title: "Kharedi Khat (खरेदीखत), Rent Agreement & Property Registration in CIDCO Nashik",
    description:
      "Expert Kharedi Khat, e-registration rent agreements, and Sathekhat drafting in Lekha Nagar, CIDCO Nashik.",
    url: `${BUSINESS_CONFIG.siteUrl}/kharedi-khat-rent-agreement-nashik`,
    type: "article",
  },
};

export default function KharediRentAgreementPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello Master Multi Services, I want to inquire about Kharedi Khat / Rent Agreement registration in Nashik."
  )}`;

  const otherRoutes = BUSINESS_CONFIG.routes.filter(
    (r) => r.path !== "/kharedi-khat-rent-agreement-nashik"
  );

  return (
    <div className="bg-ambient-mesh min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-slate-500">
          <li>
            <Link href="/" className="hover:text-blue-700 transition-colors">
              Home
            </Link>
          </li>
          <li className="text-slate-400">/</li>
          <li className="font-semibold text-slate-800 truncate">
            Kharedi Khat & Rent Agreement Nashik
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pt-4 pb-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
              <ScrollText className="w-3.5 h-3.5" />
              <span>Conveyance & Agreements • Lekha Nagar, Nashik</span>
            </div>

            {/* EXACT H1 */}
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Kharedi Khat (खरेदीखत), Rent Agreement & Property Registration Assistance in Nashik
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Legally watertight drafting of Sale Deeds (खरेदीखत), e-Registered & Notarized Leave and License Rent Agreements (भाडेकरार), Sathekhat (साठेखत), and complete Sub-Registrar file preparation in CIDCO Nashik (422009).
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="touch-target px-5 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Documentation Desk ({BUSINESS_CONFIG.phoneDisplay})</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Agreement Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-12">
        {/* Section 1: Kharedi Khat & Sale Deed Drafting */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Sale Deed Drafting
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Kharedi Khat (खरेदीखत) & Sale Deed Drafting in Marathi and English
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            A Kharedi Khat (खरेदीखत / Sale Deed) is the most critical document when buying or selling any flat, house, plot, or commercial shop in Nashik. Our 20+ years of local experience ensures that the title history, chain deeds, consideration receipts, encumbrance clearances, and exact boundaries are flawlessly recorded in legal Marathi or English.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Flats & Row Houses (सदनिका व रो-हाऊस)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear articulation of carpet area, built-up area, undivided land share, car parking rights, and society share certificate transfer clauses.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                CIDCO Plots & Industrial Units
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Precise compliance with CIDCO lease clauses, MIDC permissions in Ambad/Satpur, and specific terms of transfer.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Agricultural & NA Plots
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verification of 7/12 extract entries, fermentation notes (फेरफार), road access reservations, and collector NA order references.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="touch-target px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Discuss Your Kharedi Khat</span>
            </a>
          </div>
        </section>

        {/* Section 2: Rent Agreement Services */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Rental Agreements
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Rent Agreement Services (भाडेकरार) & Leave and License in Lekha Nagar, CIDCO
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Under the Maharashtra Rent Control Act, it is mandatory to execute a formal Leave and License agreement for rented residential flats and commercial shops. We provide both Registered Rent Agreements (e-Registration with biometric Aadhaar verification) and quick Notarized Rent Agreements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl border border-slate-200 bg-emerald-50/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Government Registered Rent Agreement (e-Registration)
                </h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Legally recognized for police verification & passport address proof.</li>
                <li>• Biometric Aadhaar thumb verification for owner and tenant.</li>
                <li>• Official Maharashtra Government IGR registered Index II copy issued.</li>
                <li>• Complete online registration and document assistance.</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-blue-50/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Notarized Rent Agreement (नोटरी भाडेकरार)
                </h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Formatted on ₹100 or ₹500 non-judicial stamp paper.</li>
                <li>• Attested with advocate notary seal and signature.</li>
                <li>• Ideal for company HR rent allowance (HRA), college admissions, and local utility.</li>
                <li>• Walk-in drafting and immediate advocate attestation.</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-700">
              <strong className="text-emerald-900 block font-bold">Need a fast rent agreement in CIDCO Nashik?</strong>
              <span>Send owner and tenant Aadhaar cards on WhatsApp to initiate draft immediately.</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send KYC on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Section 3: Sathekhat, Gift Deed & Registration Help */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Agreements & Deeds
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Sathekhat (Agreement to Sale), Gift Deed (बक्षीस पत्र) & Property Registration Help
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Beyond standard sale deeds, specialized transactions like token agreements (इसार पावती / साठेखत) and blood-relation property gifting require specialized legal attention to maximize tax benefits and avoid family conflict.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Sathekhat & Isar Pavti (साठेखत व इसार पावती)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protects the buyer&apos;s advance earnest money and binds the seller to clear title within agreed timelines. We draft comprehensive clauses for payment installments, loan sanction periods, and default damages.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Gift Deed / Bakshis Patra (बक्षीस पत्र)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conveyance of residential or agricultural property to blood relatives (parents to children, husband to wife, or between siblings) with subsidized Maharashtra stamp duty rates.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Required Documents Checklist */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Checklist
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-4">
            Documents Required for Kharedi Khat & Rent Agreement in Nashik
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">For Kharedi Khat (खरेदीखत):</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Property Card (मालमत्ता पत्रक) or 7/12 extract (within last 3 months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Prior Chain Sale Deeds (मागील खरेदीखत) and Index II</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sanctioned building plan & Completion / Occupancy Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>NMC Property Tax No-Dues Receipt & Society NOC</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">For Rent Agreement (भाडेकरार):</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Landlord Aadhaar Card & PAN Card copy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tenant Aadhaar Card, PAN Card, and Permanent Address proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>2 Witnesses with active Aadhaar-linked mobile numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Recent Electricity Bill or Index II copy of rented property</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Common Inquiries
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-6">
            Frequently Asked Questions on Sale Deeds & Rent Agreements
          </h2>

          <div className="space-y-4">
            {BUSINESS_CONFIG.kharediRentFaqs.map((faq, index) => (
              <div key={index} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-xs text-emerald-700 font-semibold font-marathi mt-0.5">
                  {faq.marathiQuestion}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Carousel / 4-card route navigation */}
        <section className="pt-4 border-t border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Explore Other Master Multi Services Portals:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherRoutes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800">{route.shortLabel}</div>
                  <div className="text-[11px] text-slate-500 font-marathi">{route.marathiTitle}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
