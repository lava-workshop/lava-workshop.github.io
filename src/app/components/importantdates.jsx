"use client";

const ImportantDates = () => {
    const today = new Date();

    const events = [
        ["Dataset release on Kaggle page", "2026/4/15"],
        ["Challenge closed", "2026/5/31"],
        ["Results, report, docker container submission deadline", "2026/6/7"],
        ["Paper submission deadline", "2026/6/25"],
        ["Notification of results", "2026/7/16"],
        ["Camera-ready submission", "2026/8/6"],
        ["Grand Challenge at ACM MM 2026", "TBD"],
    ];

    const isPast = (dateStr) => {
        if (dateStr === "TBD") return false;
        const d = new Date(dateStr.replace(/\//g, "-"));
        d.setHours(0, 0, 0, 0);
        return d < today;
    };

    return (
        <div className="text-justify">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-[#01305f] text-white">
                            <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(([event, date], i) => {
                            const past = isPast(date);
                            return (
                                <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${past ? "opacity-50" : ""}`}>
                                    <td className={`border border-gray-300 px-4 py-2 ${past ? "line-through text-gray-400" : ""}`}>
                                        {event}
                                    </td>
                                    <td className={`border border-gray-300 px-4 py-2 font-semibold ${past ? "line-through text-gray-400" : "text-[#01305f]"}`}>
                                        {date}
                                        {past && <span className="ml-2 text-[0.75em] no-underline not-italic font-normal text-gray-400">(passed)</span>}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ImportantDates;
