import logo from './logo.svg';
import './App.css';
import TextBox from './components/TextBox';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <main className="App-main">
          <h1>Simple TODO Tasks List</h1>
          <TextBox></TextBox>
          <h2>Calculator</h2>
          <Calculator />
      </main >
    </div >
  );
}

export default App;
