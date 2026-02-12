import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-red-600">
          About Joseph-Liberia-International-Group
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Delivering secure financial solutions designed for investors,
          professionals, and businesses worldwide.
        </p>
      </div>

      {/* About Section */}
      <AboutSection />
    </main>
  );
}
