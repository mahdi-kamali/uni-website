

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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <body>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/employes" element={<Employes />} />
            <Route path="*" element={<MainPage />} />
            <Route path='files' element={<Files />} />
          </Routes>
        </body>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
