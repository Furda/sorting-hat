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
  const name = "Fernando"; // temp variable

  const [questions] = useState(QuestionsJSON);
  const [hasAnswered, setHasAnswer] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const updateHasAnswerHandler = (updatedHasAnswer) => {
    setHasAnswer(updatedHasAnswer);
  };

  const updateQuestionIndexHandler = () => {
    setQuestionIndex(questionIndex++);
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
          updatedHasAnswered={updateHasAnswerHandler}
          questionIndex={questionIndex}
          updateQuestionIndex={updateQuestionIndexHandler}
        />
        <Footer>
          <QuickLinkList
            hasAnswered={hasAnswered}
            updatedHasAnswered={updateHasAnswerHandler}
          />
          <Input placeholder="Message" />
        </Footer>
      </Chat>
    </div>
  );
}

export default App;
