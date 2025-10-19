import React, { createContext, useState, useEffect, useRef } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    // Music
    const [musicOn, setMusicOn] = useState(false);
    const audioRef = useRef(null);

    // Play / pause music
    useEffect(() => {
        if (audioRef.current) {
            if (musicOn) {
                audioRef.current.play().catch(() => {
                    console.log("⚠️ User interaction needed before audio can play");
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [musicOn]);

    return (
        <GlobalContext.Provider
            value={{ darkMode, setDarkMode, musicOn, setMusicOn, audioRef }}
        >
            {children}
            {/* audio player tersembunyi */}
            <audio ref={audioRef} src="/music.mp3" loop />
        </GlobalContext.Provider>
    );
};
