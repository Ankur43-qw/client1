"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Shield, FileText, ChevronRight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold shadow-sm shadow-blue-200 shrink-0">
              <span className="text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                {BUSINESS_CONFIG.name}
              </span>
              <span className="text-xs text-blue-700 font-semibold flex items-center gap-1 font-marathi">
                <Shield className="w-3 h-3 text-amber-500 fill-amber-500 inline" />
                सिडको • लेखा नगर • नाशिक
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {BUSINESS_CONFIG.routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {route.shortLabel}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Call button & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="touch-target px-3.5 sm:px-4 py-2 bg-blue-700 hover:bg-blue-800 active:scale-95 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5 transition-all"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">Call Now: </span>
              <span className="text-xs sm:text-sm font-semibold">{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="touch-target lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-2">
            Quick Page Switcher
          </div>
          <div className="space-y-1">
            {BUSINESS_CONFIG.routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-bold border border-blue-200"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className={`w-4 h-4 ${isActive ? "text-blue-700" : "text-slate-400"}`} />
                    <div>
                      <div className="text-sm font-semibold leading-tight">{route.shortLabel}</div>
                      <div className="text-xs text-slate-500 font-marathi mt-0.5">{route.marathiTitle}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Quick Info Strip */}
          <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-slate-600 font-medium">
              📍 <span className="font-semibold text-slate-800">Shop Address:</span> Savata Nagar, CIDCO, Lekha Nagar, Nashik
            </p>
            <p className="text-xs text-slate-500 mt-1">
              ⏰ <span className="font-semibold text-slate-700">Hours:</span> {BUSINESS_CONFIG.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
