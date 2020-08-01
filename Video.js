import React,{useRef,useState} from 'react';
import Footer from './Footer';
import './Video.css';
import SideBar from './SideBar';

function Video({
    channel,
    description,
    song,
    likes,
    shares,
    message
}) {
    const [play, setPlay]=useState(false);
    const videoref=useRef(null);
    const videoPress=()=>{
        if(play){
            videoref.current.pause();
            setPlay(false)
        }
        else{
            videoref.current.play();
            setPlay(true);
        }
    }
    return (
        <div className="video">
          <video className="video_play" 
          onClick={videoPress}
          ref={videoref}
          loop  src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"> </video>
            <Footer channel={channel} description={description} song={song}/>
            <SideBar likes={333} shares={204} message={455}/>
        </div>
    )
}
export default Video;
