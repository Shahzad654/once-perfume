import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { throttle } from "lodash";
import Video from "../assets/images/video.mp4";

export default function ScrollVideo() {
  const [videoHasEnded, setVideoHasEnded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [containerHeight, setContainerHeight] = useState("100vh");
  const videoRef = useRef(null);
  const containerRef = useRef(null);

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
    console.log("Video has finished.");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!videoHasEnded) {
          setIsSticky(entry.isIntersecting);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [videoHasEnded]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (!videoRef.current || videoHasEnded) return;

      const video = videoRef.current;
      const container = containerRef.current;

      if (container && isSticky) {
        const scrollTop = window.scrollY - container.offsetTop;
        const scrollHeight = container.offsetHeight - window.innerHeight;
        let progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

        if (window.scrollY < container.offsetTop) {
          progress = 1 - Math.max( 0,Math.min(1, (container.offsetTop - window.scrollY) / scrollHeight));
        }

        //video completion time calcualtion
       if (Math.abs(progress - video.currentTime / video.duration) > 0.05) {
         video.currentTime = progress * video.duration;
       }


        if (progress === 0 && !video.paused) {
          video.pause();
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, videoHasEnded]);

  return (
    <Container ref={containerRef}>
      <VideoWrapper
        isSticky={isSticky}
        hasEnded={videoHasEnded}
        containerHeight={containerHeight}
      >
        <video
          ref={videoRef}
          src={Video}
          type="webm"
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
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

  video {
    width: 100%;
    object-fit: cover;
  }
`;
