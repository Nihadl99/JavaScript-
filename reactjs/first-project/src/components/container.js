import React from "react";
import { MyCount } from "./myCount";
import { MyName } from "./myname";
import { Time } from "./time";

export const Container = () => {



    return(
        <main>
           <MyName  first ="nihad" last="Lazaar"/>
           <MyCount/>
           <Time/>
        </main>
    );
}