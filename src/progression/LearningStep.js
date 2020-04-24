import React from 'react'
import { Card, H1, Elevation } from '@blueprintjs/core'
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import TimeControl from '../controls/TimeControl.js'
import UIControl from '../controls/UIControl.js'
import CarControl from '../controls/CarControl.js'

// represents 1 "step" or atomic piece of content in the learning journey
// step prop holds metadata around the text
const LearningStep = ({ stepProps, timeProps, uiProps, carProps }) => {
  let { step, decrementCurrentStep, incrementCurrentStep } = stepProps

  const stepUses = (control) => {
    return step.components && step.components.includes(control)
  }

  return (
    <div className="stage vertical-align">
      <Card elevation={Elevation.TWO} className="card">
        <Icon className="ico left"
          icon={IconNames.ARROW_UP}
          iconSize={Icon.SIZE_LARGE}
          intent={Intent.PRIMARY}
          onClick={decrementCurrentStep}
        />
        <Icon className="ico right"
          icon={IconNames.ARROW_DOWN}
          iconSize={Icon.SIZE_LARGE}
          intent={Intent.PRIMARY}
          onClick={incrementCurrentStep}/>
        <H1>{step.title}</H1>
        <p>{step.text}</p>
        {
          stepUses('UIControl')
          && <UIControl {...uiProps} {...step.uiOptions} />
        }
        { stepUses('TimeControl')
          && <TimeControl {...timeProps} {...step.timeOptions} />
        }
        {
          stepUses('CarControl')
          && <CarControl {...carProps} {...step.carOptions} />
        }


      </Card>
    </div>
  )
}

export default LearningStep;
