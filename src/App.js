import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews'
import Dashboard from './Components/Dashboard/Dashboard'
import Blogs from './Components/Blogs/Blogs'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
