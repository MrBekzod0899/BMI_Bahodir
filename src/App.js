import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
