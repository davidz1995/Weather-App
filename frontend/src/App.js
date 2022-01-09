import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CurrentLocation from './components/CurrentLocation';
import ForecastTable from './components/ForecastTable';
import Cards from './components/Cards';
import SearchedCityForecastTable from './components/SearchedCityForecastTable'
import { getCurrent, getCurrentForecast } from './redux/actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrent())
    dispatch(getCurrentForecast())
  },[dispatch])

  return (
    <Router>
      <div className="App">
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        position:'absolute', 
        zIndex:'1', 
        marginLeft:'15%',
        width:'70%',
        justifyContent:'center',
        top:'5em'
        }}>
        <Cards/>
      </div>
      <Routes>
        <Route exact path="/" element={<CurrentLocation/>}/>
        <Route exact path="/forecast" element={<ForecastTable/>}/>
        <Route exact path="/selectedCityForecast" element={<SearchedCityForecastTable/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
