const Header = () => {
    const highlight = "font-bold text-sky-300"
    return (
        <div className="header">
            {/* Decorative grid overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
            </div>
            <div className="relative z-10 justify-center flex flex-col items-center sm:text-[2em] text-[1.5em] text-[#f5f5f5] font-medium px-4">
                {/* Badge */}
                <div className="mb-4 px-4 py-1 rounded-full border border-sky-400/50 bg-sky-400/10 text-sky-300 text-[0.35em] tracking-widest uppercase font-semibold">
                    ACM MM 2026 Grand Challenge
                </div>
                {/* Title */}
                <div className="text-white text-center text-[1.7em] tracking-[0.25em] font-bold drop-shadow-lg">
                    LAVA
                </div>
                <div className="text-[0.75em] text-center mt-3 text-white/90 leading-relaxed">
                    <span className={highlight}>La</span>rge <span className={highlight}>V</span>ision – Language Model Learning and <span className={highlight}>A</span>pplications
                </div>
                {/* Venue pill */}
                <div className="mt-5 flex items-center gap-2 text-[0.42em] text-white/70 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Rio de Janeiro, Brazil &nbsp;·&nbsp; 10–14 November 2026
                </div>
            </div>
        </div>
    );
}
export default Header;
