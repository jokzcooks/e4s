import { useState, useEffect } from "react";

export const Concern = ({issue}) => (
    <div className="naCrash"><p>{issue}</p></div> 
)

export const ErrorMessage = ({onMount}) => {

    const [value, setValue] = useState("");

    useEffect(() => {
      onMount([value, setValue]);
    }, [onMount, value]);
  
    if (value != "" && value != undefined && document.querySelector(".errorBox")) {
        document.querySelector(".errorBox").style.bottom = "50px"
        setTimeout(() => {
            document.querySelector(".errorBox").style.bottom = "-100%"
            setTimeout(() => {
                setValue("")                
            }, 500);
        }, 1500);
    }

    return (
        <div className="errorBox">
            <p>{value}</p>
        </div>
    )
}