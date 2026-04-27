"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Download,
  Key,
  User,
  LogOut,
  CheckCircle,
  ExternalLink,
  Wrench,
  ImageIcon,
  Store,
  Lightbulb,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "download" | "setup" | "license" | "images" | "shopify" | "tips" | "account";

const sidebarItems: { label: string; icon: typeof Download; tab: Tab }[] = [
  { label: "Download Theme", icon: Download, tab: "download" },
  { label: "Setup Guide", icon: Wrench, tab: "setup" },
  { label: "License Keys", icon: Key, tab: "license" },
  { label: "Image Maker", icon: ImageIcon, tab: "images" },
  { label: "Shopify Settings", icon: Store, tab: "shopify" },
  { label: "Tips", icon: Lightbulb, tab: "tips" },
  { label: "Account", icon: User, tab: "account" },
];

export default function UserPortal() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("download");
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("kenso-user") !== "true") {
      router.push("/theme/login");
    } else {
      setAuthed(true);
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("kenso-user");
    router.push("/theme/login");
  }

  if (!authed) return null;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="px-6 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-bold">Kenso Portal</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">Pro Plan</div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                  activeTab === item.tab
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="px-3 pb-4 space-y-1">
          <Link
            href="/theme"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Back to site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === "download" && <DownloadTab />}
        {activeTab === "setup" && <SetupTab />}
        {activeTab === "license" && <LicenseTab />}
        {activeTab === "images" && <ImageMakerTab />}
        {activeTab === "shopify" && <ShopifyTab />}
        {activeTab === "tips" && <TipsTab />}
        {activeTab === "account" && <AccountTab />}
      </main>
    </div>
  );
}

function DownloadTab() {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Download Theme</h2>
      <p className="text-sm text-slate-500 mb-6">Get the latest version of Kenso for your store</p>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Kenso v3.0.2</h3>
            <p className="text-sm text-slate-400">Released April 10, 2026 &middot; 2.4 MB</p>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">Latest</span>
        </div>
        <ul className="text-sm text-slate-500 space-y-1.5 mb-5">
          <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Complete theme redesign with V3 engine</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> New AI Chatbot & Store Customizer</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Performance improvements & bug fixes</li>
        </ul>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
          <Download className="w-4 h-4" />
          Download .zip
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3">Previous Versions</h3>
        <div className="space-y-3">
          {[
            { version: "v2.8.1", date: "Mar 15, 2026", size: "2.1 MB" },
            { version: "v2.7.0", date: "Feb 20, 2026", size: "2.0 MB" },
          ].map((v) => (
            <div key={v.version} className="flex items-center justify-between py-2">
              <div>
                <span className="text-sm font-medium text-slate-700">{v.version}</span>
                <span className="text-xs text-slate-400 ml-2">{v.date} &middot; {v.size}</span>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-500 font-medium">Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SetupTab() {
  const steps = [
    { title: "Download the theme", desc: "Get the latest .zip file from the Download tab" },
    { title: "Upload to Shopify", desc: "Go to Online Store → Themes → Add theme → Upload zip" },
    { title: "Enter your license key", desc: "Open Theme Settings and paste your license key" },
    { title: "Configure your store", desc: "Use the Shopify editor to customize colors, text, and products" },
    { title: "Add your products", desc: "Create your vendor list products and set prices" },
    { title: "Publish", desc: "Set Kenso as your active theme and go live" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Setup Guide</h2>
      <p className="text-sm text-slate-500 mb-6">Get your store live in under 15 minutes</p>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-2" />}
              </div>
              <div className="pt-1">
                <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LicenseTab() {
  const licenses = [
    { key: "KNS-PRO-8F2A1", domain: "mystore.myshopify.com", active: true },
    { key: "KNS-PRO-8F2A2", domain: "secondstore.myshopify.com", active: true },
    { key: "KNS-PRO-8F2A3", domain: null, active: false },
    { key: "KNS-PRO-8F2A4", domain: null, active: false },
    { key: "KNS-PRO-8F2A5", domain: null, active: false },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">License Keys</h2>
      <p className="text-sm text-slate-500 mb-6">Pro plan — 5 store licenses</p>

      <div className="space-y-3">
        {licenses.map((license) => (
          <div key={license.key} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle className={cn("w-5 h-5", license.active ? "text-emerald-500" : "text-slate-300")} />
              <div>
                <code className="text-sm font-bold text-slate-900">{license.key}</code>
                <div className="text-xs text-slate-400 mt-0.5">
                  {license.domain ?? "Not activated — paste this key in your Shopify theme settings"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={cn("text-xs font-medium", license.active ? "text-emerald-600" : "text-slate-400")}>
                {license.active ? "Active" : "Available"}
              </span>
              {license.active && (
                <button className="text-xs text-red-500 hover:text-red-600 font-medium">Deactivate</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageMakerTab() {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Image Maker</h2>
      <p className="text-sm text-slate-500 mb-6">Generate product images for your store</p>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Product name</label>
          <input
            type="text"
            placeholder="e.g. Cologne Vendor List"
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Style</label>
          <div className="grid grid-cols-3 gap-3">
            {["Minimal", "Bold", "Premium"].map((style) => (
              <button
                key={style}
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
          <ImageIcon className="w-4 h-4" />
          Generate Image
        </button>
      </div>

      <div className="mt-6 bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3">Recent Images</h3>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
              <span className="text-xs text-slate-400">No images yet</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopifyTab() {
  const settings = [
    { label: "Store Name", value: "My Resell Store", type: "text" },
    { label: "Primary Color", value: "#3b82f6", type: "color" },
    { label: "Announcement Text", value: "Free shipping on all orders!", type: "text" },
    { label: "Currency", value: "USD", type: "select" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Shopify Settings</h2>
      <p className="text-sm text-slate-500 mb-6">Quick reference for your theme settings</p>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <h3 className="text-sm font-bold text-slate-900 mb-4">Theme Settings Overview</h3>
        <div className="space-y-4">
          {settings.map((s) => (
            <div key={s.label} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
              <span className="text-sm font-medium text-slate-700">{s.label}</span>
              {s.type === "color" ? (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md border border-slate-200" style={{ backgroundColor: s.value }} />
                  <span className="text-sm text-slate-500">{s.value}</span>
                </div>
              ) : (
                <span className="text-sm text-slate-500">{s.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-2">Need help configuring?</h3>
        <p className="text-sm text-slate-500 mb-4">Check the documentation for a full walkthrough of every setting.</p>
        <Link href="/theme/docs" className="text-sm text-blue-600 hover:text-blue-500 font-medium inline-flex items-center gap-1.5">
          Open docs <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

function TipsTab() {
  const tips = [
    { title: "Use high-quality product images", desc: "Clear, professional images increase trust and conversions. Use the Image Maker to generate them." },
    { title: "Set up urgency elements", desc: "Enable countdown timers and stock counters in Theme Settings to create FOMO." },
    { title: "Add social proof", desc: "Turn on purchase notification popups and add photo reviews to build credibility." },
    { title: "Write clear product descriptions", desc: "Explain exactly what the customer gets. List the number of vendors, categories, and any bonuses." },
    { title: "Price competitively", desc: "Research what other resellers charge. Bundle products for higher AOV." },
    { title: "Enable the AI chatbot", desc: "The built-in chatbot answers customer questions 24/7 and helps close sales while you sleep." },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Tips for Success</h2>
      <p className="text-sm text-slate-500 mb-6">Get the most out of your Kenso theme</p>

      <div className="space-y-3">
        {tips.map((tip, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{tip.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{tip.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccountTab() {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Account</h2>
      <p className="text-sm text-slate-500 mb-6">Your account details</p>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">Demo User</div>
            <div className="text-sm text-slate-500">demo@kenso.com</div>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Plan", value: "Kenso Pro" },
            { label: "Member since", value: "April 2026" },
            { label: "Store licenses", value: "2 of 5 used" },
            { label: "Theme version", value: "v3.0.2 (latest)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
              <span className="text-sm text-slate-500">{item.label}</span>
              <span className="text-sm font-medium text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-sm font-bold text-slate-900 mb-2">Need help?</h3>
        <p className="text-sm text-slate-500 mb-4">Contact our support team for any questions about your account or license.</p>
        <Link href="/theme/support" className="text-sm text-blue-600 hover:text-blue-500 font-medium inline-flex items-center gap-1.5">
          Contact support <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
