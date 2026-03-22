const Workshop = () => {
    return (
        <div className="text-justify">
            <p className="mb-4">
                We are pleased to announce the <span className="font-semibold">3rd LAVA Grand Challenge</span>, to be held in conjunction with <span className="font-semibold">ACM Multimedia 2026</span>. Building on the success of our previous challenges in 2024 and 2025, this year's edition introduces two major extensions:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                    <span className="font-semibold">Multilingual Expansion:</span> While previous editions focused on Japanese, the 2026 challenge expands coverage to a broader set of languages, with a particular emphasis on low-resource and underrepresented languages.
                </li>
                <li>
                    <span className="font-semibold">Evidence-Grounded Answering:</span> In addition to selecting the correct answer, participants are now required to provide evidence for their answer — such as the page number(s) where the supporting information can be found. This reflects the growing real-world demand for AI systems that can not only answer questions but also justify their responses with traceable references.
                </li>
            </ul>
            <p className="mb-4">
                The challenge targets the document understanding capabilities of Vision-Language Models (VLMs) on multilingual PDF documents and invites researchers, engineers, and practitioners worldwide to participate.
            </p>
            <p className="mb-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScvuNuXqoHGW3SKhF2WYN34WhFarVp3Dx6gEXMX4dr4xT7T6A/viewform" className="underline text-[1.1em] text-[#232ba1] font-semibold" target="_blank" rel="noopener noreferrer">
                    Register your team for LAVA Challenge 2026 here!
                </a>
            </p>
            <center><img src="/qrcode.png" alt="qrcode" width={200} height={200} /></center>
        </div>
    )
}
export default Workshop;
