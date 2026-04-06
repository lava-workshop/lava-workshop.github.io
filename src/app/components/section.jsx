const Section = ({title, body, className, id}) => {
    return (
        <div id={id} className={"sm:w-[65em] w-full mb-12 " + (className || "")}>
            <div className="mb-6">
                <h2 className="section-title text-[#01305f] font-bold text-[1.8em] tracking-tight">
                    {title}
                </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 text-slate-700 leading-relaxed">
                {body}
            </div>
        </div>
    )
}
export default Section;