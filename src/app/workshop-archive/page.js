import Link from "next/link";

export const metadata = {
  title: "LAVA Workshop Archive",
};

export default function WorkshopArchive() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/workshop-archive", label: "Workshop Archive" },
    { href: "/challenge-archive", label: "Challenge Archive" },
  ];

  const events = [
    {
      year: "2025",
      title: "LAVA 2025",
      venue: "ACM MM 2025, Dublin, Ireland",
      href: "/workshop-archive/2025",
    },
    {
      year: "2024",
      title: "LAVA 2024",
      venue: "ACCV 2024",
      href: "/workshop-archive/2024",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50">
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-[65em] mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[#01305f] hover:text-white border border-[#01305f] hover:bg-[#01305f] transition-all duration-200 font-medium rounded-lg text-sm px-5 py-2 text-center"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mt-16 sm:w-[65em] w-full px-4">
        <h1 className="section-title text-3xl font-bold text-[#01305f] mb-2">
          Workshop Archive
        </h1>
        <p className="text-slate-500 mt-4 mb-10">
          Past editions of the LAVA Workshop on Large Vision–Language Model
          Learning and Applications.
        </p>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          {events.map((event) => (
            <Link key={event.year} href={event.href}>
              <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#01305f]/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                <div className="text-5xl font-bold text-[#01305f]/20 group-hover:text-[#01305f]/40 mb-3 transition-colors">
                  {event.year}
                </div>
                <div className="text-xl font-semibold text-[#01305f] mb-1">
                  {event.title}
                </div>
                <div className="text-sm text-slate-400">{event.venue}</div>
                <div className="mt-4 text-sm text-sky-600 font-medium group-hover:underline">
                  View details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
