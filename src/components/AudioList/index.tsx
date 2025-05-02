import React, { ReactNode, useState, useRef } from 'react';
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from './styles.module.css'; // Erstelle diese CSS-Datei

export default function AudioList({ audioFiles }): ReactNode {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = audioFiles[currentTrackIndex];

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioFiles.length);
    setIsPlaying(false); // Beim Wechsel stoppen
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + audioFiles.length) % audioFiles.length);
    setIsPlaying(false); // Beim Wechsel stoppen
  };

  const handleEnded = () => {
    // Automatisches Weiterschalten zum nächsten Titel
    handleNext();
    setIsPlaying(true); // Starte den nächsten Titel automatisch
    audioRef.current.play().catch(error => {
      // Verhindere "Play request was interrupted" Fehler, falls kein Audio geladen ist
      console.error("Error playing audio:", error);
      setIsPlaying(false);
    });
  };

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                return (
    <div className={styles.audioList}>
      <h3>Audio-Wiedergabe</h3>
      <ul className={styles.trackList}>
        {audioFiles.map((track, index) => (
          <li key={index} className={index === currentTrackIndex ? styles.active : ''}>
            {track.title}
          </li>
        ))}
      </ul>

      {currentTrack && (
        <div className={styles.player}>
          <h4>{currentTrack.title}</h4>
          <audio
            ref={audioRef}
            src={currentTrack.src}
            onEnded={handleEnded}
          />
          <div className={styles.controls}>
            <button onClick={handlePrevious} aria-label="Vorheriger Titel">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/>
              </svg>
            </button>
            <button onClick={handlePlayPause} aria-label={isPlaying ? 'Pause' : 'Wiedergabe'}>
              {isPlaying ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14zm10-8l-6 4V7l6 4z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14zm10-8l-6 4V7l6 4z"/>
                </svg>
              )}
            </button>
            <button onClick={handleNext} aria-label="Nächster Titel">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
    );
        }}
        </BrowserOnly>
  );
}