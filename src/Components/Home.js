import styled from "styled-components";
import hugAtTheRanch from "../Images/HugAtTheRanch.jpg";
// import Northlake from "../Images/Northlake.png";

export default function Home() {
  return (
    <StyledHome>
        <div className="bibleVerse">
            <h2 className="yellowtail">“Scarcely had I passed them when I found the one my heart loves.”</h2>
            <p>- Song of Solomon 3:4 NIV</p>
        </div>
        <div className="weddingDetails">
            <div className="weddingDetailText">
                <h2 className="yellowtail">The Big Day</h2>
                <p>The ceremony and reception will both take place at Northlake Church in Lago Vista. Both will be indoors, so don't sweat the hot weather!</p>
                <div className="whereWhen">
                    <p><b>Where:</b> 3610 Lohman Ford Rd, Lago Vista, TX 78645</p>
                    <p><b>When:</b> August 7th starting at 4pm</p>
                </div>
                <p>Please RSVP <a href="/rsvp" >here</a> by July 7th.</p>
                <p>Taco Bell and wedding cake will be served buffet style!</p>
                <p>To see a full breakdown of the menu, click <a href="https://www.tacobell.com/" target="_blank" rel="noreferrer">here</a></p>
            </div>
            <div className="churchPic" ></div>
            {/* <img alt="Northlake Church" src={Northlake} /> */}
        </div>
        <div className="aboutUsContainer">
            <img alt="Jon hugging Morgan from behind" src={hugAtTheRanch} />
            <div className="aboutUsText">
                <h1 className="yellowtail">About Us</h1>
                <div>
                    <p>Jon and Morgan were two individuals who had grown accustomed to single-dom, but were both frequently “encouraged” by friends and family to keep searching for a partner. In their great humility and excellent grace, Jon and Morgan take this opportunity to officially thank their loved ones for this “loving pressure,” because life truly came into full bloom when they finally found each other.</p>
                    <p>The pair first met through the dating app Bumble on February 28th, 2022. Jon always says that when Morgan reached out to him, something in him knew that he had to meet her. They went on their first date several days later at Pinballz arcade on March 4th, and history was made.</p>
                    <p>It was clear to both of them from the very beginning that theirs would be a friendship for the ages. The joy and belonging felt between the two were immediate, and the laughter hasn’t stopped for a moment since that first meeting. Jon and Morgan have bonded over their mutual love of food, entertainment, and adventure, and they inspire and encourage one another by their shared commitment to faith and Godly values.</p>
                    <p>They knew early on that God had brought them together, and their time together has only affirmed this knowledge again and again. Jon proposed on DATE LOL YOURE CRAZY at LOL I HATE MYSELF. The decision to experience a shared life and to love each other forever came easily to the pair, and they could not be more excited and grateful to share this special day with you!
                    </p>
                </div>
            </div>
        </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
h2 {
    font-size: 4rem;
}
    .bibleVerse {
        padding: 5rem 0 8rem;
        h2 {
            color: #606c38;
        }
    }
    .weddingDetails {
        display: flex;
        background: white;
        margin: 3rem;
        padding: 3rem;
        align-items: center;
        border: solid #bc6c25 7px; 
        h2 {
            color: #dda15e;
        }
        .weddingDetailText {
        }
        .churchPic {
            background-image: url("../Images/Northlake.png");
            height:30vh;
            width: 100%;
            background-position:center;
            background-repeat: no-repeat;
            background-size: cover;
            /* background-attachment: fixed; */
        }
        img {
            height: 30rem;
        }
    }
    h1 {
        font-size: 5rem;
    }
    .aboutUsContainer {
        display: flex;
        padding: 3rem;
        align-items: center;
    }
    .aboutUsText {
        padding-left: 3rem;
        div p {
            padding: 1rem;
        }
    }
    img {
        /* width: 30rem; */
        height: 60rem;
    }
`