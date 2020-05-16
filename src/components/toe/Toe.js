import React from 'react'
import './Toe.css'
import sizes from '../../sizes.json'

export default function({ size }) {
  const details = sizes[size]
  const castOn = details && details['cast-on']
  const toeStitches = details && details['toe-stitches']

  return (
    <section>
      <h2>Toe</h2>
      { details ?
          (<>
            <p>
              Using Judy's Magic Cast On, cast on <span className="stitch-count">{castOn}</span> stitches (<span className="stitch-count">{castOn / 2}</span> on each needle).
            </p>
            <p>Knit all stitches</p>
            <p><span className="round">Round 1:</span> KF&B, K to 2 stitches before end of needle, KF&B, K1</p>
            <p><span className="round">Round 2:</span> K all stitches</p>
            <p>Repeat rounds 1 and 2 until there are <span className="stitch-count">{toeStitches}</span> total (<span className="stitch-count">{toeStitches / 2}</span> on each needle).</p>
          </>)
        : <p>To continue, please select a size from above</p>
      }
    </section>
  )
}