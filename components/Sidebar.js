import Link from 'next/link';
const links = [
  { href: "/", label: "Dashboard" },
  { href: "/wallet", label: "Wallet" },
  { href: "/budget", label: "Budget" },
  { href: "/insights", label: "Insights" }
];
export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 p-4">
      <div className="text-xl font-semibold mb-6">📊 Finpilot</div>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block text-gray-300 hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
