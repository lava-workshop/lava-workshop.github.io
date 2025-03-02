
const Header = ()=>{
    const highlight = "underline font-bold text-white"
    return (
        <div className="header">
            <div className="justify-center flex flex-col sm:text-[2em] text-[1.5em] text-[#f5f5f5]  font-medium ">
                <div className="text-white text-center text-[1.7em]">
                     <span className="text-white tracking-[0.35em] font-semibold">LAVA </span>
                </div>
                <div className="text-[0.8em] text-center mt-2">
                    ACM MM 2025 Workshop and Grand Challenge on 
                </div>
                <div className="text-[0.8em] text-center ">
                    <span className={highlight}>La</span>rge <span className={highlight}>V</span>ision – Language Model Learning and <span className={highlight}>A</span>pplications 
                </div>
                <div className="text-[0.55em]  text-white text-center mt-5">
                    Dublin, Ireland 27 - 31.10.2025
                </div>
            </div>
           
           
        </div>
    );
}
export default Header;
