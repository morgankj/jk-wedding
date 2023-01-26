import React from "react";
import styled from "styled-components";

export default function GalleryPic({ picture }) {
  return (
    <StyledGalleryPic>
      <img alt={picture.altTag} src={picture.image} />
    </StyledGalleryPic>
  );
}

const StyledGalleryPic = styled.div`
    width: 30%;

    img {
        width: 100%;
        height: 500px;
    }
`;