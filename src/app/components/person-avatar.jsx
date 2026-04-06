const PersonAvatar = ({image, name, affiliation}) => {
    return (
        <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
            <img src={image} alt={name}
                className="rounded-full w-[7em] h-[7em] object-cover ring-2 ring-[#01305f]/20 shadow-md" />
            <div className="text-[0.95em] font-semibold text-[#01305f] text-center leading-tight">{name}</div>
            <div className="text-[0.78em] text-slate-500 text-center leading-tight">{affiliation}</div>
        </div>
    )
}
export default PersonAvatar;