import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import JobPage from './components/JobPage';

const App = () => {

  return (
    
    <BrowserRouter>
      
        {/* routes used in app..  */}
        <Routes>

          <Route exact path='/' element={ <Home /> } />
          <Route path='/job' element={ <JobPage /> } />

        </Routes>
      
      </BrowserRouter>

  )
}

export default App;
