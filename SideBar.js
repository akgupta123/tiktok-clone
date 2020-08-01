import React ,{useState} from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './SideBar.css';
function SideBar() {
    const [like,setLike]=useState(false);
    console.log(like)
    return (
        <div className="sidebar">
            <div className="sidebar_btn">
                {like? (
                <FavoriteIcon fontSize="large" onClick={(e)=> setLike(false)}/>
                ): (
                    <FavoriteBorderIcon fontSize="large" 
                    onClick={(e)=> setLike(true)}
                    />
                )}
                <p>{like ? 300+1:300}</p>
            </div>
            <div className="sidebar_btn">
                <MessageIcon/>
                <p>230</p>
            </div>
            <div className="sidebar_btn">
                <ShareIcon/>
                <p>350</p>
            </div>

        </div>
    )
}

export default SideBar;
