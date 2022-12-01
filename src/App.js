import Quiz from "./Quiz";
import { useState } from "react";
export default function App() {
  const [caunt, setCaunt] = useState(0);
  const [allQuiz, setallQuiz] = useState([
    {
      no: 1,
      name: "Aapka name kya hai?",
      option1: "ram",
      option2: "seeta",
      option3: "raj",
      option4: "raju"
    },
    {
      no: 2,
      name: "Aap kha rehte ho?",
      option1: "ajmer",
      option2: "kota",
      option3: "budhi",
      option4: "bikaner"
    }
  ]);
  const handleNext = (even) => {
    setCaunt(caunt + 1);
    setCurrentQuiz(allQuiz[caunt]);
  };
  const [currentQuiz, setCurrentQuiz] = useState({});
  return (
    <div className="App">
      <Quiz currentQuiz={currentQuiz} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
