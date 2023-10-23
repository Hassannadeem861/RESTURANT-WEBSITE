import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Menu from './Components/Pages/Menu'
import PageNotFound from './Components/Pages/PageNotFound'

function App () {
  return (
    <div>
 <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/about' element={<About/>}>ABOUT</Route>
      <Route path='/contact' element={<Contact/>}>CONTACT</Route>
      <Route path='/menu' element={<Menu/>}>MENU</Route>
      <Route path='*' element={<PageNotFound/>}>Not Found Page</Route>
    </Routes>
 </BrowserRouter>

    </div>
  );
}

export default App;
