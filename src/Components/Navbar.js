import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <StyledNavbar>
            <a href="/" id="mainLogo">
                <h3>J&M</h3>
            </a>
            <nav>
                <ul>
                    <li><Link to="/" >OurStory</Link></li>
                    <li><Link to="/rsvp" >RSVP</Link></li>
                    <li><Link to="/registry" >Registry</Link></li>
                    <li><Link to="/gallery" >Gallery</Link></li>
                </ul>
            </nav>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    background-color: #283618;
    
    h3 {
        color: #bc6c25;
        -webkit-text-stroke: 1px #fefae0;
        font-size: 3.9rem;
        :hover {
            color: #606c38;
        }
    }
    #mainLogo, ul {
        display: flex;
    }
    a {
        margin: 0 2rem;
        :hover {
            color: #dda15e;
        }
    }
    ul {
        list-style-type: none;
    }
`