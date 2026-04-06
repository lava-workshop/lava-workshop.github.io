import Image from "next/image";

const Footer = () => {
    const logos = [
        { src: "/SBIntuitions.png", alt: "SB Intuitions", width: 150 },
        { src: "/tokyo.png", alt: "UTokyo", width: 110 },
        { src: "/NII.jpg", alt: "NII", width: 100 },
        { src: "/BeyondAI.jpg", alt: "Beyond AI", width: 150 },
    ];
    return (
        <footer className="w-full mt-12">
            <div className="flex flex-col items-center gap-6 py-8 px-6">
                <p className="text-white/60 text-xs uppercase tracking-widest font-medium">Supported By</p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {logos.map(({ src, alt, width }) => (
                        <div key={alt} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200 bg-white/10 rounded-xl px-5 py-4">
                            <Image src={src} alt={alt} width={width} height={60}
                                className="h-[4.5em] w-auto object-contain" />
                        </div>
                    ))}
                </div>
                <p className="text-white/40 text-xs mt-2">© 2026 LAVA Workshop. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;
