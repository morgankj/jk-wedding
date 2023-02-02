import React from "react";
import styled from "styled-components";
import imageArr from "./ImageArray";
import GalleryPic from "./GalleryPic";

export default function Gallery() {
  return (
    <StyledGallery>
      <h1>Gallery</h1>
      <h2>Engagement Photos</h2>
      <h2>Our Adventures</h2>
      <div className="galleryContainer" >
        { imageArr.map(obj => (<GalleryPic key={obj.id} picture={obj} />))}
      </div>
    </StyledGallery>
  );
}

const StyledGallery = styled.div`
h2 {
  font-size: 4rem;
}
    .galleryContainer {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
`;
