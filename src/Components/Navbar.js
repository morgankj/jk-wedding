import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <StyledNavbar>
            <a href="/" id="mainLogo">
                <h3 className="yellowtail" >J&M</h3>
            </a>
            <nav>
                <ul>
                    <li><Link to="/" >OurStory</Link></li>
                    <li><Link to="/gallery" >Gallery</Link></li>
                    <li><Link to="/registry" >Registry</Link></li>
                    <li><Link to="/rsvp" >RSVP</Link></li>
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
    
    h3 {
        color: #283618;
        :hover {
            color: #606c38;
        }
    }
    #mainLogo, ul {
        display: flex;
    }
    #mainLogo {
        font-size: 3.2rem;
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