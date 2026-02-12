import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">
          Joseph-Liberia-International-Group
        </h1>

        <div className="space-x-6 font-medium">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <Link href="/about" className="hover:text-red-600">About</Link>
          <Link href="/services" className="hover:text-red-600">services</Link>
          <Link href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
           Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
