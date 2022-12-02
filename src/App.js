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
  const [name, setName] = useState("Fernando");
  const [questions] = useState(QuestionsJSON);
  const [hasAnswered, setHasAnswer] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);

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
        />
        <Footer>
          {!hasAnswered && (
            <QuickLinkList
              answers={questions[questionIndex].answers}
              hasAnswered={hasAnswered}
              questionIndex={questionIndex}
              updatedHasAnswered={updateHasAnswerHandler}
              updateQuestionIndex={updateQuestionIndexHandler}
            />
          )}
          <Input placeholder="Message" />
        </Footer>
      </Chat>
    </div>
  );
}

export default App;
