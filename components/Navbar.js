import { useWallet } from '@/lib/WalletContext';

export default function Navbar() {
  const { walletAddress, connectWallet } = useWallet();

  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-900">
      <div className="font-bold text-lg">Finpilot</div>
      <div>
        {walletAddress ? (
          <span className="text-sm text-green-400">Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
        ) : (
          <button onClick={connectWallet} className="text-sm text-white bg-green-500 px-3 py-1 rounded">
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}
