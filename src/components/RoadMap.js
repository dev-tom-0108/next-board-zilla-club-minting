import { Container } from "@mui/material";

export default function RoadMap() {
  return (
    <div id="roadmap" className="roadmap">
      <Container>
        <div className="section-title">
          <h1>Roadmap</h1>
          <p>The Bored Zilla Club has defined and ambitious plans for their Zillas. Starting from $ZILLA tokens (no staking required), which can be burned for breeding MekaZillas, and a PVP game where $ZILLA tokens can be burned for in-game purchases from the Weapon Shop. </p>
        </div>
        <div className="roardmap-item">
          <div className="item-box">
            <h2>Phase 1</h2>
            <h3>Mint (Late November)</h3>
            <p>We will release our collection of 3,333 unique Zillas. After the mint completion PVP game development begins.</p>
            {/* eslint-disable-next-line */}
            <img
              src="./dragon-1-160x160.png"
              data-nsfw-filter-status
              alt=""
            />
          </div>
        </div>
        <div className="roardmap-item">
          <div className="item-box">
            <h2>Phase 2</h2>
            <h3>ZILLA token will be released (Early December) What is ZILLA?</h3>
            <p>ZILLA is a token on the Ethereum blockchain, that is used as a utility token for the Bored Zilla Club collection. ZILLA tokenomics are built to reward holders weekly, simply for holding a Zilla. ZILLA tokens can be used to mutate your Zilla, and for in game purchases to build your Zilla&apos;s strength.</p>
            {/* eslint-disable-next-line */}
            <img
              src="./dragon-2-160x160.png"
              data-nsfw-filter-status
              alt=""
            />
          </div>
        </div>
        <div className="roardmap-item">
          <div className="item-box">
            <h2>Phase 3</h2>
            <h3>MekaZillas will be released (Mid-Late December)</h3>
            <p>One  of the utilities of ZILLA will be its mutation, in which a certain amount of ZILLA will be burned in exchange for MekaZillas. Traits of MekaZillas will be completely different, and will have their own collection. Mutating into a MekaZilla will require two Zillas and a hard-drive. Hard-drives will be available for purchase for a small amount of ZILLA.</p>
            {/* eslint-disable-next-line */}
            <img
              src="./dragon-3-160x160.png"
              data-nsfw-filter-status
              alt=""
            />
          </div>
        </div>
        <div className="roardmap-item">
          <div className="item-box">
            <h2>Phase 4</h2>
            <h3>PVP game development (Quarter 1 of 2022)</h3>
            <p>After minting has completed, we will begin the development of a PVP game. This game will allow Zillas to compete in a 2D Metaverse, where they will battle to see who the strongest Zilla is. There will be weekly tournaments where winners can earn ZILLA, and receive exclusive roles for their triumphs. Face off against fellow Zilla and MekaZilla holders and climb the ranks. Get weapons from the Weapon Shop to gain an advantage against others. Who can build the best squad and climb to the top of the ranks? Everyone starts at the bottom and slowly or rapidly gains ELO to get to the next rank. For further information about Weapon Shop and how to earn weapons check out our discord channel</p>
            {/* eslint-disable-next-line */}
            <img
              src="./dragon-4-160x160.png"
              data-nsfw-filter-status
              alt=""
            />
          </div>
        </div>
      </Container>
      <div className="roadmap-foot">
        {/* eslint-disable-next-line */}
        <img
          src="./footpoint.png"
          alt=""
          data-nsfw-filter-status
        />
      </div>
      <div className="roadmap-foot">
        {/* eslint-disable-next-line */}
        <img
          src="./footpoint.png"
          alt=""
          data-nsfw-filter-status
        />
      </div>
    </div>
  )
}