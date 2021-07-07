import React from "react";

export default function StopWatch({time}){
    return (
        <h2>{new Date(time * 1000).toISOString().substr(11, 8)}</h2>
    )
}