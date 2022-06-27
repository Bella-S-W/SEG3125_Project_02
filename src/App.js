import './App.css';

import Home from './Pages/Home';
import Header from './Components/Header';
import Family_card from './Pages/Family_card';
import Discussion_page from './Pages/Discussion_page';
import Subscribe_plan from './Pages/Subscribe_plan';

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import { HashRouter as Router, Routes,Route} from "react-router-dom";;

function App() {
  return (
    <div>
      <Router basename="/">
        <Header/>
        <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route path="/Family_card" element={<Family_card/>}/>
            <Route path="/Discussion_page" element={<Discussion_page/>}/>
            <Route path="/Subscribe_plan" element={<Subscribe_plan/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
