import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Video from "../assets/images/video.mp4";

export default function ScrollVideo() {
    const [videoHasEnded, setVideoHasEnded] = useState(false);


     const videoRef = useRef(null);
     const scrollTimeoutRef = useRef(null);


     const handleVideoEnded = () => {
       setVideoHasEnded(true);
       console.log("Video has finished.");
     };

     useEffect(() => {
       if (videoRef.current) {
         const videoHeight = videoRef.current.clientHeight;
         console.log("Video height:", videoHeight);
       }
     }, []);


      useEffect(() => {
        const handleScroll = () => {
          if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.playbackRate = 1.5;
          }

          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }

          scrollTimeoutRef.current = setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }, 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
      }, []);



  return (
    <>
      <StyledVideo>
        <video
          ref={videoRef}
          src={Video}
          width="100%"
          muted
          onEnded={handleVideoEnded}
          style={{ objectFit: "cover" }}
        />
      </StyledVideo>
    </>
  );
}


const StyledVideo = styled.div`
  height: 100vh;
`;