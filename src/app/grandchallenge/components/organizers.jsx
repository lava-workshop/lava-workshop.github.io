import PersonAvatar from "./person-avatar";

const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Duc Minh Vo" image="/vmduc.jpg" affiliation={"SB Intuitions, Japan"} />
{/*             <PersonAvatar name="Akihiro Sugimoto" image="/sugimoto.jpg" affiliation={"National Institute of Informatics, Japan"} /> */}
            <PersonAvatar name="Hideki Nakayama" image="/nakayama.jpg" affiliation={"University of Tokyo, Japan"} />
            <PersonAvatar name="Khan Md Anwarus Salam" image="/khan_salam.jpg" affiliation={"SoftBank, Japan"} />
            <PersonAvatar name="Daichi Sato" image="/Daichi.jpg" affiliation={"University of Tokyo, Japan"} />
            <PersonAvatar name="Takara Taniguchi" image="/taniguchi.jpeg" affiliation={"University of Tokyo, Japan"} />
            <PersonAvatar name="Kaito Baba" image="/baba.jpg" affiliation={"University of Tokyo, Japan"} />
        </div>

        <br/>
        Contact: lava-workshop(at)googlegroups.com
       
    </div>
}
export default Organizers;
