export default function Navbar() {
  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-900">
      <div className="font-bold text-lg">Finpilot</div>
      <div className="text-sm text-gray-400">Wallet: Not connected</div>
    </div>
  );
}
