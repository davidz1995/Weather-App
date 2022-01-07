import CurrentLocation from './components/CurrentLocation';
import NavBar from './components/NavBar';
import ForecastTable from './components/ForecastTable';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent, getCurrentForecast } from './redux/actions/actions';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/Cards';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrent())
    dispatch(getCurrentForecast())
  },[dispatch])

  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Cards/>
      <Routes>
        <Route exact path="/" element={<CurrentLocation/>}/>
        <Route exact path="/forecast" element={<ForecastTable/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
