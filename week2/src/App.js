import logo from './logo.svg';
import './App.css';

function MyButton() {
  return(
    <button>
      I am a button
    </button>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to my App!</h1>
      <MyButton/>
    </div>
  );
}

export default App;
