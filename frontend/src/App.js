import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrentLocation from './components/CurrentLocation';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CurrentLocation/>
    </div>
  );
}

export default App;
