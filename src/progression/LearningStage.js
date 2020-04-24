import React, { useState, useEffect } from 'react'
import LearningStep from './LearningStep.js'
import RoadwayInteractive from '../roadway/RoadwayInteractive.js'
import { getRandomColor } from '../color/randomColor.js'

// Holds all the information for learning
// includes learning steps which are individually contained pieces of content
// and the visual components of the interactive
const LearningStage = ({steps, currentStepIndex, decrementCurrentStep, incrementCurrentStep}) => {
  let currentStep = steps[currentStepIndex]
  let [time, setTime] = useState(1)
  let [isPlaying, setIsPlaying] = useState(false)
  let [showGrid, setShowGrid] = useState(false)


  const initialStepByStep = currentStep.uiOptions && currentStep.uiOptions.defaultStepByStep

  let [stepByStep, setStepByStep] = useState(initialStepByStep)

  let [maxVelocity, setMaxVelocity] = useState(currentStep.carOptions ? currentStep.carOptions.defaultMaxVelocity : 1)
  let [numCars, setNumCars] = useState(currentStep.initialCarIndices.length)
  let [slowdownProbability, setSlowdownProbability] = useState(currentStep.carOptions ? currentStep.carOptions.slowdownProbability : null)

  // These are for personal testing, might become options later
  const numCells = 50
  const maxTime = 100
  let initialCarBuilder = new Array(numCells).fill(null)

  const carConstructor = () => {
    return {
      velocity: currentStep.interactiveOptions.startFast ? maxVelocity : 1,
      color: getRandomColor()
    }
  }

  // populate the initial set of cars for that particular interactive
  if (currentStep.initialCarIndices) {
    currentStep.initialCarIndices.forEach((index) => {
      initialCarBuilder[index] = carConstructor()
    });
  }
  let [initialCars, setInitialCars] = useState(initialCarBuilder)

  useEffect(() => {
    stopTime()
  }, [stepByStep])

  useEffect(() => {
    arrangeCars(numCars)
  }, [numCars])

  // what needs to change when the step changes
  useEffect(() => {
    stopTime()
    setMaxVelocity(currentStep.carOptions ? currentStep.carOptions.defaultMaxVelocity : 1)
    setStepByStep(initialStepByStep)
    resetTime(true)
  }, [currentStepIndex])

  // sets up the automatic continuation of play, pause, stop
  useEffect(() => {
    let interval = null;

    if (isPlaying && time < maxTime) {
      interval = setInterval(() => {
          incrementTime()
      }, 80)
    } else if (time === maxTime || !isPlaying){
      clearInterval(interval)
      if (isPlaying) {
        setIsPlaying(false)
      }
    }
    return () => {
      clearInterval(interval)
    }
  }, [isPlaying, time])

  const playTime = () => {
    setIsPlaying(true)
  }

  const stopTime = () => {
    setIsPlaying(false)
  }

  const incrementTime = () => {
    setTime(time+1)
  }

  const resetTime = (followConfig = false) => {
    setTime(1)
    setNumCars(followConfig ? currentStep.initialCarIndices.length : numCars)
  }

  const updateGrid = (e) => {
    setShowGrid(!showGrid)
  }

  const updateStepByStep = (e) => {
    setStepByStep(!stepByStep)
  }

  const arrangeCars = (num) => {
    let carBuilder = new Array(numCells).fill(null)
    let carsAdded = 0;
    let index = 0;
    while (carsAdded < num) {
      while (carBuilder[index]) {
        index = (index + 1) % numCells;
      }
      carBuilder[index] = carConstructor()
      index = (index + Math.round(numCells/num)) % numCells
      carsAdded++
    }
    return setInitialCars(carBuilder)
  }

  let stepProps = {
    step: currentStep,
    decrementCurrentStep,
    incrementCurrentStep
  }

  let timeProps = {
    time,
    playTime,
    stopTime,
    isPlaying,
    incrementTime,
    resetTime,
    setTime,
    maxTime,
    stepByStep
  }

  let uiProps = {
    showGrid,
    updateGrid,
    stepByStep,
    updateStepByStep
  }

  let carProps = {
    maxVelocity,
    setMaxVelocity,
    numCars,
    arrangeCars,
    slowdownProbability,
    setSlowdownProbability,
    slowdown: currentStep.interactiveOptions ? currentStep.interactiveOptions.slowdown : false
  }

  let interactiveOptions = {
    numCells,
    maxTime,
    currentStep,
    showGrid,
    initialCars,
    time,
    resetTime,
    maxVelocity,
    slowdownProbability,
    ...currentStep.interactiveOptions
  }

  return <div className="main">
      <LearningStep stepProps={stepProps} timeProps={timeProps} uiProps={uiProps} carProps={carProps} />
      <div className="divider"/>
      <RoadwayInteractive {...interactiveOptions} />
  </div>
}

export default LearningStage;
