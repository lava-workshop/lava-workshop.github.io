const Evaluation = () => {
    return (
        <div className="space-y-6 text-gray-700 leading-relaxed">

            <p>
                Each question is evaluated on two aspects: <span className="font-semibold text-[#01305f]">answer correctness (VQA Score)</span> and <span className="font-semibold text-[#01305f]">evidence grounding (Grounding Score)</span>. The final score is the average of these two.
            </p>

            {/* Score overview cards */}
            <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-[#f0f5ff] border border-[#c7d8f8] rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">✅</div>
                    <div className="font-bold text-[#01305f] text-sm">VQA Score</div>
                    <div className="text-xs text-gray-500 mt-1">Answer correctness</div>
                </div>
                <div className="bg-[#f0f5ff] border border-[#c7d8f8] rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">📍</div>
                    <div className="font-bold text-[#01305f] text-sm">Grounding Score</div>
                    <div className="text-xs text-gray-500 mt-1">Evidence page matching</div>
                </div>
                <div className="bg-[#01305f] border border-[#01305f] rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">🏅</div>
                    <div className="font-bold text-white text-sm">Overall Score</div>
                    <div className="text-xs text-blue-200 mt-1">(VQA + Grounding) / 2</div>
                </div>
            </div>

            {/* VQA Score */}
            <div>
                <h3 className="font-bold text-[#01305f] text-base mb-3 flex items-center gap-2">
                    <span className="bg-[#01305f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                    VQA Score
                </h3>
                <p className="text-sm mb-3">
                    Answer correctness is evaluated using <span className="font-semibold">LLM-as-a-Judge (Gemma-3 1B)</span>, which determines whether a predicted answer is semantically equivalent to the ground truth. This approach tolerates minor variations in phrasing, formatting, and representation.
                </p>
                <div className="space-y-2">
                    <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm border border-gray-100">
                        <span className="font-mono bg-white border border-gray-200 rounded px-2 py-0.5 text-xs text-[#01305f] font-semibold shrink-0 mt-0.5">string / number</span>
                        <span>The LLM judge determines whether the predicted answer is semantically equivalent to the correct answer. Minor differences in formatting (e.g., <span className="font-mono text-xs">1000</span> vs <span className="font-mono text-xs">1,000</span>, presence/absence of units) are tolerated.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm border border-gray-100">
                        <span className="font-mono bg-white border border-gray-200 rounded px-2 py-0.5 text-xs text-[#01305f] font-semibold shrink-0 mt-0.5">unordered_list</span>
                        <span>Each predicted item is matched against a ground truth item using the LLM judge. The overall score is the <span className="font-semibold">F1 score</span> computed from item-level matches, regardless of order.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm border border-gray-100">
                        <span className="font-mono bg-white border border-gray-200 rounded px-2 py-0.5 text-xs text-[#01305f] font-semibold shrink-0 mt-0.5">ordered_list</span>
                        <div>
                            <span>Items are evaluated by <span className="font-semibold">LCS (Longest Common Subsequence)</span> score. Each item comparison uses the LLM judge. The score is normalized as:</span>
                            <div className="mt-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-center font-mono text-sm text-[#01305f]">
                                Ordered List Score = LCS length / max(|predicted|, |ground_truth|)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grounding Score */}
            <div>
                <h3 className="font-bold text-[#01305f] text-base mb-3 flex items-center gap-2">
                    <span className="bg-[#01305f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                    Grounding Score
                </h3>
                <p className="text-sm mb-3">
                    The predicted and ground truth evidence page numbers are compared as sets. The score is computed as:
                </p>
                <div className="bg-white border border-gray-200 rounded-lg px-6 py-3 text-center font-mono text-sm text-[#01305f] mb-3">
                    Grounding Score = 2 × |predicted ∩ ground_truth| / (|predicted| + |ground_truth|)
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                        <span className="font-bold text-green-600">1.0</span>
                        <span className="text-gray-600">Predicted page set exactly matches ground truth</span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                        <span className="font-bold text-red-500">0.0</span>
                        <span className="text-gray-600">No overlap between predicted and ground truth</span>
                    </div>
                </div>
            </div>

            {/* Overall Score */}
            <div>
                <h3 className="font-bold text-[#01305f] text-base mb-3 flex items-center gap-2">
                    <span className="bg-[#01305f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                    Overall Score
                </h3>
                <div className="bg-[#f0f5ff] border border-[#c7d8f8] rounded-xl p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                        <span className="text-gray-600 font-medium">Per question:</span>
                        <span className="font-mono bg-white border border-gray-200 rounded px-3 py-1 text-[#01305f]">(VQA Score + Grounding Score) / 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-600 font-medium">Final score:</span>
                        <span className="text-gray-700">Mean of all per-question scores across the entire test set</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Evaluation;
