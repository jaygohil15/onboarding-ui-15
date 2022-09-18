import './App.css';
import logo from './logo.png'
import Step1 from './initialOnboarding/Step1';
import Step2 from './initialOnboarding/Step2';
import Step3 from './initialOnboarding/Step3';
import Step4 from './initialOnboarding/Step4';
import StepCounterComp from './initialOnboarding/StepCounterComp';
import { useState } from 'react';

function App() {

  const [stepCounter, setStepCounter] = useState(1);

  const viewHandler = (step) => {
    switch (step) {
      case 1: return <Step1 setStepCounter={setStepCounter} />;
      case 2: return <Step2 setStepCounter={setStepCounter} />;
      case 3: return <Step3 setStepCounter={setStepCounter} />;
      case 4: return <Step4 setStepCounter={setStepCounter} />;
      default: return <Step1 setStepCounter={setStepCounter} />;
    }
  }

  return (
    <div className="app">
      <img src={logo} alt='Image Not Found' />
      <StepCounterComp stepCounter={stepCounter} setStepCounter={setStepCounter} />
      {viewHandler(stepCounter)}
    </div>
  );
}

export default App;
