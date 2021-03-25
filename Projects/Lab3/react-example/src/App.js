import React, { useState, useEffect } from "react";
import "./App.css";
import Ulfcomponent from "./Ulfcomponent";
import getNewUl from "./getNewUl";
import getOldUl from "./getOldUl";

function App() {
  const array = [
    { id: "1", content: "Lorem ipsum dolor sit amet," },
    { id: "2", content: "consectetur adipiscing elit," },
    { id: "3", content: "sed do eiusmod tempor" },
    { id: "4", content: "incididunt ut labore et" },
  ];

  const [elements, setElements] = useState([]);
  const [inputField, setInputField] = useState("");

  useEffect(() => {
    inputField.length !== 0
      ? getNewUl(array, inputField, setElements)
      : getOldUl(array, setElements);
  }, [inputField]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-main">
          <div className="App-header-main-element">
            <div className="element3"></div>
            <div className="element2">
              <div className="form">
                <input
                  type="text"
                  value={inputField}
                  onChange={(event) => setInputField(event.target.value)}
                  name="name"
                  autoComplete="off"
                  required
                />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDUxMi4wMDAzNjYyMTA5Mzc1LDApIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDguODc1LDQ5My43OTJMMzUzLjA4OSwzMzguMDA1YzMyLjM1OC0zNS45MjcsNTIuMjQ1LTgzLjI5Niw1Mi4yNDUtMTM1LjMzOUM0MDUuMzMzLDkwLjkxNywzMTQuNDE3LDAsMjAyLjY2NywwICAgIFMwLDkwLjkxNywwLDIwMi42NjdzOTAuOTE3LDIwMi42NjcsMjAyLjY2NywyMDIuNjY3YzUyLjA0MywwLDk5LjQxMS0xOS44ODcsMTM1LjMzOS01Mi4yNDVsMTU1Ljc4NiwxNTUuNzg2ICAgIGMyLjA4MywyLjA4Myw0LjgxMywzLjEyNSw3LjU0MiwzLjEyNWMyLjcyOSwwLDUuNDU4LTEuMDQyLDcuNTQyLTMuMTI1QzUxMy4wNDIsNTA0LjcwOCw1MTMuMDQyLDQ5Ny45NTgsNTA4Ljg3NSw0OTMuNzkyeiAgICAgTTIwMi42NjcsMzg0Yy05OS45NzksMC0xODEuMzMzLTgxLjM0NC0xODEuMzMzLTE4MS4zMzNTMTAyLjY4OCwyMS4zMzMsMjAyLjY2NywyMS4zMzNTMzg0LDEwMi42NzcsMzg0LDIwMi42NjcgICAgUzMwMi42NDYsMzg0LDIwMi42NjcsMzg0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                  alt="Search"
                />
              </div>
            </div>
          </div>
          <div className="App-header-main-element">
            <div className="element1">
              <h2>Laboratory work #3</h2>
            </div>
            <div className="element2">
              <Ulfcomponent elements={elements} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
