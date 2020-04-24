import React from 'react'

//To be entirely clear, I found the car svg this was inspired by following link:
//https://code.sololearn.com/W7bCV54Nt07e/

const Car = ({color, index, numCells}) => {
  // color = `crimson`

  let scale = 3.0/numCells

  const indexToRotation = (i) => {
    const carRotationOffset = 0.8
    return (360/numCells * i) + carRotationOffset
  }
  return (
    <g transform={`rotate(${indexToRotation(index)}, 250, 250)`}>
      <svg className="car" width={365*scale} height={185*scale} x="250" y="23">
        {/* top */}
        <rect x="70" y="10" width={220*scale} height={130*scale} fill="transparent" rx={150*scale} stroke={color} stroke-width={10*scale} />
        {/* body */}
        <rect x={10*scale} y={70*scale} width={340*scale} height={80*scale} fill={color} rx={30*scale} />
        <g>
          {/* left line */}
          <line x1={145*scale} y1={10*scale} x2={145*scale} y2={80*scale} stroke={color} stroke-width={10*scale}/>
          {/* right line */}
          <line x1={215*scale} y1={10*scale} x2={215*scale} y2={80*scale} stroke={color} stroke-width={10*scale}/>
        </g>
        <g>
          {/* left bumper */}
          <rect x={0*scale} y={110*scale} width={40*scale} height={20*scale} fill="#999" rx={10*scale} />
          {/* right bumper */}
          <rect x={325*scale} y={110*scale} width={40*scale} height={20*scale} fill="#999" rx={10*scale} />
        </g>
        {/* left wheel */}
        <g>
          <circle r={`${40*scale}px`} fill="#222" stroke="white" stroke-width={7*scale} cx={90*scale} cy={140*scale}/>
          <circle r={`${15*scale}px`} fill="#555" cx={90*scale} cy={140*scale}/>
        </g>
        {/* right wheel */}
        <g>
          <circle r={`${40*scale}px`} fill="#222" stroke="white" stroke-width={7*scale} cx={270*scale} cy={140*scale}/>
          <circle r={`${15*scale}px`} fill="#555" cx={270*scale} cy={140*scale}/>
        </g>
        <g>
        {/* gold light */}
          <circle r={`${15*scale}px`} fill="gold" cx={340*scale} cy={90*scale}/>
        {/* orange light */}
          <circle r={`${10*scale}px`} fill="orange" cx={15*scale} cy={90*scale}/>
        </g>
      </svg>
    </g>
  )
}

export default Car
