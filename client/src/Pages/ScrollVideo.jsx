import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { throttle } from "lodash";
import Video from "../assets/videos/bridge.mp4";

export default function ScrollVideo() {
  const [videoHasEnded, setVideoHasEnded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [containerHeight, setContainerHeight] = useState("100vh");
  const [isLoaded, setIsLoaded] = useState(false); 
  const videoRef = useRef(null);
  const containerRef = useRef(null);


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
     
      video.load();

     
      const preloadVideo = async () => {
        try {
          
          await video.play();
          video.pause();
          video.currentTime = 0;
          setIsLoaded(true);
        } catch (error) {
          console.error("Video preload failed:", error);
        }
      };

      preloadVideo();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleMetadata = () => {
        const scrollDuration = video.duration / 2;
        const scrollHeight = window.innerHeight * (scrollDuration / 2);
        if (containerRef.current) {
          containerRef.current.style.height = `${scrollHeight}px`;
          setContainerHeight(`${scrollHeight}px`);
        }
      };

      video.addEventListener("loadedmetadata", handleMetadata);
      return () => video.removeEventListener("loadedmetadata", handleMetadata);
    }
  }, []);

  const handleVideoEnded = () => {
    setVideoHasEnded(true);
    setIsSticky(false);
  };

  useEffect(() => {
    const handleIntersection = throttle(() => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        setIsSticky(
          rect.top < window.innerHeight && rect.bottom > 0 && !videoHasEnded
        );
      }
    }, 100);

    window.addEventListener("scroll", handleIntersection);
    return () => window.removeEventListener("scroll", handleIntersection);
  }, [videoHasEnded]);

  useEffect(() => {
    let lastScrollTime = 0;
    let animationFrameId = null;

    const handleScroll = () => {
      if (!videoRef.current || videoHasEnded || !isLoaded) return;

      const video = videoRef.current;
      const container = containerRef.current;

      if (container && isSticky) {
        const now = performance.now();
        if (now - lastScrollTime > 16) {
          lastScrollTime = now;

          const scrollTop = window.scrollY - container.offsetTop;
          const scrollHeight = container.offsetHeight - window.innerHeight;
          const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

          if (Math.abs(progress - video.currentTime / video.duration) > 0.01) {
            const targetTime = progress * video.duration;

            const smoothTime =
              video.currentTime + (targetTime - video.currentTime) * 0.5;
            video.currentTime = smoothTime;

            if (video.buffered.length) {
              const nextSecond = Math.min(smoothTime + 1, video.duration);
              if (video.buffered.end(0) < nextSecond) {
                video.currentTime = video.buffered.end(0);
              }
            }
          }
        }
      }
    };

    const onScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isSticky, videoHasEnded, isLoaded]);

  return (
    <Container ref={containerRef}>
      <VideoWrapper
        isSticky={isSticky}
        hasEnded={videoHasEnded}
        containerHeight={containerHeight}
      >
       
        <video
          ref={videoRef}
          // src={Video}
          // src="https://scrollyvideo.js.org/goldengate.mp4"
          src="https://firebasestorage.googleapis.com/v0/b/hs-mowers-cb290.appspot.com/o/assets%2Fonce%20perfume%2Fvideo.mp4?alt=media&token=ba0f5d3c-4f86-4e67-a8d7-86445732104e"
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            visibility: isLoaded ? "visible" : "hidden",
          }}
        />
      </VideoWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.isSticky ? "100vh" : props.containerHeight)};
  position: ${(props) =>
    props.isSticky && !props.hasEnded ? "fixed" : "relative"};
  top: ${(props) => (props.isSticky && !props.hasEnded ? "0" : "auto")};
  left: 0;
  z-index: 10;
`;


