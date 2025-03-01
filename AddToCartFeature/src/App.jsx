import { useState, useEffect } from "react";
import ProgressBar from "../Components/ProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Progress Bar</h2>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
