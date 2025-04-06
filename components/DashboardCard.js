export default function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md border border-gray-800 hover:border-green-500 transition">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
      <p className="text-xs text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}
