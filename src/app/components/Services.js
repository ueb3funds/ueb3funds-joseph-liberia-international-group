import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Crypto Trading Partnership",
      description:
        "Secure and profitable crypto investment backed by institutional safeguards.",
      points: [
        "Bank-secured partnership",
        "Guaranteed monthly returns",
        "Transparent deposit process",
      ],
    },
    {
      title: "Salary-Based Loans",
      description:
        "Fast and convenient loans for employed professionals.",
      points: [
        "Government & private employees",
        "HR-facilitated processing",
        "Bank salary verification",
      ],
    },
    {
      title: "Collateral-Backed Loans",
      description:
        "Quick capital secured against valuable assets.",
      points: [
        "Asset-backed security",
        "Fast approval process",
        "Legally binding agreements",
      ],
    },
    {
      title: "Business Protection Loans",
      description:
        "Pre-financing for awarded contracts and business deals.",
      points: [
        "Contract-based funding",
        "Due diligence support",
        "Secure project financing",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Our Financial Services
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          We provide tailored financial solutions designed to help
          investors, professionals, and businesses grow securely.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              points={service.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
