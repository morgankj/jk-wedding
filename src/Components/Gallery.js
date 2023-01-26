import React from "react";
import styled from "styled-components";
import imageArr from "./ImageArray";
import GalleryPic from "./GalleryPic";

export default function Gallery() {
  return (
    <StyledGallery>
      <h1>GALLERY</h1>
      <div className="galleryContainer" >
        { imageArr.map(obj => (<GalleryPic key={obj.id} picture={obj} />))}
      </div>
    </StyledGallery>
  );
}

const StyledGallery = styled.div`
    .galleryContainer {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;
