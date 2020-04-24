import React from 'react'
import { Switch } from '@blueprintjs/core'

const UIControl = ({ showGrid, updateGrid, showStepByStep, stepByStep, updateStepByStep }) => {
  return <div className="ui-control control">
    <Switch checked={showGrid} label="Show Grid" onChange={updateGrid} className="label" />
    { showStepByStep &&
      <Switch checked={stepByStep} label="Step by Step" onChange={updateStepByStep} className="label" />
    }
  </div>
}

export default UIControl
