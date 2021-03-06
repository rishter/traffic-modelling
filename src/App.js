import React, { useState } from 'react';
import Navbar from './Nav.js'
import LearningStage from './progression/LearningStage.js'
import steps from './steps.js'
import './App.css';

function App() {
  let [currentStepIndex, setCurrentStepIndex] = useState(0)

  const decrementCurrentStep = () => {
    setCurrentStepIndex(Math.max(currentStepIndex-1, 0))
  }

  const incrementCurrentStep = () => {
    setCurrentStepIndex(Math.min(currentStepIndex+1, steps.length-1))
  }

  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft") {
      decrementCurrentStep()
    } else if (e.key === "ArrowRight") {
      incrementCurrentStep()
    }
  }

  let progress = currentStepIndex*1.0/(steps.length-1)

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0"> { /*bp3-dark*/ }
      <Navbar progress={progress}
        decrementCurrentStep={decrementCurrentStep}
        incrementCurrentStep={incrementCurrentStep} />
      <LearningStage steps={steps}
        currentStepIndex={currentStepIndex}
        decrementCurrentStep={decrementCurrentStep}
        incrementCurrentStep={incrementCurrentStep} />
    </div>
  );
}

export default App;
