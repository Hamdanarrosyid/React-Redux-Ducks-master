import React from "react";
import './HeadPage.css'

const HeadPage = (text: React.ReactNode|string) =>{
    return (
        <div className="p-text-center">
            <h1>{text}</h1>
        </div>
    )
}
export default HeadPage