import './App.css';

// Models
import Note from './model/Note';

// Components
import Header, { yourMom } from './components/Header/Header';

function App() {
  const name = yourMom.name;

  return (
    <div className="App">
      <Header title={name} />

    </div>
  );
}

export default App;