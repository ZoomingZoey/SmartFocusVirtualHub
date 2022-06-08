import { useState, useRef, useEffect } from "react";
import { getStrapiURL } from "../lib/api";
import { toHHMMSS } from "../lib/helpers";

import {
  Button,
  ProgressBar
} from 'react-bootstrap';

const PodcastMediaController = ({ media }) => {
  const playbackSpeeds = [1, 1.25, 1.5];
  const [playing, setPlaying] = useState(false);
  const [playbackSpeedIndex, setPlaybackSpeedIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    setPlaying(prev => !prev);
    if (!playing) audioRef.current.play();
    else audioRef.current.pause();
  }

  const handleSkipBackwards = () => {
    audioRef.current.currentTime -= 30;
  }

  const handleSkipForwards = () => {
    audioRef.current.currentTime += 30;
  }

  const handlePlaybackSpeed = () => {
    setPlaybackSpeedIndex(prev => prev < playbackSpeeds.length - 1 ? prev + 1 : 0);
  }

  useEffect(() => {
    audioRef.current.playbackRate = playbackSpeeds[playbackSpeedIndex];
  }, [playbackSpeedIndex]);

  const handleMute = () => {
    setMuted(prev => !prev);
    audioRef.current.muted = !muted;
  }

  const handleMetadataLoaded = () => {
    if (audioRef.current.duration) {
      setDuration(audioRef.current.duration);
    }
  }
  // git remote set-url origin abc@***.com:path/to/repo
  const handleTimeUpdate = () => {
    setProgress(audioRef.current.currentTime);
  }

  const handleProgress = (e) => {
    audioRef.current.currentTime = Math.floor(audioRef.current.duration) * (e.nativeEvent.offsetX / e.target.offsetWidth);
  }

  return (
    <div className="podcast-media-controller bg-dark rounded p-2">
      <div className="scrubber">
        <ProgressBar min={0} now={progress} max={duration} onClick={handleProgress}/>
        <div className="d-flex justify-content-between">
          <span className="elapsed-time time">{toHHMMSS(progress)}</span>
          <span className="duration time">{toHHMMSS(duration)}</span>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-between">
        <Button variant="outline-light" onClick={handlePlaybackSpeed} className="px-3" title="Change playback speed">{playbackSpeeds[playbackSpeedIndex]}x</Button>
        <Button variant="outline-light" onClick={handleSkipBackwards} title="Skip backwards">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-skip-backward-fill" viewBox="0 0 16 16">
            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
          </svg>
        </Button>
        <Button variant="primary" onClick={handlePlay} title={playing ? "Pause" : "Play"}>
          {playing ?
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          }
        </Button>
        <Button variant="outline-light" onClick={handleSkipForwards} title="Skip forwards">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-skip-forward-fill" viewBox="0 0 16 16">
            <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </Button>
        <Button variant={muted ? "danger" : "outline-light"} onClick={handleMute} title={muted ? "Unmute" : "Mute"}>
          {muted ?
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-volume-mute-fill" viewBox="0 0 16 16">
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
              <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
              <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
            </svg>
          }
        </Button>
      </div>
      <audio ref={audioRef} onLoadedMetadata={handleMetadataLoaded} onTimeUpdate={handleTimeUpdate}>
        <source src={getStrapiURL(media.data.attributes.url)} type={media.data.attributes.mime}/>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
 
export default PodcastMediaController;