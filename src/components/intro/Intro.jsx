import React from 'react'
import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import { CollectionsOutlined } from '@material-ui/icons';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        console.log(textRef);
        init(textRef.current, {
            showCursor:false,
            backDelay: 1500,
            backSpeed: 60,
            strings: [" React", " JS", " Scss / Css ", " Node JS", " MySQL"]
        });

    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Bonjour, je suis</h2>
                    <h1>Sandra Meyniel</h1>
                    <h3>Developpeuse web<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
