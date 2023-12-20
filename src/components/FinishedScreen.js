import { useQuiz } from "../context/QuizContext";

function FinishedScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  const percentage = Math.round((points * 100) / maxPoints);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
