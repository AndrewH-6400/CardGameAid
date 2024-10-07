//import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import LifePage from './components/lifepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/lifepage" element={<LifePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
