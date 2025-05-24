import { useRef, useEffect, useState } from "react";
import "./VideoLoop.css";

function VideoLoop() {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(true); // Start muted

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = volume;
      video.muted = muted;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay bị chặn:", error);
        });
      }
    }
  }, [muted, volume]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && muted) {
      setMuted(false); // bật tiếng nếu kéo volume > 0
    } else if (newVolume === 0) {
      setMuted(true); // tắt tiếng nếu kéo về 0
    }
  };

  const toggleMute = () => {
    if (muted) {
      setMuted(false);
      if (volume === 0) setVolume(0.5); // bật âm lượng mặc định nếu volume đang 0
    } else {
      setMuted(true);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src="/images/video/clip1.mp4"
        autoPlay
        loop
        playsInline
        muted={muted}
        className="responsive-video"
      />
      <div className="volume-control">
        {/* Icon loa, nhấn vào sẽ toggle mute */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Bật tiếng" : "Tắt tiếng"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontSize: "20px",
          }}
        >
          {muted || volume === 0 ? "🔇" : "🔊"}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={muted ? 0 : volume}
          onChange={handleVolumeChange}
          aria-label="Điều chỉnh âm lượng"
        />
      </div>
    </div>
  );
}

export default VideoLoop;
