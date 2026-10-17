import { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  FileCheck,
  UsersRound,
  ShieldAlert,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Clock,
  ArrowRight,
  FileText,
  ShieldCheck,
  Scale
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "CIDCO Property Documentation & Transfer Services in Nashik | Master Multi Services",
  description:
    "Expert CIDCO property documentation, property transfer, lease deed drafting, family settlement, and NOC in Lekha Nagar, CIDCO Nashik (422009). 20+ years local experience.",
  keywords: [
    "CIDCO property transfer Nashik",
    "CIDCO documentation Lekha Nagar",
    "सिडको प्रॉपर्टी हस्तांतरण नाशिक",
    "CIDCO lease deed drafting Nashik",
    "CIDCO NOC Nashik",
    "CIDCO Savata Nagar",
    "Property settlement CIDCO Nashik",
    "CIDCO heirship transfer Nashik"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/cidco-property-documentation-nashik`,
  },
  openGraph: {
    title: "CIDCO Property Documentation & Transfer Services in Nashik | Master Multi Services",
    description:
      "Expert CIDCO property transfer, lease deeds, family settlements, and NOC assistance in Lekha Nagar, CIDCO Nashik.",
    url: `${BUSINESS_CONFIG.siteUrl}/cidco-property-documentation-nashik`,
    type: "article",
  },
};

export default function CidcoPropertyPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello Master Multi Services, I want to inquire about CIDCO property documentation and transfer in Nashik."
  )}`;

  // Other routes for internal linking
  const otherRoutes = BUSINESS_CONFIG.routes.filter(
    (r) => r.path !== "/cidco-property-documentation-nashik"
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
            CIDCO Property Documentation Nashik
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pt-4 pb-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
              <Landmark className="w-3.5 h-3.5" />
              <span>Specialized CIDCO Portal • Lekha Nagar, Nashik</span>
            </div>

            {/* EXACT H1 */}
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              CIDCO Property Documentation & Property Transfer Specialist in Lekha Nagar, Nashik
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Over 20 years of hands-on expertise assisting residential, commercial, and plot owners with CIDCO administration, lease deed execution, heirship transfers, and Sub-Registrar registrations in CIDCO Nashik (422009).
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="touch-target px-5 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call CIDCO Expert ({BUSINESS_CONFIG.phoneDisplay})</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp CIDCO Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-12">
        {/* Section 1: Complete CIDCO Property Transfer */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Ownership Transfer
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Complete CIDCO Property Transfer & Administration Services in Nashik
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Transferring leasehold rights of CIDCO plots, flats, row houses, or commercial shops in Nashik requires precise bureaucratic documentation. A single missing indemnity or incorrect affidavit causes prolonged rejections. At Master Multi Services, we manage the entire paperwork chain from beginning to approval.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                Regular Sale & Resale Transfer (खरेदी-विक्री हस्तांतरण)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drafting transfer application forms, transferor and transferee affidavits, mutual undertakings, and coordinating with society for verification NOC.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                Succession & Heirship Transfer (वारसाहक्क हस्तांतरण)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In unfortunate events of the original allottee&apos;s death, we prepare family genealogies (Pedhinama), heirship affidavits, release deeds (हक्कसोडपत्र), and indemnity bonds for smooth transfer.
              </p>
            </div>
          </div>

          <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-700">
              <strong className="text-blue-900 block font-bold">Have an urgent CIDCO transfer case?</strong>
              <span>Visit our Lekha Nagar shop or send details on WhatsApp for immediate review.</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Section 2: Lease Deed Drafting & Registration */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Legal Drafting
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Lease Deed Drafting & Registration Services in Lekha Nagar & CIDCO
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            CIDCO grants properties on long-term lease (such as 60-year or 99-year terms). Execution and registration of the tripartite or bipartite Lease Deed with CIDCO is the foundational document that establishes your permanent marketable title.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Bipartite Lease Deeds</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Drafted between CIDCO and individual plot/flat allottee with complete property schedule and boundary coordinates.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Tripartite Agreements</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Agreements involving CIDCO, Cooperative Housing Society, and the purchaser for multi-dwelling apartment blocks.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">CIDCO Mortgage NOC</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Formal application files and legal formatting required for obtaining bank home loan mortgage permission.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="touch-target px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call for Lease Deed Guidance</span>
            </a>
          </div>
        </section>

        {/* Section 3: Property Settlement & Family Transfer */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Family & Succession
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Property Settlement, Release Deed & Family Transfer Documentation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Family property distributions require clear legal language to prevent future disputes between siblings, legal heirs, or co-owners. We prepare registered deeds and notarized affidavits in flawless legal Marathi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Release Deed / Hakka Sod Patra (हक्कसोडपत्र)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When one or more family members relinquish their ancestral or joint share in favor of another member without financial consideration or through settlement.
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Family Partition Deed (कौटुंबिक वाटपपत्र)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive division of residential plots, agricultural land, or commercial shops among legal heirs with clearly mapped boundary measurements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Required Documents Checklist */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Checklist
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-4">
            Required Documents Checklist for CIDCO Property Transfer in Nashik
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Primary Documents from Owner:</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Original Allotment Letter & Final Order Copy from CIDCO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Possession Letter & Sanctioned Building Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Latest CIDCO & NMC Property Tax Paid Receipts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Society NOC & Maintenance Clearance (if society formed)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Transferee / Heir Requirements:</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Aadhaar Card & PAN Card of both parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Passport-size photographs of Transferor & Transferee</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pedhinama / Legal Heir Certificate (if succession case)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>₹100/₹500 Non-Judicial Stamp Papers for Affidavits & Indemnity</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs (4 detailed FAQs) */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Common Inquiries
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-6">
            Frequently Asked Questions about CIDCO Documentation in Nashik
          </h2>

          <div className="space-y-4">
            {BUSINESS_CONFIG.cidcoFaqs.map((faq, index) => (
              <div key={index} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
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
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800">{route.shortLabel}</div>
                  <div className="text-[11px] text-slate-500 font-marathi">{route.marathiTitle}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
