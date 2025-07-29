const Workshop = () => {
    return (
        <div className="text-justify">
            <p className="mb-4">
                We are delighted to organize the <a href="https://lava-workshop.github.io/workshop" target="_blank" rel="noopener noreferrer">Second Workshop on Large Vision—Language Model Learning and Applications (LAVA 2025)</a> and <a href="https://lava-workshop.github.io/grandchallenge" target="_blank" rel="noopener noreferrer">The Large Vision—Language Model Learning and Applications Grand Challenge (LAVA Challenge)</a> in conjunction with ACM MM 2025.
            </p>
            <p className="mb-4">
                Please refer to the corresponding page for more details.
            </p>
            <p className="mb-4">
                We look forward to your contribution.
            </p>
            <p>
                See you soon in Dublin, Ireland.
            </p>

            <p>
                <span className="underline text-[1.4em] text-[#232ba1]">The LAVA Challenge 2026 will be held in conjunction with ACMMM 2026. Additional details will be announced at a later date. We look forward to your participation!</span>.
            </p>
            <br/>
                <span className="font-bold text-[1.3em]"><a href='https://docs.google.com/forms/d/e/1FAIpQLScvuNuXqoHGW3SKhF2WYN34WhFarVp3Dx6gEXMX4dr4xT7T6A/viewform' className="underline text-[1.4em] text-[#232ba1]">Register your team for LAVA Challenge 2026 here!</a></span>.
            <br />
            <div className="flex flex-row w-full justify-center items-center ">
            <div className="grid grid-cols-2">
                <Image src="/qrcode.png" width={200} height={200} className="sm:w-[18m] w-[12em]" />
            </div>

            
        </div>
    )
}
export default Workshop;
