import React from "react";
import {useState} from "react";

function CommonHOC(WrappedHOC){
    const Logic = ()=>{

    const [like, setlike] = useState(0);

    const handleLike =()=>{
        setlike((prevState)=>prevState + 1);
    };

    return(
        <WrappedHOC likeHandle = {handleLike} likeCount = {like}/>
    )
    }
    return Logic
}

export default CommonHOC