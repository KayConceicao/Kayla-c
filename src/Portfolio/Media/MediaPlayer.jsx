import React, { useState, useRef } from "react";
import { motion } from "framer-motion"

// Styles
import "./mediaStyles/mediaPlayer.scss";

// Components 
import Player from "./mediaComponents/Player";
import Song from "./mediaComponents/Song";
import Library from "./mediaComponents/Library";
import Nav from "./mediaComponents/Nav";

// Data
import data from "./data"; 

function MediaPlayer() {

  // Ref
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState( {
    currentTime: 0,
    duration: 0,
    animaionPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  // Event handler
  const timeUpdateHandler =(e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100 );
    setSongInfo({...songInfo, currentTime: current, duration: duration, animaionPercentage: animation,})
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  };

  return (
    <motion.div exit={{ opacity: 0 }} className="media-player">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player songs={songs} setSongs={setSongs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </motion.div>
    
  );
};

export default MediaPlayer;
