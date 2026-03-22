const Section = ({title, body, className, id})=>{
    return (
        <div id={id} className={" sm:w-[65em] w-full mb-10 " + className}>
            <div className="text-black relative rounded  font-bold text-[2em] ">
                {title}
            </div>

            <div>{body}</div>
        </div>
    )
}
export default Section;