import React, { useMemo } from 'react'
import './Toe.css'
import sizes from '../../sizes.json'
import RowCounter from '../row-counter/RowCounter'
import Section from '../section/Section'

const getRows = (castOn, toeStitches) => {
  const start = castOn / 2
  const end = toeStitches / 2

  const rows = []
  for (let i = start; i <= end; i += 2) {
    rows.push(i)
    rows.push(i)
  }

  return rows
}

export default function({ size }) {
  const { castOn, toeStitches } = sizes[size]
  const rows = useMemo(() => getRows(castOn, toeStitches), [castOn, toeStitches]);

  return (
    <Section id="toe">
      <h2>Toe</h2>
      <p data-testid="cast-on-instructions">
        Using Judy's Magic Cast On, cast on <span className="stitch-count">{castOn}</span> stitches (<span className="stitch-count">{castOn / 2}</span> on each needle).
      </p>
      <p>K all stitches</p>
      <p><span className="round">Round 1:</span> KF&B, K to 2 stitches before end of needle, KF&B, K1</p>
      <p><span className="round">Round 2:</span> K all stitches</p>
      <p>Repeat rounds 1 and 2 until there are <span className="stitch-count">{toeStitches}</span> total (<span className="stitch-count">{toeStitches / 2}</span> on each needle).</p>
      <RowCounter id="toe" rowLabels={rows} />
    </Section>
  )
}