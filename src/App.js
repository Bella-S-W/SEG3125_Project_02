import './App.css';

import Home from './Pages/Home';
import Header from './Components/Header';
import Family_card from './Pages/Family_card';
import Discussion_page from './Pages/Discussion_page';
import Subscribe_plan from './Pages/Subscribe_plan';
import SimpleForm from './Components/chatbot/SimpleForm';

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route exact path ="/SEG3125_Project_02" element={<Home/>}/>
            <Route path="/SEG3125_Project_02/Family_card" element={<Family_card/>}/>
            <Route path="/SEG3125_Project_02/Discussion_page" element={<Discussion_page/>}/>
            <Route path="/SEG3125_Project_02/Subscribe_plan" element={<Subscribe_plan/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
