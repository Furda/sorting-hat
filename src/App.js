import { useEffect, useState } from "react";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import Input from "./components/Input/Input";
import MessageList from "./components/Messages/MessageList";
import QuickLinkList from "./components/QuickLinks/QuickLinkList";
import QuickLink from "./components/QuickLinks/QuickLink";
import Footer from "./components/utils/Footer/Footer";
import ScoreList from "./components/Scores/ScoreList";
import "./App.css";
import QuestionsJSON from "./sorting_hat.json";

function App() {
  const [questions] = useState(QuestionsJSON);
  const DELAY_TIME_IN_SECONDS = 1;
  const [name, setName] = useState("User's name");

  const [hasStarted, setHasStarted] = useState(false);
  const [hasAnswered, setHasAnswer] = useState(true);
  const [hasFinished, setHasFinished] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [houses, setHouses] = useState([
    {
      house: "Gryffindor",
      score: 0,
    },
    {
      house: "Hufflepuff",
      score: 0,
    },
    {
      house: "Ravenclaw",
      score: 0,
    },
    {
      house: "Slytherin",
      score: 0,
    },
  ]);

  const updateHasAnswerHandler = (updatedHasAnswer) => {
    setHasAnswer(updatedHasAnswer);
  };

  const updateHasFinishedHandler = (updateHasFinished) => {
    setHasFinished(updateHasFinished);
  };

  const addMessageHandler = (newMessage) => {
    setMessages((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        prefix: newMessage.prefix || null,
        message: newMessage.message,
        from: newMessage.from,
      },
    ]);
  };

  const updateQuestionIndexHandler = () => {
    setQuestionIndex((prevState) => prevState + 1);
  };

  const updateHousesHandler = (addedScores) => {
    setHouses((prevState) => {
      const initialHouse = Object.keys(addedScores);
      const newScores = [...prevState];
      let index = -1;
      return newScores.map((house) => {
        index += 1;
        return {
          house: house.house,
          score: house.score + addedScores[initialHouse[index]],
        };
      });
    });
  };

  const sendInputMessageHnadler = (message) => {
    if (!hasStarted) {
      setName(message);
      addMessageHandler({ id: Math.random(), message: message, from: "user" });
      setHasStarted(true);
    }
  };

  const playAgainQuickLinkHandler = () => {
    // Reset states
    setMessages([]);
    setQuestionIndex(0);
    setHasStarted(false);
    setHasAnswer(true);
    setHasFinished(false);
    setHouses([
      {
        house: "Gryffindor",
        score: 0,
      },
      {
        house: "Hufflepuff",
        score: 0,
      },
      {
        house: "Ravenclaw",
        score: 0,
      },
      {
        house: "Slytherin",
        score: 0,
      },
    ]);
  };

  // Check if there are not more questions
  useEffect(() => {
    if (questionIndex >= questions.length) {
      const winningHouse = houses.reduce((winningHouse, nextHouse) =>
        winningHouse.score > nextHouse.score ? winningHouse : nextHouse
      );

      addMessageHandler({
        id: Math.random(),
        message: "Your house is " + winningHouse.house,
        from: "bot",
      });
    }
  }, [questionIndex, questions.length, houses]);

  return (
    <div className="App">
      <Header>
        <ProfilePicture name={name} />
        <h2>{name}</h2>
      </Header>
      <ScoreList houses={houses} />
      <Chat>
        <MessageList
          questions={questions}
          hasStarted={hasStarted}
          hasAnswered={hasAnswered}
          hasFinished={hasFinished}
          questionIndex={questionIndex}
          updatedHasAnswered={updateHasAnswerHandler}
          addMessage={addMessageHandler}
          messages={messages}
          delayTimeInSeconds={DELAY_TIME_IN_SECONDS}
        />
      </Chat>
      <Footer>
        {!hasAnswered && !hasFinished && (
          <QuickLinkList
            questionsLength={questions.length}
            answers={questions[questionIndex].answers}
            hasAnswered={hasAnswered}
            hasFinished={hasFinished}
            questionIndex={questionIndex}
            updatedHasAnswered={updateHasAnswerHandler}
            updateHasFinished={updateHasFinishedHandler}
            updateQuestionIndex={updateQuestionIndexHandler}
            updateScoreHandler={updateHousesHandler}
            addMessage={addMessageHandler}
            messages={messages}
            delayTimeInSeconds={DELAY_TIME_IN_SECONDS}
          />
        )}

        {hasFinished && (
          <QuickLink
            key={Math.random()}
            onClick={playAgainQuickLinkHandler}
            delayTimeInSeconds={DELAY_TIME_IN_SECONDS}
          >
            Play Again
          </QuickLink>
        )}

        {hasStarted || (
          <Input placeholder="Message" onSend={sendInputMessageHnadler} />
        )}
      </Footer>
    </div>
  );
}

export default App;
