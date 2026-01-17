"use client"

import { useReducer } from "react"
import { actionType } from "./package/test.schema";

export default function testPage(){
    const init = 0
    function reducer(state:number,action:actionType): number{
        switch(action){
            case "plus" : return state + 1;
            case "minus" : return state -1;
            case "reset" : return init;
            default : return state
        }
    }
    const [state,dispatch] = useReducer(reducer,init);
    return(
        <>
        <h1>init rn : {state}</h1>
        <button className="p-4 border border-black" onClick={()=> dispatch("plus")}>+</button>
        <button className="p-4 border border-black" onClick={()=> dispatch("reset")}>=</button>
        <button className="p-4 border border-black" onClick={()=> dispatch("minus")}>-</button>
        </>
    )
}