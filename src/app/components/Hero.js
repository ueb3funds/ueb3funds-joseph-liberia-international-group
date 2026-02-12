export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Secure Financial Solutions for Global Investors
        </h1>
        <p className="text-lg mb-8">
          Tailored financial services designed to empower growth and provide security.
        </p>

        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
