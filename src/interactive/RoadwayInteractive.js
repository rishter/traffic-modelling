import React, { useState, useEffect } from 'react'
import RoadwayUI from './RoadwayUI.js'
import Graph from './Graph.js'
import { getRandomRed } from '../color/randomColor.js'
import './interactive.css'


const RoadwayInteractive = ({ numCells, maxTime, currentStep, showGrid, time, resetTime,
    initialCars, maxVelocity, variableVelocity,
    slowdownProbability, slowdown, showJamCars, showGraph }) => {
  const [currentTimeMap, setCurrentTimeMap] = useState(new Array(maxTime).fill([]))

  useEffect(() => {
    setCurrentTimeMap(generateTimeMap())
  }, [initialCars, maxVelocity, currentStep, slowdownProbability])

  useEffect(() => {
    resetTime(true)
  }, [maxVelocity])


  const makeNextTimeFromCurrentCarState = (cars, time) => {
    let newCars = new Array(numCells).fill(null)
    cars.forEach((c, i) => {
      // for each car that exists
      if (c) {
        let velocity = c.velocity+1
        if (variableVelocity) {
          for (let consideredVelocity = 1; consideredVelocity <= velocity; consideredVelocity++) {
            // start at the car's next immediate position but look at the full distance of velocity
            let consideredPosition = (i + consideredVelocity) % numCells
            if (cars[consideredPosition]) {
              //if there is a car in that position, this car will move to the cell behind it
              velocity = consideredVelocity-1
              break;
            }
            // all positions are free, go ahead! no need to change anything
          }
        }

        if (slowdown && Math.random() <= slowdownProbability) {
          velocity -= 1;
        }

        // so that 1. we're all moving forward, and 2. we're not doing too much
        let v = Math.max(Math.min(velocity, maxVelocity), 0)

        let newPosition = (i+v) % numCells

        // I never got this to work.
        if (showJamCars && v <= 1 && time > 5) {
          // car is jammed
          newCars[newPosition] = {
            velocity: v,
            color: getRandomRed(),
            oldColor: c.color
          }
        } else if (showJamCars && c.oldColor) {
          // car was previously jammed, but isn't anymore
          newCars[newPosition] = {
            velocity: v,
            color: c.oldColor
          }
        } else {
          newCars[newPosition] = {
            velocity: v,
            color: c.color
          }
        }
      }
    })
    return newCars
  }

  const generateTimeMap = () => {
    let carMapOverTime = new Array(maxTime)
    carMapOverTime[0] = [...initialCars]
    for (let t = 1; t <= maxTime; t++) {
      carMapOverTime[t] = makeNextTimeFromCurrentCarState(carMapOverTime[t-1], t)
    }
    return carMapOverTime
  }

  return showGraph ? <Graph timeMap={currentTimeMap} />
    : <RoadwayUI showGrid={showGrid} cars={currentTimeMap[time]} numCells={numCells} />
}

export default RoadwayInteractive
