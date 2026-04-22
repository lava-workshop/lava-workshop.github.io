const Rules = () => {
    return (
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm">

            {/* Rule 1 */}
            <div>
                <h3 className="font-bold text-[#01305f] text-base mb-3 flex items-center gap-2">
                    <span className="bg-[#01305f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    Use of Open Models and Data
                </h3>
                <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 space-y-2">
                    <p>Participants must use <span className="font-semibold">publicly available (open) models and datasets only</span>.</p>
                    <p>If you create a new dataset specifically for this competition, you are required to:</p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                        <li>Publish it as a <span className="font-semibold">Kaggle Dataset</span>.</li>
                        <li>Explicitly announce its existence in the competition <span className="font-semibold">Discussion (Issues)</span> tab, so all participants have equal access.</li>
                    </ul>
                </div>
            </div>

            {/* Rule 2 */}
            <div>
                <h3 className="font-bold text-[#01305f] text-base mb-3 flex items-center gap-2">
                    <span className="bg-[#01305f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    Inference Environment Constraints
                </h3>
                <div className="space-y-3">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
                        <p className="font-semibold text-amber-800 mb-1">⚙️ Requirement</p>
                        <p>Participants must ensure that their inference pipeline completes within <span className="font-semibold">2 hours on a single A100 GPU (40 GB VRAM)</span>.</p>
                        <p className="mt-1 text-gray-600">There is no restriction on training — you may use any hardware and time budget for training. <span className="font-semibold">The constraint applies to inference only.</span></p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 space-y-2">
                        <p className="font-semibold text-gray-700">Background & Rationale</p>
                        <p>Ideally, this competition would be hosted as a Code Competition to enforce a unified inference environment for all participants. However, due to Kaggle platform limitations, Code Competitions cannot be held under Community Competitions. As an alternative, we are standardizing the environment by specifying the above inference constraint.</p>
                        <p>The A100 (40 GB) constraint is based on the hardware the organizers will use to verify submitted code. We understand that not all participants own an A100, but since GPU performance varies significantly by generation, we had no choice but to set the constraint based on the organizer's verification environment.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 space-y-2">
                        <p className="font-semibold text-blue-800">💡 If You Do Not Have an A100</p>
                        <ul className="list-disc list-inside ml-2 space-y-1 text-gray-700">
                            <li>Look up the approximate performance ratio between your GPU and an A100.</li>
                            <li>Estimate the inference time budget for your GPU accordingly (e.g., if your GPU is roughly half as fast, aim for ~1 hour of inference time).</li>
                        </ul>
                        <p className="text-gray-600">The 40 GB VRAM limit was chosen because it is neither too tight nor too loose — it should be achievable for most modern large models without requiring extreme optimization.</p>
                    </div>
                </div>
            </div>

            {/* Rule 3 */}
            <div>
                <h3 className="font-bold text-[#01305f] text-base mb-3 flex items-center gap-2">
                    <span className="bg-[#01305f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    Code Submission for Top Finishers
                </h3>
                <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 space-y-2">
                    <p>After the competition ends, <span className="font-semibold">top-ranked participants are required to submit their code</span> to the organizers for reproducibility verification.</p>
                    <p className="font-semibold text-gray-700 mt-1">To ensure reproducibility, please follow these practices:</p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                        <li>Set <span className="font-semibold">random seeds</span> for all stochastic operations (model initialization, data shuffling, sampling, etc.).</li>
                        <li>Use <span className="font-semibold">Docker</span> to containerize your environment. You will be asked to submit a <span className="font-mono text-xs bg-white border border-gray-200 rounded px-1">Dockerfile</span> along with your code.</li>
                    </ul>
                </div>
            </div>

            {/* Rule 4 */}
            <div>
                <h3 className="font-bold text-[#01305f] text-base mb-3 flex items-center gap-2">
                    <span className="bg-[#01305f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    Dataset Licenses
                </h3>
                <p className="mb-3">The dataset used in this competition contains a mix of Japanese and Vietnamese text.</p>
                <div className="space-y-3">
                    <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                        <p className="font-semibold text-gray-700 mb-1">🇯🇵 Japanese Data</p>
                        <p>The Japanese PDF annotation data is released under the <span className="font-semibold">CC BY 4.0</span> license.</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 space-y-2">
                        <p className="font-semibold text-gray-700 mb-1">🇻🇳 Vietnamese Data</p>
                        <p>The Vietnamese data is primarily sourced from <span className="font-semibold">Viet Nam Government News</span>, the <span className="font-semibold">Viet Nam Government Portal</span>, <span className="font-semibold">Vietnam News Agency</span>, and other copyrighted sources. All content remains fully protected under copyright law.</p>
                        <p>Participants may freely access, view, cite, download, and print the materials for reference purposes. However, <span className="font-semibold text-red-700">altering or modifying any content or images in any form is strictly prohibited</span>. If you republish or redistribute any information, you must clearly attribute the original source (e.g., "Government Portal", "Viet Nam Government News", or link to <span className="font-mono text-xs">www.chinhphu.vn</span>).</p>
                        <div className="mt-2 space-y-1 text-xs text-gray-500 border-t border-gray-200 pt-2">
                            <p>© Viet Nam Government Portal. All rights reserved.</p>
                            <p>© Viet Nam Government News – Viet Nam Government Portal. All rights reserved.</p>
                            <p>© Vietnam News Agency. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Rules;
