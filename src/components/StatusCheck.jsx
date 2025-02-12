import Highlighted from "./atoms/Highlighted";
import ClaimForm from "./ClaimForm";

export default function StatusCheck ({person}) {


    var isClaimed = false;
   
    return (
        
        <>
        {isClaimed ? <Highlighted text={`Claimed by ${person}`}/> :  <ClaimForm/>}
        </>
    )
}