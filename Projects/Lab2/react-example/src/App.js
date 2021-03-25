import logo from "./logo.svg";
import "./App.css";
import Ulfcomponent from "./Ulfcomponent";

function App() {
  const elements = [
    { id: "1", content: "Lorem ipsum dolor sit amet," },
    { id: "2", content: "consectetur adipiscing elit," },
    { id: "3", content: "sed do eiusmod tempor" },
    { id: "4", content: "incididunt ut labore et" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-main-element">
          <div className="element1">
            <h2>Laboratory work #2</h2>
          </div>
          <div className="element2">
            <Ulfcomponent elements={elements} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
