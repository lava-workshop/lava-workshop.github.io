const ImportantDates = () => {
    return (
        <div className="text-justify">
            <p className="mb-4 text-gray-500 italic">🔔 Specific dates will be announced at a later date. Please check back for updates or register your team in advance.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-[#01305f] text-white">
                            <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            "Registration opens",
                            "Dataset release",
                            "Registration deadline",
                            "Results & report submission deadline",
                            "Paper submission deadline (by invitation)",
                            "Notification of results",
                            "Camera-ready submission",
                            "Grand Challenge at ACM MM 2026",
                        ].map((event, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border border-gray-300 px-4 py-2">{event}</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-500">TBA</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ImportantDates;
