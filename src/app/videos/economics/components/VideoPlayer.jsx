//* Packages Imports */
import React, { useState, useEffect } from "react";
import { formatTime } from "../utils/formatTime";
import { Maximize, Minimize, Volume2, VolumeX } from "lucide-react";
import './style.css'
const VideoDetails = ({ video }) => {
  return (
    <div className="p-4 mt-4 bg-gray-200 rounded-lg">
      <h2 className="mb-2 text-lg font-semibold">{video.title}</h2>
      <span className="text-sm font-bold opacity-70">
        Creator: Harendra
      </span>
      <p className="mt-2 text-gray-600">{video.description}</p>
    </div>
  );
};

const VideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [videoElement, setVideoElement] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    if (videoElement) {
      setIsPlaying((prevState) => {
        const newState = !prevState;
        newState ? videoElement.play() : videoElement.pause();
        return newState;
      });
    }
  };

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
    setDuration(event.target.duration);
  };

  const handleSeek = (time) => {
    if (videoElement) {
      videoElement.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoElement) {
      videoElement.playbackRate = speed;
      isPlaying && videoElement.play();
    }
  };

  const handleVolumeChange = (vol) => {
    setVolume(vol);
    if (videoElement) videoElement.volume = vol;
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const element = document.getElementById("videoPlayer");
    setVideoElement(element);
  }, []);

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  return (
    <div>
      <div className="relative ">
        <div class="aspect-w-16 aspect-h-9 youtube-container">
          <iframe src={"https://www.youtube.com/embed/" + `${video.sources[0]}`} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen="true"></iframe>
        </div>
      </div>
      <VideoDetails video={video} />
    </div>
  );
};

export default VideoPlayer;

