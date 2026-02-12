import ServiceCard from "../components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      title: "Crypto Trading Partnership",
      description:
        "Secure and profitable avenue for crypto market participation backed by institutional safeguards.",
      points: [
        "Guaranteed Monthly Returns",
        "Bank-Secured Partnership",
        "Full Transparency & Control",
      ],
    },
    {
      title: "Salary-Based Loans",
      description:
        "Fast, convenient credit for employed professionals through trusted workplace channels.",
      points: [
        "HR-Facilitated Process",
        "25% Monthly Interest Rate",
        "Eligibility Verification",
      ],
    },
    {
      title: "Collateral-Backed Loans",
      description:
        "Immediate liquidity for urgent needs, secured against valuable assets.",
      points: [
        "Quick Capital for Business",
        "Secured for Your Protection",
        "Legally Binding Agreements",
      ],
    },
    {
      title: "Contract & Business Protection Loans",
      description:
        "Bridge financing and security for awarded contracts or confirmed business deals.",
      points: [
        "Pre-Financing for Winners",
        "Due Diligence Partnership",
        "15% Financing Rate",
      ],
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-red-600">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We offer a suite of tailored financial services to empower your
          growth and provide security.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </main>
  );
}
