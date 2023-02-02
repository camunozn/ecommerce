import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppNavBar from './assets/components/AppNavBar';
import LoadingScreen from './assets/components/LoadingScreen';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import ProductDetail from './assets/pages/ProductDetail';
import ProtectedRoutes from './assets/components/ProtectedRoutes';
import User from './assets/pages/User';
import Purchases from './assets/pages/Purchases';
import ScrollToTop from './assets/components/ScrollToTop';
import AlertModal from './assets/components/AlertModal';

function App() {
  const isLoading = useSelector(state => state.isLoading);
  const showAlert = useSelector(state => state.showAlert);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <AppNavBar />
        {isLoading && <LoadingScreen />}
        {showAlert && <AlertModal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/user" element={<User />} />
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
