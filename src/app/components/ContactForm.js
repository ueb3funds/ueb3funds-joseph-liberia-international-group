export default function ContactForm() {
  return (
    <form className="bg-white shadow-xl rounded-2xl p-10 space-y-6">
      <div>
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Message</label>
        <textarea
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
        ></textarea>
      </div>

      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
        Send Message
      </button>
    </form>
  );
}
