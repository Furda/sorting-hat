import { useEffect, useState } from "react";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import Input from "./components/Input/Input";
import MessageList from "./components/Messages/MessageList";
import QuickLinkList from "./components/QuickLinks/QuickLinkList";
import Footer from "./components/utils/Footer/Footer";
import "./App.css";
import QuestionsJSON from "./sorting_hat.json";

function App() {
  const [questions] = useState(QuestionsJSON); // Constant (Not changing)
  const [name, setName] = useState("Fernando");

  const [hasAnswered, setHasAnswer] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState({
    g: 0,
    r: 0,
    h: 0,
    s: 0,
  });

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const updateNameHandler = (newName) => {
    setName(newName);
  };

  const updateHasAnswerHandler = (updatedHasAnswer) => {
    setHasAnswer(updatedHasAnswer);
  };

  const updateQuestionIndexHandler = () => {
    setQuestionIndex((prevState) => prevState++);
  };

  useEffect(() => {
    console.log("score", score);
  }, [score]);

  const updateScoreHandler = (addedScore) => {
    console.log("addedScore", addedScore);
    setScore((prevState) => {
      const newScore = { ...prevState };
      newScore.g = newScore.g + addedScore.g;
      newScore.h = newScore.h + addedScore.h;
      newScore.r = newScore.r + addedScore.r;
      newScore.s = newScore.s + addedScore.s;
      return newScore;
      // return {
      //   ...(prevState.g + addedScore.g),
      //   ...(prevState.h + addedScore.h),
      //   ...(prevState.r + addedScore.r),
      //   ...(prevState.s + addedScore.s),
      // };
    });
  };

  return (
    <div className="App">
      <Header>
        <ProfilePicture name={name} />
        <h2>{name}</h2>
      </Header>
      <Chat>
        <MessageList
          questions={questions}
          hasAnswered={hasAnswered}
          questionIndex={questionIndex}
          updatedHasAnswered={updateHasAnswerHandler}
          updateQuestionIndex={updateQuestionIndexHandler}
          score={score}
        />
        <Footer>
          {!hasAnswered && (
            <QuickLinkList
              answers={questions[questionIndex].answers}
              hasAnswered={hasAnswered}
              questionIndex={questionIndex}
              updatedHasAnswered={updateHasAnswerHandler}
              updateQuestionIndex={updateQuestionIndexHandler}
              updateScoreHandler={updateScoreHandler}
            />
          )}
          <Input placeholder="Message" />
        </Footer>
      </Chat>
    </div>
  );
}

export default App;
