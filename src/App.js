import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import Text from "./components/Text";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text text={'Hello word'} />
        <Counter/>
      </header>
    </div>
  );
}

export default App;
