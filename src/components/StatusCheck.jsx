import { useEffect } from "react";
import Highlighted from "./atoms/Highlighted";
import ClaimForm from "./ClaimForm";

export default function StatusCheck ({person, claimed}) {

    var isClaimed = claimed;
   
    return (
        <>
        {isClaimed ? <Highlighted text={`Claimed by ${person}`}/> :  <ClaimForm />}
        </>
    )
}