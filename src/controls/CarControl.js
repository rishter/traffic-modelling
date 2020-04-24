import React from 'react'
import { NumericInput, Label } from '@blueprintjs/core'

const CarControl = ({ maxVelocity, setMaxVelocity, numCars, arrangeCars,
                      showCarNumber, slowdown,
                      slowdownProbability, setSlowdownProbability }) => {
  return <div className="car-control control">
    <Label className="label">
      Maximum Car Velocity
      <NumericInput value={maxVelocity}
        onValueChange={setMaxVelocity}
        allowNumericCharactersOnly={true}
        min={0} max={10} clampValueOnBlur={true} />
    </Label>
    { showCarNumber &&
      <Label className="label">
        Number of Cars
        <NumericInput value={numCars}
          onValueChange={arrangeCars}
          allowNumericCharactersOnly={true}
          min={0} max={25} clampValueOnBlur={true} />
      </Label>
    }
    {
      slowdown &&
      <Label className="label">
        Probability of Slowdown
        <NumericInput value={slowdownProbability}
          onValueChange={setSlowdownProbability}
          allowNumericCharactersOnly={true}
          stepSize={0.05} minorStepSize={0.05}
          min={0} max={1} clampValueOnBlur={true} />
      </Label>
    }
    { /* <Button active={true} intent={Intent.FAILURE} style={{marginTop: '23px', marginLeft: '5px'}}
      icon={IconNames.FAST_BACKWARD} text="Reset Timeline" onClick={() => null} /> */}
  </div>
}

export default CarControl
