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
  const [messages, setMessages] = useState([]);
  const [score, setScore] = useState({
    g: 0,
    r: 0,
    h: 0,
    s: 0,
  });

  // Development notes
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const updateNameHandler = (newName) => {
    setName(newName);
  };

  const updateHasAnswerHandler = (updatedHasAnswer) => {
    setHasAnswer(updatedHasAnswer);
  };

  const addMessageHandler = (newMessage) => {
    setMessages((prevState) => [
      ...prevState,
      { message: newMessage.message, from: newMessage.from },
    ]);
  };

  const updateQuestionIndexHandler = () => {
    setQuestionIndex((prevState) => prevState + 1);
    console.log(questionIndex);
  };

  const updateScoreHandler = (addedScore) => {
    setScore((prevState) => {
      const newScore = { ...prevState };
      newScore.g += addedScore.g;
      newScore.h += addedScore.h;
      newScore.r += addedScore.r;
      newScore.s += addedScore.s;
      return newScore;
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
          addMessage={addMessageHandler}
          messages={messages}
        />
      </Chat>
      <Footer>
        {!hasAnswered && (
          <QuickLinkList
            answers={questions[questionIndex].answers}
            hasAnswered={hasAnswered}
            questionIndex={questionIndex}
            updatedHasAnswered={updateHasAnswerHandler}
            updateQuestionIndex={updateQuestionIndexHandler}
            updateScoreHandler={updateScoreHandler}
            addMessage={addMessageHandler}
            messages={messages}
          />
        )}
        <Input placeholder="Message" />
      </Footer>
    </div>
  );
}

export default App;
