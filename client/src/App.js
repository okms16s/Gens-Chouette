import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import './App.css';
import ProductPage from './pages/productPage';
import ProductDetailPage from './pages/productDetailPage';
import AdminPage from './pages/adminPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';
import CustomerPage from './pages/customerPage';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import UserPage from './pages/userPage';

function App() {
    return (
        <Box>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='/product' element={<ProductPage />} />
                    <Route path='/product-detail' element={<ProductDetailPage />} />
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/customer' element={<CustomerPage />} />
                    <Route path='/user' element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </Box>
    );
}

export default App;
