import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck2,
  Mail,
  Handshake,
  Briefcase,
  HelpCircle,
  FileLock,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Scale
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Notary Services, Affidavit Preparation & Application Drafting in CIDCO Nashik",
  description:
    "Instant Affidavit drafting (प्रतिज्ञापत्र), advocate notary attestation, indemnity bonds, and official government representation letters in Lekha Nagar, CIDCO Nashik 422009.",
  keywords: [
    "Notary services CIDCO Nashik",
    "Affidavit preparation Lekha Nagar",
    "प्रतिज्ञापत्र नाशिक",
    "Name change affidavit Nashik",
    "Indemnity bond drafting CIDCO",
    "Notary advocate Savata Nagar",
    "NMC application drafting Marathi",
    "Education gap certificate Nashik"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/affidavit-notary-services-nashik`,
  },
  openGraph: {
    title: "Notary Services, Affidavit Preparation & Application Drafting in CIDCO Nashik",
    description:
      "Expert Affidavit preparation, Notary services, and government application drafting in Lekha Nagar, CIDCO Nashik.",
    url: `${BUSINESS_CONFIG.siteUrl}/affidavit-notary-services-nashik`,
    type: "article",
  },
};

export default function AffidavitNotaryPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello Master Multi Services, I want to inquire about Affidavit drafting and Notary attestation in Nashik."
  )}`;

  const otherRoutes = BUSINESS_CONFIG.routes.filter(
    (r) => r.path !== "/affidavit-notary-services-nashik"
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
            Affidavit & Notary Services Nashik
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pt-4 pb-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Affidavit & Notary Desk • Lekha Nagar, Nashik</span>
            </div>

            {/* EXACT H1 */}
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Affidavit Preparation, Notary Services & Agreement Drafting in Lekha Nagar, Nashik
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Immediate walk-in Affidavit preparation (प्रतिज्ञापत्र), advocate Notary stamping, indemnity bonds, personal contracts, and formal Marathi representations for CIDCO, NMC, and revenue authorities in Savata Nagar, Lekha Nagar, CIDCO Nashik (422009).
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="touch-target px-5 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Notary Desk ({BUSINESS_CONFIG.phoneDisplay})</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Affidavit Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-12">
        {/* Section 1: Affidavit Preparation */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
            Sworn Declarations
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Affidavit Preparation (प्रतिज्ञापत्र) for Name Change, Address, Income & Education Gaps
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            An Affidavit (शपथपत्र / प्रतिज्ञापत्र) is a sworn statement of facts on legal stamp paper attested before a Notary Public. We provide standard and customized drafts that comply with government admission, passport, job verification, and gazette requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Name Change & Spelling (नाव बदल)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For differences between school LC, Aadhaar, PAN card, or marriage name changes (एकाच व्यक्तीचे शपथपत्र).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Education Gap Certificate
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Affidavits explaining 1 to 5 years study gaps required for college admissions and university eligibility.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Address & Domicile Proof
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local residence proof declarations for driving license, bank account opening, and gas connection transfers.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Lost Document Affidavits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sworn declarations for lost marksheet, property index II, share certificates, or vehicle RC book duplicates.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="touch-target px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call for 15-Min Walk-In Drafting</span>
            </a>
          </div>
        </section>

        {/* Section 2: Notary Services & Indemnity Bonds */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
            Legal Attestation
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Notary Services, Indemnity Bonds & Legal Document Attestation Assistance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            We facilitate registered advocate notary attestation for affidavits, declarations, loan agreements, and power of attorneys. Our shop assists with accurate notarial register entries and authorized government seals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Indemnity Bonds & Undertakings (हमीपत्र व बंधपत्र)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard format indemnity bond preparation required by CIDCO, MSEDCL (Mahavitaran) for electricity meter name change, Nashik Municipal Corporation water connection transfer, and bank deceased claim settlements.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                General & Special Power of Attorney (कुलमुखत्यारपत्र)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drafting valid Power of Attorney appointing trusted family representatives for property management, government follow-ups, and banking representations when principal is out of station or senior citizen.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Custom Application Drafting */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
            Administrative Drafting
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Custom Marathi & English Application Drafting for CIDCO, NMC & Revenue Offices
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Government officers take action only when representations are submitted in proper formal format citing relevant regulations and consumer details. We draft powerful Marathi applications for everyday civic and revenue issues.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">NMC Ward Applications</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Property tax assessment correction, road repair petition, drainage complaint, and birth certificate correction applications.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">CIDCO Administrative Letters</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                File trace applications, duplicate allotment letter requests, change of communication address, and inspection calls.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Police Complaints & RTI</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Clear chronological fact representations for lost phone/document station diary entries and Right to Information queries.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consult on Application Drafting</span>
          </a>
        </section>

        {/* Section 4: FAQs */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
            Common Inquiries
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-6">
            Frequently Asked Questions on Notary & Affidavits in Nashik
          </h2>

          <div className="space-y-4">
            {BUSINESS_CONFIG.affidavitFaqs.map((faq, index) => (
              <div key={index} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-xs text-purple-700 font-semibold font-marathi mt-0.5">
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
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-xs transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800">{route.shortLabel}</div>
                  <div className="text-[11px] text-slate-500 font-marathi">{route.marathiTitle}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-700 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
