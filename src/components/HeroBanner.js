import { Container } from "@mui/material";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div id="home" className="hero-banner">
      <span className="banner-gradient"></span>
      {/* eslint-disable-next-line */}
      <img
        className="banner-back"
        src="./background.gif"
        data-nsfw-filter-status
        alt=""
      />
      {/* eslint-disable-next-line */}
      <img
        className="banner-dragon"
        src="./dragons/dragon-2.png"
        data-nsfw-filter-status
        alt=""
      />
      {/* eslint-disable-next-line */}
      <img
        className="banner-dragon"
        src="./dragons/dragon-3.png"
        data-nsfw-filter-status
        alt=""
      />
      {/* eslint-disable-next-line */}
      <img
        className="banner-dragon"
        src="./dragons/dragon-4.png"
        data-nsfw-filter-status
        alt=""
      />
      {/* eslint-disable-next-line */}
      <img
        className="banner-dragon"
        src="./dragons/dragon-1.png"
        data-nsfw-filter-status
        alt=""
        style={{ marginLeft: -90 }}
      />
      {/* eslint-disable-next-line */}
      <img
        className="banner-dragon"
        src="./dragons/dragon-5.png"
        data-nsfw-filter-status
        alt=""
      />
      {/* eslint-disable-next-line */}
      <img
        className="banner-dragon"
        src="./dragons/dragon-6.png"
        data-nsfw-filter-status
        alt=""
        style={{ marginLeft: -90 }}
      />
      <Link href="/#mint">
        <div id="mouse-scroll">
          <div className="mouse">
            <div className="mouse-in"></div>
          </div>
          <div>
            <span className="down-arrow-1"></span>
            <span className="down-arrow-2"></span>
            <span className="down-arrow-3"></span>
          </div>
        </div>
      </Link>
      <div className="banner-content">
        <Container>
          <h1>WELCOME TO THE BORED ZILLA CLUB</h1>
          <p>
            The Bored Zillas are an NFT collection of 3333 uniquely generated ERC-721 bitmap Zillas.
          </p>
        </Container>
      </div>
    </div>
  )
}