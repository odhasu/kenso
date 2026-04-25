import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 overflow-x-hidden">
      <Navbar announcementVisible={false} />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
