import { useState } from "react";


const Pratice = () => {
    const [isActive, setIsActive]=useState(false)
    const handleStyle=()=>{
        setIsActive(!isActive)
    }
    return (
        <>
           {
            isActive ? 
            <div>
                  <h1>hi i am true</h1>
            </div> 
            :
            <div>
                 <h2> hello i am false </h2>
            </div>
           }
           <button onClick={handleStyle}>{isActive ? "make false": "make true"}</button>
        </>
    );
};

export default Pratice;