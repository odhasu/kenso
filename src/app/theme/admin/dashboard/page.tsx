"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  DollarSign,
  Key,
  ShoppingCart,
  FileText,
  LogOut,
  LayoutDashboard,
  Trash2,
  Pencil,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Demo data
const statsData = [
  { label: "Total Revenue", value: "$24,830", icon: DollarSign, change: "+12%" },
  { label: "Total Users", value: "142", icon: Users, change: "+8" },
  { label: "Active Licenses", value: "156", icon: Key, change: "+5" },
  { label: "Orders This Month", value: "23", icon: ShoppingCart, change: "+3" },
];

const demoUsers = [
  { id: 1, name: "Marcus Johnson", email: "marcus@gmail.com", plan: "Pro", key: "KNS-PRO-8F2A1", domain: "marcusresells.myshopify.com", status: "active" },
  { id: 2, name: "Sarah Williams", email: "sarah.w@gmail.com", plan: "Lite", key: "KNS-LTE-3B7C9", domain: "sarahflips.myshopify.com", status: "active" },
  { id: 3, name: "Tyler Chen", email: "tyler.chen@outlook.com", plan: "Pro", key: "KNS-PRO-5D4E2", domain: "tylerdeals.myshopify.com", status: "active" },
  { id: 4, name: "Jessica Lopez", email: "jess.lopez@gmail.com", plan: "Lite", key: "KNS-LTE-1A8F6", domain: "jessresell.myshopify.com", status: "expired" },
  { id: 5, name: "David Kim", email: "dkim99@gmail.com", plan: "Pro", key: "KNS-PRO-9C3G7", domain: "davidvendors.myshopify.com", status: "active" },
  { id: 6, name: "Emily Rodriguez", email: "emily.r@yahoo.com", plan: "Lite", key: "KNS-LTE-7H2B4", domain: "emilyshop.myshopify.com", status: "active" },
];

const demoOrders = [
  { id: "ORD-1247", date: "Apr 26, 2026", customer: "Marcus Johnson", plan: "Pro", amount: "$379", status: "completed" },
  { id: "ORD-1246", date: "Apr 25, 2026", customer: "Emily Rodriguez", plan: "Lite", amount: "$179", status: "completed" },
  { id: "ORD-1245", date: "Apr 24, 2026", customer: "Tyler Chen", plan: "Pro", amount: "$379", status: "completed" },
  { id: "ORD-1244", date: "Apr 23, 2026", customer: "Sarah Williams", plan: "Lite", amount: "$179", status: "completed" },
  { id: "ORD-1243", date: "Apr 22, 2026", customer: "David Kim", plan: "Pro", amount: "$379", status: "refunded" },
  { id: "ORD-1242", date: "Apr 20, 2026", customer: "Jessica Lopez", plan: "Lite", amount: "$179", status: "completed" },
];

const demoArticles = [
  { id: 1, title: "Kenso V3 Is Here — Rebuilt From the Ground Up", date: "Apr 10, 2026", type: "news" },
  { id: 2, title: "Scam Alert: Unauthorized Resellers Are Overcharging You", date: "Apr 1, 2026", type: "news" },
  { id: 3, title: "Introducing the Kenso News Page", date: "Mar 23, 2026", type: "news" },
  { id: 4, title: "AI Customizer Upgraded to Opus 4.6", date: "Mar 20, 2026", type: "news" },
];

const demoFAQs = [
  { id: 1, question: "What is Kenso and who is it for?" },
  { id: 2, question: "Will my store get banned on Shopify?" },
  { id: 3, question: "What's the difference between Lite and Pro?" },
  { id: 4, question: "What happens after I buy?" },
  { id: 5, question: "How long does it take to set up?" },
];

type Tab = "users" | "orders" | "content";

const sidebarItems: { label: string; icon: typeof Users; tab: Tab }[] = [
  { label: "Users & Licenses", icon: Users, tab: "users" },
  { label: "Revenue & Orders", icon: DollarSign, tab: "orders" },
  { label: "Content", icon: FileText, tab: "content" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("users");
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("kenso-admin") !== "true") {
      router.push("/theme/admin");
    } else {
      setAuthed(true);
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("kenso-admin");
    router.push("/theme/admin");
  }

  if (!authed) return null;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="px-6 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-bold">Kenso Admin</span>
          </div>
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

        <div className="px-3 pb-4">
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
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-500">{stat.label}</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                  <span className="text-xs font-medium text-emerald-600">{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tab content */}
        {activeTab === "users" && <UsersTab />}
        {activeTab === "orders" && <OrdersTab />}
        {activeTab === "content" && <ContentTab />}
      </main>
    </div>
  );
}

function UsersTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Users & Licenses</h2>
        <span className="text-sm text-slate-400">{demoUsers.length} total users</span>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Plan</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">License Key</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Domain</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {demoUsers.map((user) => (
                <tr key={user.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-4">
                    <div>
                      <div className="text-sm font-medium text-slate-900">{user.name}</div>
                      <div className="text-xs text-slate-400">{user.email}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={cn(
                      "inline-flex px-2 py-0.5 rounded-full text-xs font-bold",
                      user.plan === "Pro" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"
                    )}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{user.key}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-500">{user.domain}</td>
                  <td className="py-3 px-4">
                    <span className={cn(
                      "inline-flex items-center gap-1 text-xs font-medium",
                      user.status === "active" ? "text-emerald-600" : "text-red-500"
                    )}>
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        user.status === "active" ? "bg-emerald-500" : "bg-red-400"
                      )} />
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OrdersTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Revenue & Orders</h2>
      </div>

      {/* Revenue summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <span className="text-sm text-slate-500">Lite Revenue</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">$8,950</div>
          <span className="text-xs text-slate-400">50 orders</span>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <span className="text-sm text-slate-500">Pro Revenue</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">$15,880</div>
          <span className="text-xs text-slate-400">42 orders</span>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <span className="text-sm text-slate-500">This Month</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">$4,210</div>
          <span className="text-xs text-emerald-600 font-medium">+18% vs last month</span>
        </div>
      </div>

      {/* Orders table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Plan</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {demoOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-4">
                    <code className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{order.id}</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-500">{order.date}</td>
                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{order.customer}</td>
                  <td className="py-3 px-4">
                    <span className={cn(
                      "inline-flex px-2 py-0.5 rounded-full text-xs font-bold",
                      order.plan === "Pro" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"
                    )}>
                      {order.plan}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{order.amount}</td>
                  <td className="py-3 px-4">
                    <span className={cn(
                      "inline-flex px-2 py-0.5 rounded-full text-xs font-medium",
                      order.status === "completed" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
                    )}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ContentTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Content Management</h2>
      </div>

      {/* News articles */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">News Articles</h3>
        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
          {demoArticles.map((article) => (
            <div key={article.id} className="flex items-center justify-between px-5 py-4 hover:bg-slate-50/50">
              <div>
                <div className="text-sm font-medium text-slate-900">{article.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{article.date}</div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors">
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">FAQ Items</h3>
        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
          {demoFAQs.map((faq) => (
            <div key={faq.id} className="flex items-center justify-between px-5 py-4 hover:bg-slate-50/50">
              <div className="text-sm font-medium text-slate-900">{faq.question}</div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors">
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
