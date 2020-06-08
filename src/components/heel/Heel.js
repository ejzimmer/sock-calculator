import React from 'react'
import './Heel.css'
import sizes from '../../sizes.json'

export default function Heel({size}) {
  const [sizeInfo, setSizeInfo] = React.useState(sizes[size])

  React.useEffect(() => {
    setSizeInfo(sizes[size])
  }, [size])

  return (
    <section>
      <h2>Heel</h2>
      <h3>Short-row heel turn</h3>

      <div className="single-round-instructions">
        <div><span className="round">Row 1: </span>K to 2 stitches before marker, W&T</div>
        <div><span className="round">Row 2: </span>[P1, Sl1] to 2 stitches before marker, W&T</div>
        <div><span className="round">Row 3: </span>K to 2 stitches before gap, W&T</div>
        <div><span className="round">Row 4: </span>[P1, Sl1] to 2 stitches before gap, W&T</div>
      </div>

      <p>
        Repeat rows 3 & 4 until there are <span className="stitch-count">{sizeInfo.wrappedStitches + 1}</span> stitches on each side
        - <span className="stitch-count">{sizeInfo.wrappedStitches}</span> wrapped and the very outside stitch unwrapped - 
        plus <span className="stitch-count">{sizeInfo.centreStitches}</span> centre stitches.
      </p>

      <p>K to first wrap. Lift & knit all but the last wrap. Lift last wrap, SSK. Turn.</p>
      <p>[P1, Sl1] to first wrap. Lift & purl all but the last wrap. Lift last wrap, P2tog. Turn.</p>
      <p><span className="stitch-count">{sizeInfo.finalSoleStitches}</span> sole stitches remain.</p>

      <h3>Heel flap</h3>
      <div className="single-round-instructions">
      <div><span className="round">Row 1: </span>K to 1 stitch before marker, RM, SSK. Turn.</div>
        <div><span className="round">Row 2: </span>[P1, Sl1] to 1 stitch before marker, RM, P2tog. Turn.</div>
        <div><span className="round">Row 3: </span>K to 1 stitch before gap, SSK. Turn.</div>
        <div><span className="round">Row 4: </span>[P1, Sl1] to 1 stitch before gap, P2tog. Turn.</div>
      </div>

      <p>
        Repeat rows 3 & 4 until 2 stitches remain outside each gap. <span className="stitch-count">{sizeInfo.finalSoleStitches + 4}</span> stitches 
        remain on needle 1.
      </p>

      <p>
        K to 1 stitch before gap, SSK, K1. If this is the first sock, return to the <a href="#final-increase">final increase row</a> and
        complete the second heel. Otherwise, return to working in the round.
      </p>
    </section>
  )
}