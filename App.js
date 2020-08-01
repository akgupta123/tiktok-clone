import React,{useState,useEffect} from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
     db.collection('videos').onSnapshot(snapshot=>{
       setVideos(snapshot.docs.map(doc=>doc.data()));
     })

  },[videos]);
  return (
    <div className="App">
      <div className="video-tik">
        {videos.map(
          ({url,channel,description,song,likes,message,shares})=>(
          <Video 
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          message={message}
          shares={shares}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
