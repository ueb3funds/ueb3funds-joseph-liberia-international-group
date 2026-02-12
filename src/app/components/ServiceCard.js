export default function ServiceCard({ title, description, points = [] }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-red-600">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {points.length > 0 && (
        <ul className="space-y-2 text-gray-500 text-sm">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✔</span>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
