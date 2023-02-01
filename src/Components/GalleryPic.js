import React from "react";
import styled from "styled-components";

export default function GalleryPic({ picture }) {
  return (
    <StyledGalleryPic className="galleryPic">
        <a href={picture.image} target="_blank" rel="noreferrer" >
            <div className="picContainer">
                <div className="pic"
                    style= {{
                        backgroundImage: "url(" + picture.image + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height:"40vh",
                        border: "2px solid #dda15e",
                    }}
                    ><p>{picture.text}</p>
                </div>
            </div>
        </a>
    </StyledGalleryPic>
  );
}

const StyledGalleryPic = styled.div`
    width: 30%;
    margin: 1.5% auto;

    .pic p {
        visibility: hidden; 
    }
    .pic:hover {
        background-color: rgba(0, 0, 0, 0.5);;
        background-blend-mode: overlay;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            visibility: visible;
            margin: 10%;
        }
    }
`;
