import { Container } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CountdownAlert from "./CoutdownAlert";
import { ActionButton, MintButton } from "./styleHook";
import LoadingSpin from "react-loading-spin";

export default function MintBanner({
  connected,
  mint,
  balance,
  increaseAmount,
  decreaseAmount,
  totalMinted,
  currentStage,
  amount,
  totalPrice,
  isLoading,
  timeLimit,
  started,
  startedTime,
  incLoding,
  decLoding,
  currentPrice,
  locked,
  ...props
}) {
  return (
    <div id="mint" className="mint-banner">
      {started &&
        <CountdownAlert startTime={startedTime} />
      }
      <Container style={{ minHeight: "100vh", padding: "120px 0" }}>
        <div className="mint-banner-content">
          <div className="intro-section">
            {/* eslint-disable-next-line */}
            <img
              src="./NFTs.gif"
              className="mint-intro-img"
              data-nsfw-filter-status
              alt=""
            />
            <span className="img-mask"></span>
          </div>
          <div className="mint-box">
            {connected && started &&
              <div className="stage-ribbon" style={{ background: currentStage === 1 ? "#3f7800" : "#006278" }}>
                {currentStage === 0 ? "PRE" : "PUBLIC"}&nbsp;SALE STAGE
              </div>
            }
            <h2>Mint your Bored Zilla</h2>
            <p>Enter the amount of Bored Zillas
              you would like to mint.</p>
            <h4>Price per Bored Zilla</h4>
            <h3><span>{currentPrice}</span> ETH Each</h3>
            <h4>{locked ? <span className="locked">LOCKED</span> : totalMinted}/3333 minted</h4>

            <ButtonGroup variant="contained" fullWidth style={{ marginTop: 15 }}>
              <ActionButton onClick={decreaseAmount} disabled={decLoding}>
                {!decLoding ? <RemoveRoundedIcon /> : <LoadingSpin size="24px" width="4px" />}
              </ActionButton>
              <ActionButton disabled>{amount}</ActionButton>
              <ActionButton onClick={increaseAmount} disabled={incLoding}>
                {!incLoding ? <AddRoundedIcon /> : <LoadingSpin size="24px" width="4px" />}
              </ActionButton>
            </ButtonGroup>
            <div className="mint-total">
              <div>
                <h4>Total</h4>
                <h3><span>{locked ? <span className="locked">LOCKED</span> : totalPrice && totalPrice.slice(0, 4)}</span>ETH</h3>
              </div>
              <div>
                <h4>Your balance</h4>
                <h3><span>{locked ? <span className="locked">LOCKED</span> : balance && balance.slice(0, 4)}</span>ETH</h3>
              </div>
            </div>
            <MintButton variant="contained" fullWidth onClick={mint} disabled={isLoading}>
              {!isLoading ? "MINT" : <LoadingSpin size="34px" width="4px" />}
            </MintButton>
          </div>
          <div className="intro-section">
            {/* eslint-disable-next-line */}
            <img
              src="./NFTs-r.gif"
              className="mint-intro-img"
              data-nsfw-filter-status
              alt=""
            />
            <span className="img-mask"></span>
          </div>
        </div>
      </Container>
      <div className="mint-foot-pattern">
        {/* eslint-disable-next-line */}
        <img
          src="./footpoint.png"
          data-nsfw-filter-status
          alt=""
        />
      </div>
      <div className="mint-foot-pattern">
        {/* eslint-disable-next-line */}
        <img
          src="./footpoint.png"
          data-nsfw-filter-status
          alt=""
        />
      </div>
    </div>
  )
}