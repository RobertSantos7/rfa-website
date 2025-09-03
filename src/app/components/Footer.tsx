import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo.png" alt="RFA" className="h-8 w-auto mb-3" />
          <p className="text-sm text-gray-600">
            Understand your numbers. Improve your your results.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Service</a></li>
            <li><a href="#pricing" className="hover:underline">Price</a></li>
            <li><Link href="/about" className="hover:underline">Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:underline">Privacy Notice</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@rfadatainsights.com" className="hover:underline">hello@rfadatainsights.com</a></li>
            <li><a href="https://wa.me/526461241104" target="_blank" className="hover:underline">WhatsApp: +52 646 124 1104</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RFA Data Insights. All rigths reserved.
      </div>
    </footer>
  );
}
