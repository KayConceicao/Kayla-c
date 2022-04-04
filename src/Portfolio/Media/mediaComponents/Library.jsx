import React from "react";
import librarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Music Menu</h2>
            <div className="library-songs">
                {songs.map(song =>  (
                    <librarySong setSongs={setSongs} songs={songs} song={song} setCurrentSong={setCurrentSong}
                    id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} />
                ))}
                 
            </div>
        </div>
    );
};

export default Library;