import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrentLocation from './components/CurrentLocation';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent } from './redux/actions/actions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrent())
  },[])

  return (
    <div className="App">
      <NavBar/>
      <CurrentLocation/>
    </div>
  );
}

export default App;
