import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  const name = "Fernando"; // temp variable
  return (
    <div className="App">
      <Header>
        <ProfilePicture name={name} />
        <h2>{name}</h2>
      </Header>
      <Input placeholder="Message" />
    </div>
  );
}

export default App;
