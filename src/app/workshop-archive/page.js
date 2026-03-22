import Link from "next/link";

export const metadata = {
  title: "LAVA Workshop Archive",
};

export default function WorkshopArchive() {
  const button =
    "hover:cursor-pointer text-[#01305f] hover:text-white border border-[#01305f] hover:bg-[#01305f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2";

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
    <main className="flex min-h-screen flex-col items-center sm:px-24 px-4">
      <div className="sm:flex flex-row grid mt-10 sm:w-[65em] w-full justify-center">
        <a className={button} href="/">
          Home
        </a>
        <a className={button} href="/workshop-archive">
          Workshop Archive
        </a>
        <a className={button} href="/challenge-archive">
          Challenge Archive
        </a>
      </div>

      <div className="mt-16 sm:w-[65em] w-full">
        <h1 className="text-3xl font-bold text-[#01305f] mb-2">Workshop Archive</h1>
        <p className="text-gray-600 mb-10">
          Past editions of the LAVA Workshop on Large Vision–Language Model Learning and Applications.
        </p>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          {events.map((event) => (
            <Link key={event.year} href={event.href}>
              <div className="border border-[#01305f] rounded-xl p-6 hover:bg-[#01305f] hover:text-white transition-colors group cursor-pointer">
                <div className="text-4xl font-bold text-[#01305f] group-hover:text-white mb-2">
                  {event.year}
                </div>
                <div className="text-xl font-semibold mb-1">{event.title}</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-200">
                  {event.venue}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
