import logo from "./logo.svg";
import "./App.css";
import ReactRevel from "./Components/ReactRevel";
import Cats from "./Components/Cats";
import Panda from "./Components/Panda";
import Lions from "./Components/Lions";

function App() {
  return (
    <div className="App">
      <ReactRevel />
      <Cats />
      <Panda />
      <Lions />
    </div>
  );
}

export default App;
