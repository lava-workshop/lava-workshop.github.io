import PersonAvatar from "./person-avatar";

const TechnicalSupporters = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4">
            <PersonAvatar name="Duy-Nam Ly" image="/ldnam.jpg" affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Trong-Le Do" image="/dtle.png" affiliation={"University of Science, Vietnam"} />
            <PersonAvatar name="Daichi Sato" image="/Daichi.jpg" affiliation={"The University of Tokyo, Japan"} />
            <PersonAvatar name="TASUKI Team" image="/TASUKI.png" affiliation={"SoftBank, Japan"} />
        </div>

        <br/>
       
    </div>
}
export default TechnicalSupporters;
