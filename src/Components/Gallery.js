import React from "react";
import styled from "styled-components";
import { adventureArr, engagementArr } from "./ImageArray";
import GalleryPic from "./GalleryPic";

export default function Gallery() {
  return (
    <StyledGallery>
      <h1>Gallery</h1>
      <h2 className="enggHeader">- Engagement Photos -</h2>
      <div className="galleryContainer">
        {engagementArr.map((obj) => (
          <GalleryPic key={obj.id} picture={obj} />
        ))}
      </div>
      <h2 className="advHeader">- Fun Adventures -</h2>
      <div className="galleryContainer">
        {adventureArr.map((obj) => (
          <GalleryPic key={obj.id} picture={obj} />
        ))}
      </div>
    </StyledGallery>
  );
}

const StyledGallery = styled.div`
  h2 {
    font-size: 4rem;
  }
  .enggHeader {
    color: #606c38;
  }
  .advHeader {
    margin-top: 2%;
    color: #bc6c25;
  }
  .galleryContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
