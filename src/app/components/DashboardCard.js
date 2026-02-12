export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">
      <h3 className="text-gray-500 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-red-600">{value}</p>
    </div>
  );
}
