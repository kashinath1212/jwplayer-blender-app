import React from 'react'
import ReactJWPlayer from "react-jw-player";
import { useSelector } from 'react-redux';

const JwplayerVideo = () => {
    const mediaId = useSelector(state => state.mediaId.mediaid)

    return (
        <div className="App">
            <div
                className="jw-video-container"
                data-mediaid="LEBW145Q"
                style={{ height: "100%", width: "100%" }}
            >
                <ReactJWPlayer
                    playerId={mediaId}
                    playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
                    playlist={`https://cdn.jwplayer.com/v2/media/${mediaId}`}
                />
            </div>
        </div>
    );
}

export default JwplayerVideo;