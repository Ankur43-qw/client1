import { Metadata } from "next";
import Link from "next/link";
import {
  Printer,
  Keyboard,
  Copy,
  Sparkles,
  Layers,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ScanLine,
  Laptop,
  Clock,
  MapPin,
  FileText
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Marathi & English Typing, Xerox & Printing Shop in Lekha Nagar, CIDCO Nashik",
  description:
    "Speed Marathi & English typing, instant WhatsApp PDF document printing, high clarity B&W / colour Xerox, scanning, and form filling at Master Multi Services, Lekha Nagar CIDCO Nashik.",
  keywords: [
    "Marathi typing shop Lekha Nagar",
    "English typing CIDCO Nashik",
    "Xerox shop near me Lekha Nagar",
    "WhatsApp printout CIDCO Nashik",
    "Colour Xerox Nashik 422009",
    "मराठी टायपिंग सिडको नाशिक",
    "Document scanning Savata Nagar",
    "Online form filling Lekha Nagar"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/typing-xerox-shop-lekha-nagar-nashik`,
  },
  openGraph: {
    title: "Marathi & English Typing, Xerox & Printing Shop in Lekha Nagar, CIDCO Nashik",
    description:
      "Instant WhatsApp PDF printing, error-free Marathi typing, bulk Xerox, and scanning services at Lekha Nagar, CIDCO Nashik.",
    url: `${BUSINESS_CONFIG.siteUrl}/typing-xerox-shop-lekha-nagar-nashik`,
    type: "article",
  },
};

export default function TypingXeroxPage() {
  const whatsappPrintUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMsgPrint
  )}`;

  const otherRoutes = BUSINESS_CONFIG.routes.filter(
    (r) => r.path !== "/typing-xerox-shop-lekha-nagar-nashik"
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
            Typing & Xerox Shop Lekha Nagar
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pt-4 pb-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
              <Printer className="w-3.5 h-3.5" />
              <span>Instant Printing & Typing • Lekha Nagar, Nashik</span>
            </div>

            {/* EXACT H1 */}
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Marathi & English Typing, Printing & Xerox Shop in Lekha Nagar, CIDCO Nashik
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              High-speed Marathi and English typing, instant WhatsApp document printing, crystal-clear B&W / Colour Xerox, multi-page scanning, and online government form filling at Savata Nagar, Lekha Nagar, CIDCO Nashik (422009).
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappPrintUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send PDF on WhatsApp for Print</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="touch-target px-5 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Shop ({BUSINESS_CONFIG.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 pb-12">
        {/* Section 1: Accurate Marathi & English Typing */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
            Speed & Accuracy
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Accurate Marathi Typing & English Typing for Legal, CIDCO & Official Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Marathi typing requires specialized legal terminology, precise grammar, and appropriate Devanagari fonts (Unicode Mangal, Shivaji, Kruti Dev). Our operators have over two decades of daily experience drafting administrative files, police complaints, court representations, and institutional petitions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Marathi Legal & Official Typing (मराठी टायपिंग)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Applications for CIDCO administrative officers, Nashik Municipal Corporation ward offices, collectorate appeals, consumer forum affidavits, and society letters.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                English Commercial & Formal Typing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Project reports, employment contracts, RTI applications, university representations, and formal corporate communication.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="touch-target px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call for Typing Inquiry</span>
            </a>
          </div>
        </section>

        {/* Section 2: Fast B&W Xerox, Colour Xerox & Bulk Photocopy */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
            Commercial Photocopy
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Fast Black & White Xerox, Colour Xerox & Bulk Photocopy in CIDCO Nashik
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Equipped with modern commercial heavy-duty digital multi-function copiers, we ensure high clarity and neat output whether you need a single Aadhaar card copy or 1,000 pages for a society AGM.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">High-Speed B&W Xerox</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Deep black toner on clean 75 GSM paper, ensuring crisp text and durable document archives.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">High-Resolution Colour Xerox</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Vibrant color output for layout plans, architect maps, birth certificates, and ID cards.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Bulk Institutional Discounts</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Discounted rates for schools, tuition classes, builders, and housing societies with spiral binding.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Send PDF on WhatsApp for Instant Printing */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Skip the Line
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Send PDF on WhatsApp for Instant Document Printing in Lekha Nagar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            We understand how valuable your time is. Instead of carrying USB pen drives that risk virus corruption or waiting in line, simply WhatsApp your PDF to our verified shop number.
          </p>

          <div className="bg-emerald-50/80 rounded-2xl p-5 border border-emerald-200 mb-6">
            <h3 className="text-sm font-bold text-emerald-900 mb-2">
              How the WhatsApp Print Service Works:
            </h3>
            <ol className="text-xs sm:text-sm text-emerald-950 space-y-2 list-decimal pl-5">
              <li>Open WhatsApp and send your PDF, photo, or doc to <strong>+91 81494 85192</strong>.</li>
              <li>Specify print requirements: e.g., <em>&quot;2 copies B/W back-to-back&quot;</em> or <em>&quot;1 copy Colour on bond paper&quot;</em>.</li>
              <li>Walk into our shop at Savata Nagar, Lekha Nagar and pick up your documents immediately.</li>
            </ol>
          </div>

          <a
            href={whatsappPrintUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Open WhatsApp to Send Documents Now</span>
          </a>
        </section>

        {/* Section 4: Document Scanning & Form Filling */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Digital Services
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3">
            Document Scanning, Formatting & Government Online Form Filling
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            From compressing documents for government recruitment portals to formatting legal text onto ₹100 or ₹500 non-judicial stamp papers, we handle digital workflows with precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">High-DPI Scanning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scan multiple pages into a single organized PDF with optimized file sizes for email or bank portal submission.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">Stamp Paper Formatting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proper header margins and footer padding so text prints cleanly below the official treasury stamp.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">Online Exam & Job Forms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Passport photo resizing, signature cropping, document uploads, and payment verification for government exams.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
            Common Inquiries
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-6">
            Frequently Asked Questions – Typing & Xerox Shop Lekha Nagar
          </h2>

          <div className="space-y-4">
            {BUSINESS_CONFIG.typingXeroxFaqs.map((faq, index) => (
              <div key={index} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-xs text-amber-800 font-semibold font-marathi mt-0.5">
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
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-xs transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800">{route.shortLabel}</div>
                  <div className="text-[11px] text-slate-500 font-marathi">{route.marathiTitle}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-700 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
