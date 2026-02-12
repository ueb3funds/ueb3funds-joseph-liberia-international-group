export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xl font-bold mb-2">joseph-liberia-international-group</h2>
        <p className="text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
