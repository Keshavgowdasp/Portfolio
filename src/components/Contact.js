export default function Contacts() {
  return (
    <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
      <h2 className="text-5xl font-bold text-red-500 text-center">
        Contacts
      </h2>
      <div className="flex gap-5 justify-center my-10">
        {/* Email Button */}
        <a
          rel="noreferrer"
          target="_blank"
          className="relative px-3 py-2 bg-red-400 text-black rounded-lg text-center hover:bg-red-200 transition group"
          href="mailto:keshavgowdasp@gmail.com"
        >
          <span className="font-bold group-hover:hidden">EMAIL ME</span>
          <span className="font-bold hidden group-hover:inline">
            keshavgowdasp@gmail.com
          </span>
        </a>

        {/* LinkedIn Button */}
        <a
          rel="noreferrer"
          target="_blank"
          className="px-3 py-2 bg-blue-400 text-black rounded-lg text-center hover:bg-blue-200 transition"
          href="https://www.linkedin.com/in/keshavsp"
        >
          <span className="font-bold">LINKEDIN</span>
        </a>

        {/* GitHub Button */}
        <a
          rel="noreferrer"
          target="_blank"
          className="px-3 py-2 bg-gray-400 text-black rounded-lg text-center hover:bg-gray-200 transition"
          href="https://www.github.com/keshavgowdasp"
        >
          <span className="font-bold">GITHUB</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:6362242228"
          className="relative px-3 py-2 bg-green-400 text-black rounded-lg text-center hover:bg-green-200 transition group"
        >
          <span className="font-bold group-hover:hidden">CALL ME</span>
          <span className="font-bold hidden group-hover:inline">
            6362242228
          </span>
        </a>
      </div>
    </section>
  );
}
