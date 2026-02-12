export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-red-600">
            Trusted Financial Partner
          </h2>

          <p className="text-gray-700 mb-6">
            We provide secure, transparent, and high-quality financial
            services tailored to individuals, professionals, and
            businesses. Our goal is to empower growth through
            structured investment and lending solutions.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-red-600">10+</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">5K+</h3>
              <p className="text-gray-500">Active Investors</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">$20M</h3>
              <p className="text-gray-500">Funds Managed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">98%</h3>
              <p className="text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-red-600 rounded-3xl p-12 text-white shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="space-y-4">
            <li>✔ Secure and transparent processes</li>
            <li>✔ Fast approvals and disbursements</li>
            <li>✔ Institutional-level safeguards</li>
            <li>✔ Dedicated client support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
