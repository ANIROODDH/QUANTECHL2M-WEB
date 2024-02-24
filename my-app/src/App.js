import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home></Home>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
