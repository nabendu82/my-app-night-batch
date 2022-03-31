import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greeting name="JavaScript" />
      <Greeting name="Golang">Language for server</Greeting>
      <Greeting name="Swift" />
      <hr />
      <Welcome name="Flutter" />
      <Welcome name="React Native" />
      <Welcome name="Java"><button>Click for Java</button></Welcome>
    </div>
  );
}

export default App;