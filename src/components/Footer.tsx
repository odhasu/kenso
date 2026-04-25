import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          &copy; 2026 Shand Enterprises LLC
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/theme/support" className="hover:text-slate-600 transition-colors">
            Support
          </Link>
          <Link href="/theme/docs" className="hover:text-slate-600 transition-colors">
            Docs
          </Link>
          <Link href="/theme/privacy" className="hover:text-slate-600 transition-colors">
            Privacy
          </Link>
          <Link href="/theme/terms" className="hover:text-slate-600 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
