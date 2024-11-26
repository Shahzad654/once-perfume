import React from 'react'
import styled from "styled-components";
import Video2 from "../assets/videos/video2.webm";


export default function EndingVideo() {
  return (
    <>
      <StyledEndingVideo>
        <video src={Video2} autoPlay muted loop></video>
      </StyledEndingVideo>
    </>
  );
}

const StyledEndingVideo = styled.div`
  position: relative;
  height: 100vh;
  overflow-x: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

