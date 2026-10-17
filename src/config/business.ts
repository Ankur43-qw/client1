export interface ServiceItem {
  id: string;
  title: string;
  marathiTitle: string;
  category: "property" | "typing" | "affidavit";
  categoryName: string;
  route: string;
  shortDesc: string;
  longDesc: string;
  requiredDocs: string[];
  icon: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  marathiQuestion: string;
  answer: string;
}

export interface BusinessConfig {
  name: string;
  marathiSubtitle: string;
  tagline: string;
  experienceBadge: string;
  yearsOfExperience: number;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  whatsappMsgGeneral: string;
  whatsappMsgPrint: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    landmark: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  hours: string;
  workingDays: string;
  googleMapsShareUrl: string;
  googleMapsEmbedUrl: string;
  siteUrl: string;
  areasServed: string[];
  routes: {
    path: string;
    title: string;
    marathiTitle: string;
    shortLabel: string;
    desc: string;
  }[];
  services: ServiceItem[];
  homeFaqs: FaqItem[];
  cidcoFaqs: FaqItem[];
  kharediRentFaqs: FaqItem[];
  typingXeroxFaqs: FaqItem[];
  affidavitFaqs: FaqItem[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Master Multi Services",
  marathiSubtitle: "मास्टर मल्टी सर्व्हिसेस – प्रॉपर्टी डॉक्युमेंटेशन, खरेदीखत, टायपिंग आणि झेरॉक्स सेंटर, सिडको नाशिक",
  tagline: "Property Documentation | Government Services | Typing & Xerox",
  experienceBadge: "20+ Years of Property Documentation Experience",
  yearsOfExperience: 20,
  phoneDisplay: "+91 81494 85192",
  phoneTel: "+918149485192",
  whatsappNumber: "918149485192",
  whatsappMsgGeneral: "Hello Master Multi Services (Lekha Nagar, Nashik), I want to inquire about your documentation / typing services.",
  whatsappMsgPrint: "Hello Master Multi Services, I want to send a document PDF on WhatsApp for printing / Xerox at your Lekha Nagar shop.",
  address: {
    street: "Savata Nagar, CIDCO, Lekha Nagar",
    area: "Lekha Nagar, CIDCO",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422009",
    full: "Savata Nagar, CIDCO, Lekha Nagar, Nashik, Maharashtra 422009",
    landmark: "Near Savata Nagar Chowk, Lekha Nagar, CIDCO, New Nashik"
  },
  geo: {
    latitude: 19.9678,
    longitude: 73.7485
  },
  hours: "Monday to Saturday: 9:00 AM – 6:30 PM",
  workingDays: "Monday to Saturday (Sunday Closed)",
  googleMapsShareUrl: "https://maps.app.goo.gl/QgsJzh2fCRmpTFqq9",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Master+multi+services,+Savata+Nagar,+CIDCO,+Lekha+Nagar,+Nashik,+Maharashtra+422009&output=embed",
  siteUrl: "https://mastermultiservices.in",
  areasServed: [
    "Lekha Nagar",
    "Savata Nagar",
    "CIDCO Nashik",
    "Ambad",
    "Indira Nagar",
    "Pathardi Phata",
    "Rane Nagar",
    "Govind Nagar",
    "New Nashik",
    "Pawan Nagar",
    "Uttam Nagar",
    "Trimurti Chowk"
  ],
  routes: [
    {
      path: "/",
      title: "Master Multi Services – Home",
      marathiTitle: "मुख्य पृष्ठ",
      shortLabel: "Home",
      desc: "Complete Property Documentation, Typing & Xerox Services in Lekha Nagar, CIDCO Nashik."
    },
    {
      path: "/cidco-property-documentation-nashik",
      title: "CIDCO Property Documentation & Transfer Services in Nashik",
      marathiTitle: "सिडको प्रॉपर्टी डॉक्युमेंटेशन व हस्तांतरण",
      shortLabel: "CIDCO Property",
      desc: "CIDCO property transfer, lease deed drafting, NOC, and administrative documentation."
    },
    {
      path: "/kharedi-khat-rent-agreement-nashik",
      title: "Kharedi Khat (खरेदीखत), Rent Agreement & Property Registration",
      marathiTitle: "खरेदीखत व भाडेकरार",
      shortLabel: "Kharedi Khat & Rent",
      desc: "Drafting and registration for Kharedi Khat (Sale Deed), Registered Rent Agreements, and Sathekhat."
    },
    {
      path: "/typing-xerox-shop-lekha-nagar-nashik",
      title: "Marathi & English Typing, Xerox & Printing Shop",
      marathiTitle: "टायपिंग, झेरॉक्स व प्रिंटिंग",
      shortLabel: "Typing & Xerox",
      desc: "Speed Marathi/English typing, WhatsApp PDF document printing, colour & B/W Xerox, and scanning."
    },
    {
      path: "/affidavit-notary-services-nashik",
      title: "Notary Services, Affidavit Preparation & Application Drafting",
      marathiTitle: "प्रतिज्ञापत्र (Affidavit) व नोटरी",
      shortLabel: "Affidavit & Notary",
      desc: "Official affidavit drafting, notary attestation, indemnity bonds, and government applications."
    }
  ],
  services: [
    // Category 1: Property & Legal Documentation (9 services)
    {
      id: "lease-deed",
      title: "Lease Deed Services",
      marathiTitle: "लीज डीड व भाडेपट्टा दस्त",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/cidco-property-documentation-nashik",
      shortDesc: "Accurate drafting and procedural assistance for long-term CIDCO and private property lease deeds.",
      longDesc: "Complete legal drafting of long-term lease deed agreements for residential, commercial, and industrial plots in CIDCO Nashik and surrounding MIDC zones.",
      requiredDocs: ["Allotment Letter", "Identity Proof (Aadhaar/PAN)", "Previous Lease Deed Copy", "Property Tax Receipt"],
      icon: "FileCheck",
      popular: true
    },
    {
      id: "rent-agreement",
      title: "Registered & Notarized Rent Agreement",
      marathiTitle: "नोंदणीकृत व नोटरी भाडेकरार (Leave & License)",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/kharedi-khat-rent-agreement-nashik",
      shortDesc: "Government-compliant Leave & License agreements with biometric verification or quick notary stamping.",
      longDesc: "End-to-end drafting of Registered Rent Agreements (e-Registration) and Notarized Rent Agreements for tenants and landlords in Lekha Nagar, Savata Nagar, CIDCO, and Ambad.",
      requiredDocs: ["Owner Aadhaar & PAN Card", "Tenant Aadhaar & PAN Card", "Electricity Bill / Index II", "2 Witnesses with Aadhaar"],
      icon: "Home",
      popular: true
    },
    {
      id: "notary-services",
      title: "Notary Services",
      marathiTitle: "अधिकृत नोटरी साक्षांकन सेवा",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/affidavit-notary-services-nashik",
      shortDesc: "Official advocate notary attestation for affidavits, agreements, bonds, and declarations.",
      longDesc: "Quick advocate notary stamping and signature attestation for all legal documents, stamp paper declarations, educational forms, and address verifications.",
      requiredDocs: ["Original Photo ID Proof", "Document to be Notarized", "Stamp Paper (if required)"],
      icon: "ShieldCheck",
      popular: true
    },
    {
      id: "kharedi-khat",
      title: "Kharedi Khat (खरेदीखत / Sale Deed)",
      marathiTitle: "खरेदीखत व विक्री दस्त (Sale Deed Drafting)",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/kharedi-khat-rent-agreement-nashik",
      shortDesc: "Precision legal drafting of Kharedi Khat for flats, row houses, plots, and commercial shops.",
      longDesc: "Specialized drafting of Sale Deed (खरेदीखत) in pure legal Marathi and English adhering to Maharashtra Stamp Act and Sub-Registrar norms in Nashik.",
      requiredDocs: ["7/12 Extract / Property Card / CIDCO Allotment", "Sanctioned Plan", "Previous Chain Deeds / Index II", "Buyer & Seller KYC"],
      icon: "ScrollText",
      popular: true
    },
    {
      id: "cidco-transfer",
      title: "CIDCO Property Transfer",
      marathiTitle: "सिडको मिळकत हस्तांतरण अर्ज व प्रक्रिया",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/cidco-property-documentation-nashik",
      shortDesc: "Procedural file preparation for CIDCO leasehold property ownership transfer and documentation.",
      longDesc: "Complete guidance for CIDCO property transfer documentation, transfer applications, death-case succession transfer, and file submission in CIDCO Nashik office.",
      requiredDocs: ["CIDCO Final Order Copy", "Allotment Letter", "NOC from Society", "Death Certificate / Heirship (if applicable)"],
      icon: "Landmark",
      popular: true
    },
    {
      id: "sathekhat",
      title: "Property Agreement (साठेखत / Sathekhat)",
      marathiTitle: "साठेखत व इसार पावती (Agreement to Sale)",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/kharedi-khat-rent-agreement-nashik",
      shortDesc: "Legally binding agreement to sell safeguarding advance earnest money and payment terms.",
      longDesc: "Comprehensive drafting of Sathekhat (Agreement to Sell / Isar Pavti) detailing token money, installment schedules, possession dates, and default penalty clauses.",
      requiredDocs: ["Title Documents of Property", "Token Payment Proof (Cheque/UTR)", "Buyer & Seller Aadhaar/PAN"],
      icon: "FileSignature",
      popular: true
    },
    {
      id: "property-settlement",
      title: "Property Settlement (वाटपपत्र / हक्कसोडपत्र)",
      marathiTitle: "कौटुंबिक वाटपपत्र व हक्कसोडपत्र (Release Deed)",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/cidco-property-documentation-nashik",
      shortDesc: "Family partition deeds, release deeds (हक्कसोड), and mutual gift deed drafting.",
      longDesc: "Drafting of family settlement deeds, release deeds (हक्कसोडपत्र), and succession partition deeds for clean transfer among family members without future disputes.",
      requiredDocs: ["Pedhinama / Family Tree", "Property Documents", "All Family Members' Consent & ID Proofs"],
      icon: "UsersRound",
      popular: false
    },
    {
      id: "property-registration-help",
      title: "Property Registration Assistance",
      marathiTitle: "दस्त नोंदणी साहाय्य (Sub-Registrar Office Nashik)",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/kharedi-khat-rent-agreement-nashik",
      shortDesc: "Step-by-step assistance for token booking, challan generation, and Sub-Registrar appointment.",
      longDesc: "Filing online data entry (PDE), stamp duty and registration fee challan payments via GRAS portal, and appointment scheduling for registration at Nashik Sub-Registrar offices.",
      requiredDocs: ["Drafted Deed", "Stamp Duty Payment Challan", "Buyer & Seller Photos & Aadhaar", "Witness Details"],
      icon: "Stamp",
      popular: false
    },
    {
      id: "cidco-noc-docs",
      title: "CIDCO Documentation & NOC",
      marathiTitle: "सिडको ना-हरकत प्रमाणपत्र (NOC) कागदपत्रे",
      category: "property",
      categoryName: "Property & Legal Documentation",
      route: "/cidco-property-documentation-nashik",
      shortDesc: "Drafting applications for CIDCO NOC for mortgage loan, resale, and title clearance.",
      longDesc: "Preparation of application files, affidavits, indemnity bonds, and compliance documents for obtaining CIDCO NOC required by nationalized banks and housing finance companies.",
      requiredDocs: ["CIDCO Property Card", "Loan Sanction Letter (if bank loan)", "Allotment Letter Copy"],
      icon: "ShieldAlert",
      popular: false
    },

    // Category 2: Typing, Printing & Xerox Shop (8 services)
    {
      id: "marathi-english-typing",
      title: "Marathi & English Typing",
      marathiTitle: "जलद व अचूक मराठी आणि इंग्रजी टायपिंग",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "High-speed and error-free typing in Unicode Marathi (Shivaji/Mangal font) and professional English.",
      longDesc: "Specialized typing of government applications, court notices, agreements, letters, project reports, and legal notices with accurate Devanagari grammar and typography.",
      requiredDocs: ["Handwritten Draft or Audio/Photo of Text"],
      icon: "Keyboard",
      popular: true
    },
    {
      id: "whatsapp-printing",
      title: "Instant Document Printing (WhatsApp / Email)",
      marathiTitle: "व्हॉट्सॲपवरून तात्काळ डॉक्युमेंट प्रिंटिंग",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "Send your PDF, ticket, or form on WhatsApp (+91 81494 85192) and collect printout instantly.",
      longDesc: "Zero-wait print service for Lekha Nagar & CIDCO residents. Send PDF, Aadhaar card, hall ticket, or bio-data directly to our WhatsApp and collect laser print immediately.",
      requiredDocs: ["PDF or High-Resolution Image via WhatsApp"],
      icon: "Printer",
      popular: true
    },
    {
      id: "bw-xerox",
      title: "Black & White Xerox / Photocopy",
      marathiTitle: "काळा व पांढरा झेरॉक्स (High-Speed B&W)",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "Sharp, high-clarity black and white photocopies on heavy 75 GSM paper.",
      longDesc: "High-speed commercial Xerox for single sheets, ID cards (Aadhaar/PAN back-to-back), property 7/12 extracts, and document duplicate sets.",
      requiredDocs: ["Original Documents to copy"],
      icon: "Copy",
      popular: true
    },
    {
      id: "colour-xerox",
      title: "High-Quality Colour Xerox",
      marathiTitle: "उच्च दर्जाचा रंगीत झेरॉक्स (Colour Print & Copy)",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "Vibrant and true-to-life color photocopies for maps, certificates, drawings, and photos.",
      longDesc: "Precision color reproduction for CIDCO layout maps, building plans, property registry maps, school certificates, mark sheets, and colored official circulars.",
      requiredDocs: ["Original Color Document or PDF"],
      icon: "Sparkles",
      popular: false
    },
    {
      id: "doc-scanning",
      title: "Document Scanning (PDF / JPG)",
      marathiTitle: "डॉक्युमेंट स्कॅनिंग (Multi-Page PDF & JPG)",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "High-resolution 300/600 DPI scanning with multi-page PDF compilation and email/WhatsApp sharing.",
      longDesc: "High-speed flatbed & feeder scanning to create compact, clear PDF bundles of property file history, KYC documents, court files, and online portal uploads.",
      requiredDocs: ["Physical Documents to Scan"],
      icon: "ScanLine",
      popular: false
    },
    {
      id: "bulk-copies",
      title: "Bulk Document Copies & Spiral Binding",
      marathiTitle: "मोठ्या प्रमाणावर झेरॉक्स व स्पायरल बाइंडिंग",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "Economical bulk photocopying rates for schools, societies, builders, and college students.",
      longDesc: "Discounted bulk Xerox runs for housing society meeting booklets, CIDCO redevelopment files, study material, and project dossiers.",
      requiredDocs: ["Master Copy or Digital PDF"],
      icon: "Layers",
      popular: false
    },
    {
      id: "online-form-filling",
      title: "Online Form Filling",
      marathiTitle: "शासकीय व निमशासकीय ऑनलाईन फॉर्म भरणे",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "Error-free form filling for recruitment, government portals, scholarship, and exams.",
      longDesc: "Assistance with photo/signature resizing, certificate uploads, and error-free submission on Maharashtra government and central online recruitment portals.",
      requiredDocs: ["Applicant KYC, Marksheets & Passport Photo"],
      icon: "Laptop",
      popular: false
    },
    {
      id: "doc-formatting",
      title: "Professional Document Formatting",
      marathiTitle: "दस्तऐवज मांडणी व फॉरमॅटिंग (Formatting & Editing)",
      category: "typing",
      categoryName: "Typing, Printing & Xerox",
      route: "/typing-xerox-shop-lekha-nagar-nashik",
      shortDesc: "Layout alignment, margin setting, Marathi-English translation alignment, and font adjustments.",
      longDesc: "Expert legal formatting to ensure documents fit exactly onto non-judicial stamp papers (₹100/₹500) leaving proper margins for notary and registration stamps.",
      requiredDocs: ["Rough draft or file needing formatting"],
      icon: "FileText",
      popular: false
    },

    // Category 3: Affidavit & Government Drafting (6 services)
    {
      id: "official-application",
      title: "Official Application Drafting (CIDCO / NMC / Revenue)",
      marathiTitle: "शासकीय अर्ज मसुदा (सिडको, मनपा, महसूल कार्यालय)",
      category: "affidavit",
      categoryName: "Affidavit & Drafting",
      route: "/affidavit-notary-services-nashik",
      shortDesc: "Formal Marathi representation letters and petitions for Nashik Municipal Corporation and CIDCO.",
      longDesc: "Drafting official Marathi letters with precise administrative terminology for property tax corrections, water connection transfer, name change, and street issues.",
      requiredDocs: ["Consumer Number / Property Tax Bill / Matter Details"],
      icon: "Mail",
      popular: true
    },
    {
      id: "affidavit-prep",
      title: "Affidavit Preparation (प्रतिज्ञापत्र / Affidavit)",
      marathiTitle: "सर्व प्रकारचे प्रतिज्ञापत्र (Affidavit on Stamp Paper)",
      category: "affidavit",
      categoryName: "Affidavit & Drafting",
      route: "/affidavit-notary-services-nashik",
      shortDesc: "Ready-to-sign affidavits for name change, address proof, education gap, and income declaration.",
      longDesc: "Drafting and stamp printing of Affidavits in English and Marathi: Name Discrepancy (नाव बदलाचे शपथपत्र), Address Proof, Education Gap, Unmarried Declaration, and Lost Document Affidavits.",
      requiredDocs: ["Aadhaar Card", "Relevant proof (Leaving certificate / Gazette / Police complaint)"],
      icon: "FileCheck2",
      popular: true
    },
    {
      id: "custom-agreement",
      title: "Custom Agreement Drafting (करारनामा)",
      marathiTitle: "विविध करारनामे, संमतीपत्र व सामंजस्य करार",
      category: "affidavit",
      categoryName: "Affidavit & Drafting",
      route: "/affidavit-notary-services-nashik",
      shortDesc: "Tailored agreements for vehicle sale, partnership, shop license, and loan guarantees.",
      longDesc: "Clear and enforceable agreement drafting for two-wheeler/car sale agreements, personal loan acknowledgment, worker agreements, and private tenancy MoUs.",
      requiredDocs: ["Both Parties' KYC", "Terms & Conditions details"],
      icon: "Handshake",
      popular: false
    },
    {
      id: "legal-doc-prep",
      title: "Legal Document Preparation",
      marathiTitle: "कायदेशीर कागदपत्रे व नोटिसांची तयारी",
      category: "affidavit",
      categoryName: "Affidavit & Drafting",
      route: "/affidavit-notary-services-nashik",
      shortDesc: "Preparation of reply notices, declarations, boundary declarations, and power of attorney drafts.",
      longDesc: "Drafting General Power of Attorney (कुलमुखत्यारपत्र), Special Power of Attorney, public notices, and legal compliance declarations for local residents.",
      requiredDocs: ["Principal & Agent KYC", "Property / Subject details"],
      icon: "Briefcase",
      popular: false
    },
    {
      id: "general-doc-assist",
      title: "General Documentation Assistance",
      marathiTitle: "सर्व प्रकारच्या कागदपत्रांचे मार्गदर्शन व साहाय्य",
      category: "affidavit",
      categoryName: "Affidavit & Drafting",
      route: "/affidavit-notary-services-nashik",
      shortDesc: "One-stop consultation to check document completeness before government office visits.",
      longDesc: "Friendly, experienced consultation to verify document checklists before visiting CIDCO administrative office, Collector Office Nashik, or NMC Ward office.",
      requiredDocs: ["All available document photocopies"],
      icon: "HelpCircle",
      popular: false
    },
    {
      id: "indemnity-bond",
      title: "Indemnity Bond & Undertaking Drafting (हमीपत्र)",
      marathiTitle: "हमीपत्र व बंधपत्र (Indemnity Bond & Undertaking)",
      category: "affidavit",
      categoryName: "Affidavit & Drafting",
      route: "/affidavit-notary-services-nashik",
      shortDesc: "Specialized indemnity bonds required by CIDCO, MSEDCL, and banks for duplicate documents.",
      longDesc: "Standard format preparation of Indemnity Bonds on requisite non-judicial stamp papers for missing duplicate allotment letters, electricity meter transfer, and bank claim settlements.",
      requiredDocs: ["Bank / Department format requirements", "Applicant Aadhaar & PAN", "2 Guarantors KYC"],
      icon: "FileLock",
      popular: false
    }
  ],
  homeFaqs: [
    {
      question: "Where is Master Multi Services located in Nashik?",
      marathiQuestion: "मास्टर मल्टी सर्व्हिसेसचे दुकान नाशिकमध्ये कुठे आहे?",
      answer: "We are located at Savata Nagar, CIDCO, Lekha Nagar, Nashik, Maharashtra 422009. Our shop is conveniently situated near Savata Nagar Chowk, easily accessible from Lekha Nagar, CIDCO, Ambad, and New Nashik."
    },
    {
      question: "Can I send documents on WhatsApp for instant printout without waiting in line?",
      marathiQuestion: "मी गर्दी टाळण्यासाठी व्हॉट्सॲपवर पीडीएफ पाठवून थेट प्रिंट घेऊ शकतो का?",
      answer: "Yes! Simply send your PDF, Aadhaar card, hall ticket, or document photo to our WhatsApp (+91 81494 85192). We will keep your printout ready for immediate pickup when you arrive at our Lekha Nagar shop."
    },
    {
      question: "What types of property documentation services do you provide in CIDCO Nashik?",
      marathiQuestion: "सिडको नाशिकमध्ये तुम्ही कोणत्या प्रॉपर्टी डॉक्युमेंटेशन सेवा देता?",
      answer: "With 20+ years of local experience, we specialize in Kharedi Khat (खरेदीखत / Sale Deed), CIDCO property transfer documentation, Registered & Notarized Rent Agreements (भाडेकरार), Sathekhat (साठेखत), Lease Deeds, Family Partition (वाटपपत्र), and CIDCO NOC files."
    },
    {
      question: "How do I prepare an Affidavit (प्रतिज्ञापत्र) or Notary?",
      marathiQuestion: "प्रतिज्ञापत्र किंवा नोटरी करण्याची प्रक्रिया काय आहे?",
      answer: "Standard affidavits (Name change, Address proof, Gap certificate, Income declaration) and advocate notary attestations are prepared on a walk-in basis at our shop."
    },
    {
      question: "What are your shop working hours in Lekha Nagar, CIDCO?",
      marathiQuestion: "तुमच्या दुकानाची वेळ काय आहे?",
      answer: "We are open Monday to Saturday from 9:00 AM to 6:30 PM. We are closed on Sundays. For inquiries or advance document review, you can contact us anytime via WhatsApp."
    }
  ],
  cidcoFaqs: [
    {
      question: "What is the process for CIDCO Property Transfer in Nashik?",
      marathiQuestion: "नाशिक सिडको प्रॉपर्टी ट्रान्सफरची प्रक्रिया काय आहे?",
      answer: "The process requires verifying the original CIDCO allotment letter, obtaining a society NOC (if applicable), drafting the transfer application along with indemnity bonds and affidavits, and paying the requisite CIDCO administrative fees. We prepare the complete documentation dossier."
    },
    {
      question: "What documents are required for a CIDCO Lease Deed?",
      marathiQuestion: "सिडको लीज डीडसाठी कोणती कागदपत्रे लागतात?",
      answer: "You need the original allotment letter, possession letter, payment receipts, Aadhaar card, PAN card, and the latest property tax receipt. We handle drafting and procedural submission guidance."
    },
    {
      question: "Do you help with transfer in case of death of original CIDCO plot/flat owner?",
      marathiQuestion: "मूळ मालकाच्या मृत्यूनंतर वारसाहक्काने सिडको ट्रान्सफरसाठी मदत मिळते का?",
      answer: "Yes, we prepare the heirship affidavit (वारसदार प्रतिज्ञापत्र), family consent letters (संमतीपत्र / हक्कसोडपत्र), indemnity bonds, and the complete succession transfer file for CIDCO office submission."
    },
    {
      question: "How do I get a CIDCO NOC for a bank home loan?",
      marathiQuestion: "होम लोनसाठी सिडको एनओसी कशी मिळवावी?",
      answer: "Banks require a Mortgage NOC from CIDCO. We draft the formal representation letter, prepare the necessary indemnity formats, and collate all required title documents so CIDCO can issue the clearance without objections."
    }
  ],
  kharediRentFaqs: [
    {
      question: "What is the difference between Registered Rent Agreement and Notarized Rent Agreement?",
      marathiQuestion: "नोंदणीकृत भाडेकरार आणि नोटरी भाडेकरार यात काय फरक आहे?",
      answer: "A Registered Rent Agreement (नोंदणीकृत भाडेकरार) is legally binding under Maharashtra Rent Control Act, requires government stamp duty and biometric verification, and is mandatory for passport and police verification. A Notarized Rent Agreement is executed on stamp paper and attested by a notary public, typically used for local temporary address proof."
    },
    {
      question: "What is a Kharedi Khat (खरेदीखत / Sale Deed)?",
      marathiQuestion: "खरेदीखत म्हणजे काय आणि ते कधी करावे लागते?",
      answer: "Kharedi Khat is the final legal conveyance deed transferring ownership of an immovable property (flat, shop, plot, or agricultural land) from the seller to the buyer. It must be registered at the Sub-Registrar office with applicable stamp duty."
    },
    {
      question: "What is Sathekhat (साठेखत / Agreement to Sale)?",
      marathiQuestion: "साठेखत (इसार पावती) म्हणजे काय?",
      answer: "Sathekhat is the preliminary agreement executed when paying advance/token earnest money for property. It specifies payment timelines, balance consideration, possession date, and legal conditions before the final Kharedi Khat is registered."
    },
    {
      question: "Can rent agreement biometric verification be done in CIDCO Nashik?",
      marathiQuestion: "सिडको नाशिकमध्ये भाडेकराराची बायोमेट्रिक नोंदणी होते का?",
      answer: "Yes, we arrange prompt registered rent agreements with biometric Aadhaar verification for both owner and tenant."
    }
  ],
  typingXeroxFaqs: [
    {
      question: "Can you type documents in pure Marathi with correct grammar and font?",
      marathiQuestion: "तुम्ही शुद्ध मराठीमध्ये योग्य फॉन्टसह अचूक टायपिंग करता का?",
      answer: "Yes, we specialize in high-speed, 100% grammatically correct Marathi typing using Unicode (Mangal font) as well as traditional font styles required for court, government, and CIDCO applications."
    },
    {
      question: "What is the WhatsApp PDF printing process at your Lekha Nagar shop?",
      marathiQuestion: "व्हॉट्सॲपवरून प्रिंटिंग करण्याची पद्धत काय आहे?",
      answer: "Simply WhatsApp your file to +91 81494 85192 with your name and print preference (Colour or B/W, single or double sided). You can walk in and collect it immediately without waiting."
    },
    {
      question: "Do you provide bulk photocopying services for housing societies or institutions?",
      marathiQuestion: "सोसायटी किंवा संस्थांसाठी मोठ्या प्रमाणात झेरॉक्सवर सवलत मिळते का?",
      answer: "Yes, we offer special discounted rates for bulk photocopying, booklet printing, and spiral binding for housing societies, builders, and educational institutions."
    },
    {
      question: "Can you scan large multi-page property files into a single PDF?",
      marathiQuestion: "जुनी मोठी प्रॉपर्टी कागदपत्रे स्कॅन करून एकाच पीडीएफमध्ये करून मिळतील का?",
      answer: "Yes, we have high-speed document scanners that create high-clarity, lightweight, multi-page PDF files ideal for bank loan submissions or email archiving."
    }
  ],
  affidavitFaqs: [
    {
      question: "What types of Affidavits (प्रतिज्ञापत्र) can be drafted at your shop?",
      marathiQuestion: "तुमच्याकडे कोणकोणत्या प्रकारची प्रतिज्ञापत्रे तयार केली जातात?",
      answer: "We draft affidavits for Name Change (नाव बदल / एकच व्यक्ती असल्याबाबत), Address Proof, Education Gap, Income Declaration, Minor to Major, Duplicate Marksheet / RC Book, Unmarried Status, and Ration Card corrections."
    },
    {
      question: "Is advocate notary attestation available directly at your shop?",
      marathiQuestion: "तुमच्या दुकानात नोटरी साक्षांकन थेट उपलब्ध आहे का?",
      answer: "Yes, we assist with immediate advocate notary stamping and attestation on all valid stamp papers and government forms."
    },
    {
      question: "Can you draft official applications for Nashik Municipal Corporation (NMC) or CIDCO?",
      marathiQuestion: "मनपा किंवा सिडकोसाठी अधिकृत मराठी अर्ज लिहून मिळतो का?",
      answer: "Yes, we draft formal administrative applications in standard Marathi formatting for property tax name change, water meter issues, building permissions, and complaint representations."
    },
    {
      question: "Do you supply the required ₹100 or ₹500 non-judicial stamp papers?",
      marathiQuestion: "१०० किंवा ५०० रुपयांचे स्टॅम्प पेपर मिळण्यास मदत होते का?",
      answer: "Yes, we guide you on the exact stamp duty required for your specific agreement or affidavit and arrange formatting to print precisely on stamp paper."
    }
  ]
};
