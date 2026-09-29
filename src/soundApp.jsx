import padsData from "./pads"
import React from "react";
import { Pad } from "./pad"; 

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    
    const [buttonState,setPads] = React.useState(padsData);
    const buttonElements = buttonState.map((pad)=> <Pad id = {pad.id} onClick={()=>{toggle(pad.id)}} color = {pad.color} on = {pad.on} key ={pad.id}/>);

    function toggle(id){
        setPads((prevState) =>{
            prevState.map((state)=>{
                return state.id === id? {...state,on:!state.on}: state
            })
        })
    }


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}