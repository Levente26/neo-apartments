import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Apartments from './pages/apartments/Apartments';
import Details from './pages/apartments/single-apartment/Details';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='bg-green-200 font-opensans'>
      <BrowserRouter>
        <header className='sticky top-0'>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Apartments />} />
            <Route path='/apartment/:id' element={<Details />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        <footer className='sticky bottom-0'>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
