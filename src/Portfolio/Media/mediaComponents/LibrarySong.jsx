import React from "react";

const librarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {
    
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        audioRef.current.play();

        // Active state
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                };
            }else{
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        if(isPlaying) audioRef.current.play();
        
    };
    
    return (
        <div onClick={songSelectHandler} className={`librarySong ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="info-songs">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default librarySong;