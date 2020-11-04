import React from "react";
import './HeadPage.css'

type props = {
    text : string
}

const HeadPage = ({text}:props) =>{
    return (
        <div className="p-text-center">
            <h1>{text}</h1>
        </div>
    )
}
export default HeadPage