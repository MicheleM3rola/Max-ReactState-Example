import logo from "./logo.svg";
import Button from "./components/button/Button";
import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button clickToOpen={setOpen} state={open} />

        {open ? <h1>I Love React</h1> : null}
      </header>
    </div>
  );
}

export default App;
