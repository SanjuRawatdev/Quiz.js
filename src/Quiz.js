import "./styles.css";
export default function Quiz(props) {
  return (
    <div className="Quiz">
      <h2>
        {" "}
        {props.currentQuiz.no}.{props.currentQuiz.name}
      </h2>
      <h2>
        <input type="radio" name="Quiz"></input>
        {props.currentQuiz.option1}
      </h2>
      <h2>
        <input type="radio" name="Quiz"></input>
        {props.currentQuiz.option2}
      </h2>
      <h2>
        <input type="radio" name="Quiz"></input>
        {props.currentQuiz.option3}
      </h2>
      <h2>
        <input type="radio" name="Quiz"></input>
        {props.currentQuiz.option4}
      </h2>
    </div>
  );
}
