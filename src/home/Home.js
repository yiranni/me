import React from "react";
import "./Home.css"

export default function Home() {

    return(
        <div className="home" style={{padding: '6rem 10rem'}}>

            <p style={{fontFamily: 'var(--font-nanum)', fontSize: '26px',color:'#F86271 '}}>Hi, my name is</p>
            <h1 style={{fontFamily: 'var(--font-heavy)', }}>
                Yeeran Nee.
                <br />
                I design things, write code, and do LOTS OF outdoor activities.
            </h1>
            <p style={{fontFamily: 'var(--font-nanum)', fontSize: '26px',color:'#F86271 ', width: "70%"}}>
                I am a Shanghai-based software engineer who specialized in building and designing data visualization.
                
                </p>
           
        </div>
    )
}