import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Apartments from './pages/apartments/Apartments';
import SingleApartment from './pages/apartments/single-apartment/SingleApartment';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='bg-green-200'>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Apartments />} />
            <Route path='/' element={<SingleApartment />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
