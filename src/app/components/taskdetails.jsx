const TaskDetails = () => {
    return (
        <div className="text-justify space-y-6">
            <p className="text-gray-500 italic">
                🔔 Details of the task will be announced at a later date. Please check back for updates or register your interest below.
            </p>

            <div className="border-l-4 border-[#01305f] bg-[#f0f5ff] rounded-r-xl px-6 py-5 shadow-sm">
                <h3 className="text-[#01305f] font-bold text-lg mb-3">📄 Publication Opportunity</h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#01305f] font-bold mt-0.5">🏆</span>
                        <span>The <span className="font-semibold">top 3 solutions</span> will be invited to submit a paper to the Grand Challenge track — your chance to have your winning method published!</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#01305f] font-bold mt-0.5">📝</span>
                        <span>Paper length: <span className="font-semibold">6 pages</span> + up to <span className="font-semibold">2 additional pages</span> for references only.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#01305f] font-bold mt-0.5">📚</span>
                        <span>Accepted Grand Challenge papers will be <span className="font-semibold">included in the ACM MM 2026 main conference proceedings</span>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#01305f] font-bold mt-0.5">🎟️</span>
                        <span>At least <span className="font-semibold">one main-conference full registration</span> is required per accepted paper.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default TaskDetails;
