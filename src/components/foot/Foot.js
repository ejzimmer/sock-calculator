import React, { useState, useRef, useEffect } from "react"
import "./Foot.css"
import sizes from "../../sizes.json"

const ROW_GAUGE = 11

export default function Foot({ size }) {
  const [sizeInfo, setSizeInfo] = useState(sizes[size])
  const [footLength, setFootLength] = useState()
  const [sockLength, setSockLength] = useState(0)
  const [gussetStitches, setGussetStitches] = useState(0)

  const lengthInput = useRef(null)

  useEffect(() => {
    const numberOfStitches = sizes[size].toeStitches * 0.75
    const heelLength = numberOfStitches / ROW_GAUGE
    const unroundedLength = (footLength || 0) - heelLength - 0.25
    const roundedLength = Math.round(unroundedLength * 10) / 10
    setSockLength(roundedLength)
  }, [footLength, size])

  useEffect(() => {
    setSizeInfo(sizes[size])
    setGussetStitches(sizes[size].stitchesAfterGussetIncreases / 6)
  }, [size])

  return (
    <>
      <h2>Foot</h2>
      <label htmlFor="foot-length">
        What is the length of the feet these socks are going on (in inches)?
      </label>
      <input
        type="text"
        ref={lengthInput}
        id="foot-length"
        onChange={() => setFootLength(lengthInput.current.value)}
      />
      {footLength && (
        <>
          <p>
            Continue knitting in stocking stitch until the socks measure{" "}
            <span className="stitch-count">{sockLength}"</span>
          </p>

          <h3>Gusset increases</h3>
          <div className="multi-round-instructions">
            <div className="round">Round 1:</div>
            <div className="instruction">
              <span className="needle">Needle 1 (top):</span> K all stitches
            </div>
            <div className="instruction">
              <span className="needle">Needle 2 (sole):</span> K1, M1R, K to 1
              stitch before end, M1L, K1
            </div>
            <div className="round">Round 2:</div>
            <div className="instruction">K all stitches on both needles</div>
          </div>
          <p>
            Knit rounds 1 and 2 another{" "}
            <span className="stitch-count">{sizeInfo.gussetRounds}</span> times.
            You should have a total of{" "}
            <span className="stitch-count">
              {sizeInfo.stitchesAfterGussetIncreases}
            </span>{" "}
            stitches.
          </p>

          <h3>Place markers</h3>
          <p>
            Next, place markers to separate the sole stitches from the gusset
            increase stitches.
          </p>
          <p>
            On needle 2, place a marker after{" "}
            <span className="stitch-count">{gussetStitches}</span> and after{" "}
            <span className="stitch-count">{gussetStitches * 3}</span> stitches.
            You should now have{" "}
            <span className="stitch-count">{gussetStitches}</span> in each
            gusset, and{" "}
            <span className="stitch-count">{gussetStitches * 2}</span> sole
            stitches.
          </p>

          <h3>Final increases</h3>
          <div className="single-round-instructions">
            <div>
              <span className="needle">Needle 1 (top):</span> K all stitches
            </div>
            <div>
              <span className="needle">Needle 2 (sole):</span> K to marker, SM,
              K to marker, SM, K{sizeInfo.finalIncreaseKnits}, [M1R, K2]{" "}
              {sizeInfo.finalIncreaseMakes} times, K1
            </div>
          </div>

          <div className="single-round-instructions">
            <div>
              <span className="needle">Needle 1 (top):</span> K all stitches
            </div>
            <div id="final-increase">
              <span className="needle">Needle 2 (sole):</span> K1, [K2, M1L]{" "}
              {sizeInfo.finalIncreaseMakes} times, K
              {sizeInfo.finalIncreaseKnits}
            </div>
          </div>

          <div className="warning">
            <strong>STOP!</strong> at the first marker and continue to heel. The
            heels are turned one at a time.
          </div>
        </>
      )}
    </>
  )
}
