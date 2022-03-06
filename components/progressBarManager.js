import { useEffect, useState } from 'react';
import styles from '../styles/Loader.module.css';

const ProgressBar = ({ currentStep, maxSteps }) => {
  let dots = [];
  for (let i = 0; i < maxSteps; i++) {
    dots.push(
      <div
        className={styles.dot}
        key={i}
        style={{ backgroundColor: i < currentStep ? '#fff' : '#0097d1' }}
      />
    );
  }
  return <div className={styles.dots}>{dots}</div>;
};

const ProgressBarManager = ({ tick }) => {
  const maxSteps = 50;
  const [step, setStep] = useState(0);
  useEffect(() => {
    let timesRun = 0;
    const interval = setInterval(() => {
      timesRun++;
      if (timesRun > maxSteps) {
        clearInterval(interval);
      }
      setStep((step) => step + 1);
    }, tick);
  }, []);
  return <ProgressBar currentStep={step} maxSteps={maxSteps} />;
};

export default ProgressBarManager;
