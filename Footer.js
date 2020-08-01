import React from 'react';
import './Footer.css';
import Ticker from "react-ticker";
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
function Footer({channel,description,song}) {
    return (
        <div className="footer_css">
            <div className="footer_txt">
                <h3>@{channel}</h3>
                <p >{description}</p>
                <div className="ticker">
                <MusicNoteIcon className="ticker_icon"/>
                <Ticker mode="smooth">
                    {({index})=>(
                        <>
                        <p className="loop">{song}</p>
                        </>
                    )}  
                </Ticker>
                </div>
            </div>
            <div className="loader"></div>
        </div>
    )
}

export default Footer;
