import React from "react"
import sizes from "../../sizes.json"

export default function ({ size }) {
  const { castOn, toeStitches } = sizes[size]

  return (
    <>
      <h2>Toe</h2>
      <p>
        Using Judy's Magic Cast On, cast on{" "}
        <span className="stitch-count">{castOn}</span> stitches (
        <span className="stitch-count">{castOn / 2}</span> on each needle).
      </p>
      <p>K all stitches</p>
      <p>
        <span className="round">Round 1:</span> KF&B, K to 2 stitches before end
        of needle, KF&B, K1
      </p>
      <p>
        <span className="round">Round 2:</span> K all stitches
      </p>
      <p>
        Repeat rounds 1 and 2 until there are{" "}
        <span className="stitch-count">{toeStitches}</span> total (
        <span className="stitch-count">{toeStitches / 2}</span> on each needle).
      </p>
    </>
  )
}
