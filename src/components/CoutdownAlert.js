import { Container } from "@mui/material";
import { useState } from "react";
import Countdown from 'react-countdown';

export default function CoutdownAlert({ startTime, ...props }) {
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleTime = (e) => {
    setHours(e.hours < 10 ? `0${e.hours}` : e.hours);
    setMinute(e.minutes < 10 ? `0${e.minutes}` : e.minutes);
    setSecond(e.seconds < 10 ? `0${e.seconds}` : e.seconds);
    const now = new Date()
    if (startTime < now) setComplete(true);
  }


  return (
    <div className="countdown-alert" style={{ display: complete ? "none" : "block" }}>
      <Container>
        <div className="alert-content">
          <div className="info">
            <h4>The pre-sale stage will end in just time.</h4>
            <p>In this state, only owners in the whitelist can mint NFTs.</p>
          </div>
          <div className="countdown">
            <div style={{ display: "none" }}>
              <Countdown date={startTime} onTick={(e) => handleTime(e)} onComplete={() => setComplete(true)} />
            </div>
            <div className="time-item">
              <h2>{hours}<span>:</span>{minute}<span>:</span>{second}</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}