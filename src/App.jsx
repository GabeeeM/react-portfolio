import awesome from "./awesome.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={awesome} className="App-logo" alt="logo" />
        <p className="font-bold text-[5rem]">
          Hello everyone this is an awesome test of my site
        </p>
      </header>
    </div>
  );
}

export default App;
