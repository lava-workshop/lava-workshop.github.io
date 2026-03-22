const PersonAvatar = ({image, name, affiliation}) => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <img src={image} alt={name} className="rounded-full w-[8em] h-[8em] object-cover " />
                <div className="text-[1.2em] font-bold text-center">{name}</div>
                <div className="text-[1em] text-center">{affiliation}</div>
                </div>
        </div>
    )
}
export default PersonAvatar;