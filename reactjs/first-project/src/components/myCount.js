import React, {useState , useEffect} from "react";

export const MyCount = () => {
    const[count, setCount] = useState(10);
    useEffect(()=>{
        console.log("mon compteur vaut" + count);

    });

    const handleClick = () =>{
        setCount(count+1);
    }

    return(
        <div>
            <input type="text" value="" />
            <button onClick={handleClick}>Incrementer</button>
        </div>
    );
}