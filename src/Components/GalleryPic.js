import React from "react";
import styled from "styled-components";

export default function GalleryPic({ picture }) {
  return (
    <StyledGalleryPic>
        <a href={picture.image} target="_blank" rel="noreferrer" >
            <img alt={picture.altTag} src={picture.image} />
        </a>
    </StyledGalleryPic>
  );
}

const StyledGalleryPic = styled.div`
  width: 30%;

  img {
    border: 1px solid #dda15e; /* Gray border */
    border-radius: 4px; /* Rounded border */
    padding: 5px; /* Some padding */
    width: 100%; /* Set a small width */

    :hover {
    box-shadow: 0 0 2px 1px #bc6c25;
    /* background-color: rgba(0,0,0,0.5); */
  }
  }
`;
