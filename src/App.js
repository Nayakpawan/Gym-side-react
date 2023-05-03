import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Products from './Components/Products';
import Footer from './Components/Footer';
import ProductDetails from './Components/Products/ProductDetails';
import Payment from './Components/Products/ProductDetails/Payment';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/Register" element={<Register/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path='/Footer' element={<Footer/>} />
      <Route path='/ProductDetails' element={<ProductDetails/>} />
      <Route path='/Payment' element={<Payment/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
