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
} from "lucide-react";

export default function UserPortal() {
  const router = useRouter();
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
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <span className="text-sm font-bold text-slate-900">Kenso Portal</span>
          <div className="flex items-center gap-4">
            <Link href="/theme" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Back to site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Welcome back, Demo User</h1>
          <p className="text-sm text-slate-500">Manage your theme license and downloads</p>
        </div>

        {/* Account info */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900">demo@kenso.com</div>
              <div className="text-xs text-slate-400">Member since April 2026 &middot; Kenso Pro</div>
            </div>
          </div>
        </div>

        {/* Download theme */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
              <Download className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-slate-900 mb-1">Download Kenso Theme</h2>
              <p className="text-sm text-slate-500 mb-4">
                Download the latest version of Kenso (v3.0.2). Upload the .zip to your Shopify admin.
              </p>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                  <Download className="w-4 h-4" />
                  Download .zip
                </button>
                <Link
                  href="/theme/docs"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Setup guide
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* License keys */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
              <Key className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">License Keys</h2>
              <p className="text-xs text-slate-400">Pro plan — 5 store licenses</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { key: "KNS-PRO-8F2A1", domain: "mystore.myshopify.com", active: true },
              { key: "KNS-PRO-8F2A2", domain: "secondstore.myshopify.com", active: true },
              { key: "KNS-PRO-8F2A3", domain: null, active: false },
              { key: "KNS-PRO-8F2A4", domain: null, active: false },
              { key: "KNS-PRO-8F2A5", domain: null, active: false },
            ].map((license) => (
              <div
                key={license.key}
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className={`w-4 h-4 ${license.active ? "text-emerald-500" : "text-slate-300"}`} />
                  <div>
                    <code className="text-sm font-medium text-slate-700">{license.key}</code>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {license.domain ?? "Not activated"}
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-medium ${license.active ? "text-emerald-600" : "text-slate-400"}`}>
                  {license.active ? "Active" : "Available"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
