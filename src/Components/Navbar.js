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
                    <li><Link to="/gallery" >Gallery</Link></li>
                    <li><Link to="/registry" >Registry</Link></li>
                    <li><Link to="/rsvp" >RSVP</Link></li>
                </ul>
            </nav>
            <div></div>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.div`
    a:hover {
        color: #dda15e;
    }
`