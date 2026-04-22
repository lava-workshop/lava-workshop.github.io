const TaskDetails = () => {
    return (
        <div className="text-justify space-y-6">

            {/* Task description */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    This competition is a <span className="font-semibold text-[#01305f]">multilingual Document Visual Question Answering (Document VQA)</span> task with evidence grounding. Given a PDF document and a question about its content, participants must:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li><span className="font-semibold">Answer the question</span> by reading and understanding the document.</li>
                    <li><span className="font-semibold">Ground the answer</span> — identify the page(s) of the PDF that contain the evidence needed to answer the question.</li>
                </ol>
                <p>
                    Each question requires reading one or more pages of the PDF and interpreting a variety of elements such as <span className="font-semibold">text paragraphs, tables, figures, and photographs</span>. The dataset contains questions in <span className="font-semibold">Japanese and Vietnamese</span>, reflecting the multilingual focus of this challenge.
                </p>
                <p>
                    Document VQA is a challenging task because it demands both <span className="font-semibold">visual understanding</span> (interpreting the layout and structure of a rendered page) and <span className="font-semibold">language understanding</span> (comprehending the question and formulating a correct answer). The evidence grounding requirement adds a further layer of difficulty: models must not only produce a correct answer but also justify it by pinpointing the exact page(s) from which the answer is derived.
                </p>
                <p>
                    Participants are encouraged to develop and evaluate <span className="font-semibold">Vision-Language Models (VLMs)</span> or multimodal pipelines capable of handling multilingual, multi-page PDF documents in an open-ended question answering setting.
                </p>
            </div>

            {/* Key requirements */}
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                <div className="bg-[#f0f5ff] rounded-xl p-4 border border-[#c7d8f8]">
                    <div className="text-2xl mb-2">📄</div>
                    <div className="font-semibold text-[#01305f] text-sm mb-1">Multilingual PDFs</div>
                    <div className="text-xs text-gray-600">Questions in Japanese & Vietnamese across multi-page documents</div>
                </div>
                <div className="bg-[#f0f5ff] rounded-xl p-4 border border-[#c7d8f8]">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold text-[#01305f] text-sm mb-1">Evidence Grounding</div>
                    <div className="text-xs text-gray-600">Identify the exact page(s) containing evidence for each answer</div>
                </div>
                <div className="bg-[#f0f5ff] rounded-xl p-4 border border-[#c7d8f8]">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="font-semibold text-[#01305f] text-sm mb-1">VLM Challenge</div>
                    <div className="text-xs text-gray-600">Text, tables, figures & photos — requires vision + language understanding</div>
                </div>
            </div>

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
                    <li className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold mt-0.5">🎁</span>
                        <span><span className="font-semibold">Tentative prize:</span> The <span className="font-semibold">top 3 winning teams</span> will each receive a <span className="font-semibold">conference fee waiver</span> (one per team).</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default TaskDetails;
