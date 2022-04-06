import React, { useEffect, useState } from "react";

export const Time = () => {

    const [time, setTime] = useState(new Date());
    const [changeMinute, setChangeMinute] = useState('');
    useEffect(()=>{
        
        setInterval(()=>{
           setTime(new Date());
        } , 1000);
    }, []);

    return(
       <p><span>{time.getHours()}</span> : <span>{time.getMinutes()}</span> : <span>{time.getSeconds()}</span></p>
    )
}