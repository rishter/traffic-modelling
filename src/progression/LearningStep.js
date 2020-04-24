import React from 'react'
import { Card, H1, Elevation } from '@blueprintjs/core'
import TimeControl from '../controls/TimeControl.js'
import UIControl from '../controls/UIControl.js'
import CarControl from '../controls/CarControl.js'
import Markdown from 'markdown-to-jsx';

// represents 1 "step" or atomic piece of content in the learning journey
// step prop holds metadata around the text
const LearningStep = ({ step, timeProps, uiProps, carProps }) => {
  const stepUses = (control) => {
    return step.components && step.components.includes(control)
  }

  return (
    <div className="stage vertical-align">
      <Card elevation={Elevation.TWO} className="card">
        <H1>{step.title}</H1>
        {step.texts.map((t, i) => {
          return <Markdown key={i} options={{ forceBlock: true }}>{t}</Markdown>
        })}
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
