import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import Input from "./components/Input/Input";
import MessageList from "./components/Message/MessageList";
import "./App.css";

function App() {
  const name = "Fernando"; // temp variable
  return (
    <div className="App">
      <Header>
        <ProfilePicture name={name} />
        <h2>{name}</h2>
      </Header>
      <Chat>
        <MessageList />
        <Input placeholder="Message" />
      </Chat>
    </div>
  );
}

export default App;
