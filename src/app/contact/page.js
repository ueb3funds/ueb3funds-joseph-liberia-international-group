
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
  

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">
            Contact Us
          </h1>

          <ContactForm />
        </div>
      </section>

    </>
  );
}
