const Background = () => {
    return (
        <div className="text-justify">
            <p className="mb-4">
                In recent years, the rapid advancement of Large Language Models (LLMs) has significantly expanded the range of natural language processing applications across daily life and business contexts. In particular, the emergence of Vision-Language Models (VLMs), which jointly process visual and textual inputs, has enabled systems to tackle more complex multimodal tasks.
            </p>
            <p className="mb-4">
                However, processing and understanding practical documents such as PDF files remains a challenging task. Their structural complexity continues to hinder widespread adoption in real-world business settings. PDF documents present several key challenges:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                    <span className="font-semibold">Document Length:</span> PDF files can span tens to hundreds of pages, making it difficult to extract relevant information across long contexts and synthesize correct answers.
                </li>
                <li>
                    <span className="font-semibold">Complex Layouts:</span> Unlike plain text, PDF documents contain a rich variety of content, including tables, charts, and diagrams (e.g., line graphs, maps), which are often arranged in non-linear and complex layouts. Standard OCR-based approaches and text-only LLMs struggle to effectively process such visual structures. In many cases, multiple elements within the document must be referenced simultaneously, requiring sophisticated document-level understanding.
                </li>
            </ul>
            <p className="mb-4">
                To address these challenges, specialized VLMs for document understanding — such as mPLUG-DocOwl — have recently been proposed. Moreover, general-purpose VLMs developed by organizations like OpenAI and Google are beginning to demonstrate improved performance on document images in addition to natural scenes, indicating growing versatility.
            </p>
            <p className="mb-4">
                Nevertheless, these advancements are largely driven by the availability of English-language datasets. For Japanese and other non-English languages, usable and openly licensed PDF or document image datasets are still scarce, which contributes to the relatively low performance of VLMs in these languages. Specifically for Japanese, the only known VQA dataset for document images is JDocQA.
            </p>
            <p>
                The 2026 challenge directly addresses this gap by extending the scope from Japanese to a broader range of languages, and by requiring models to not only answer questions correctly but also ground their answers with explicit evidence references — a capability increasingly demanded in enterprise and government applications.
            </p>
        </div>
    )
}
export default Background;
