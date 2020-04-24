import React from 'react'


const Graph = ({ timeMap }) => {
  let boxSize = 5

  return <svg className="graph">
    { timeMap.map((positions, t) => {
        return positions.map((car, p) => {
          return <rect x={t*boxSize} y={500-p*boxSize} className={`cell t${t}p${p} ${car && 'filled'}`} height={boxSize} width={boxSize} />
        })
    })}
    </svg>

}

export default Graph
