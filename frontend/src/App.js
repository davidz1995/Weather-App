import CurrentLocation from './components/CurrentLocation';
import ForecastTable from './components/ForecastTable';
import Landing from './components/Landing';
import SearchedCityForecastTable from './components/SearchedCityForecastTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/current" element={<CurrentLocation/>}/>
        <Route exact path="/forecast" element={<ForecastTable/>}/>
        <Route exact path="/selectedCityForecast" element={<SearchedCityForecastTable/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
