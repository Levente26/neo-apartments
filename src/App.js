import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// pages
import Apartments from './pages/apartments/Apartments';
import Details from './pages/apartments/single-apartment/Details';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {

  const { user } = useAuthContext()

  user && sessionStorage.setItem("name", user.displayName)

  return (
    <div className='bg-green-200 font-opensans'>
      <BrowserRouter>
        <header className='sticky top-0'>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={user ? <Apartments /> : <Navigate to='/login' />} />
            <Route path='/apartment/:id' element={user ? <Details /> : <Navigate to='/login' />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          </Routes>
        </main>
        <footer className='sticky bottom-0'>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  )
};

export default App;
