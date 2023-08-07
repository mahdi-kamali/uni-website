

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./footer/Footer";
import Employes from "./pages/employes/Employes";
import Header from "./header/Header";
import MainPage from "./pages/main-page/MainPage";
import Files from './pages/files-page/Files';
import AboutUs from "./pages/about-us/AboutUs"
import AuthPage from './pages/auth/AuthPage';
import { useDispatch } from 'react-redux';
import { fetchUser } from './features/user';
import Dashboard from './pages/dashboard/Dashboard';


function App() {



  const dispatcher = useDispatch()

  dispatcher(fetchUser())


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="*" element={<MainPage />} />
          <Route path='/files' element={<Files />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/dashboard' element={<Dashboard />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
