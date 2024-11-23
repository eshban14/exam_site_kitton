
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/pages/about/About';
import Classes from './components/pages/classes/Classes';
import ProductPage from './components/pages/shop/ProductPage';
import Contact from './components/pages/contact/Contact';









function App() {
  return (
    <div className="App">

     
     <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/classes" element={<Classes/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/shop" element={<ProductPage/>} />
      </Routes>
      
    

      
    </div>
  );
}

export default App;
