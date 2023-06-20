import Header from "./header/Header";
import MainPage from "./pages/main-page/MainPage";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery";
import AboutUs from "./about-us/AboutUs";
import Footer from "./footer/Footer";

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
            <Route path="*" element={<MainPage />} />
          </Routes>
        </body>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
