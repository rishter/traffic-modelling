import React from 'react'
import { Button, Slider, Intent } from '@blueprintjs/core'
import { IconNames } from "@blueprintjs/icons";
import './controls.css'

const TimeControl = ({ time, playTime, stopTime, isPlaying, incrementTime,
                       resetTime, setTime, showSlider, stepByStep, maxTime }) => {
  return <div className="time-control control">
    <p className="info">Time: {time}</p>
    { stepByStep ?
      <Button active={true} intent={Intent.SUCCESS} disabled={time >= maxTime}
      icon={IconNames.STEP_FORWARD} text="Increment Time"
      onClick={incrementTime} /> :
      isPlaying ?
      <Button active={true} intent={Intent.WARNING}
      icon={IconNames.PAUSE} text="Pause"
      onClick={stopTime} /> :
      <Button active={true} intent={Intent.SUCCESS} disabled={time >= maxTime}
      icon={IconNames.PLAY} text="Play"
      onClick={playTime} />
    }
    { isPlaying || time === 1 || <Button active={true} intent={Intent.FAILURE}
      icon={IconNames.FAST_BACKWARD} text="Reset Time" onClick={() => resetTime(true)} /> }
    { showSlider && <Slider className='time-slider' labelRenderer={false}  intent={Intent.SUCCESS}
      max={maxTime} min={1} value={time} onChange={setTime} /> }
  </div>
}

export default TimeControl
