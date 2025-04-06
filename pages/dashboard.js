import PageLayout from "@/components/PageLayout";
import DashboardCard from "@/components/DashboardCard";

export default function Dashboard() {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">📊 Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <DashboardCard title="Wallet Balance" value="4.2 SOL" subtitle="Phantom Wallet" />
        <DashboardCard title="This Week's Spending" value="320 PLN" subtitle="+12% vs last week" />
        <DashboardCard title="Fuel Alert" value="🔺 Diesel +0.12 zł/l" subtitle="Better fuel up!" />
        <DashboardCard title="AI Insight" value="Consider reducing food delivery expenses" subtitle="Budget AI" />
        <DashboardCard title="Your $FIN" value="92 pts" subtitle="Claim at 100" />
      </div>
    </PageLayout>
  );
}
