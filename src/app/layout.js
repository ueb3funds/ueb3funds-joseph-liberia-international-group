import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "joseph-liberia-international-group",
  description: "Secure financial services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}</body>
        <Footer />
    </html>
  );
}
