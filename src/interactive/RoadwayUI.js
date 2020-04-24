import React from 'react'
import Car from './Car.js'


const RoadwayUI = ({ showGrid, cars, numCells }) => {
  const radius = 220;
  const circumference = Math.PI * 2 * radius;
  const dashLength = circumference / (numCells * 3)
  let dashColor = "#F7B500"
  let showDashes = true
  let gridLineColor = "#807E78"

  let cells = []
  for (let i = 1; i <= numCells; i++) {
    cells.push({
      angle:360/numCells*i,
      key: i-1
    })
  }

  return (
    <svg className="roadway-container" height="500" width="500">
      <circle className="roadway" stroke="#807E78" strokeWidth="1" fill="transparent"
        r={radius-14} cx="250" cy="250" />
      <circle className="roadway" stroke="#807E78" strokeWidth="1" fill="transparent"
        r={radius+14} cx="250" cy="250" />
      { showDashes && <circle className="roadway-lines" stroke={ dashColor || 'white'} stroke-width="1" fill="transparent"
        r={radius} cx="250" cy="250" style={{strokeDasharray: `${dashLength} ${dashLength*2}`, strokeDashoffset: "5"}} />
      }
      { showGrid && <g id="cells" stroke={ gridLineColor || 'white'} stroke-width="1">
        { cells.map(cell => {
          return <line x1="250" y1="45" x2="250" y2="15" transform={`rotate(${cell.angle}, 250, 250)`} key={cell.key} />
        }) }
      </g> }

      { /* Everything above this line creates the static roadway */}
      <g id="cars"> {
        cars.map((c, i) => {
          return c && <Car key={i} index={i} numCells={numCells} color={c.color} />
        })
      }</g>

    </svg>
  )
}

export default RoadwayUI
