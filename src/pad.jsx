import React from "react"

export function Pad(prop){


    return(
        <button onClick = {()=>{prop.onClick(prop.id)}} className={prop.on? "on":null}  key = {prop.id} style={{backgroundColor: prop.color}  }></button>
    )
}
