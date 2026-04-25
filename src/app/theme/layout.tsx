"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 overflow-x-hidden">
      <AnnouncementBar onVisibilityChange={setAnnouncementVisible} />
      <Navbar announcementVisible={announcementVisible} />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}
