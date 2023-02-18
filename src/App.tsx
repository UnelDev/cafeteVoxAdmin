import './App.css';
import AdminPage from './components/AdminPage';
import EmploysManagement from './components/employsManagement';
import Home from './components/homepage';
import MenuBar from './components/menuBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductManagement from './components/productManagement';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/employsManagement' element={<EmploysManagement />} />
          <Route path='/productManagement' element={<ProductManagement />} />
          {/* <Route path='/*' element={<E404 />}></Route> */}

        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;