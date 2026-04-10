import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { C } from "./constants";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import HomePage from "./pages/HomePage";
import ServiceDetail from "./pages/ServiceDetail";
import StoryDetail from "./pages/StoryDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
        html{scroll-behavior:smooth}
        body{background:${C.warmWhite};-webkit-font-smoothing:antialiased}
        .a4-photo{filter:brightness(1.05) sepia(0.05)}.a4-photo-bright{filter:brightness(1.2) sepia(0.05)}
        @media(max-width:768px){.a4-desk{display:none!important}.a4-mob-btn{display:block!important}.a4-hero-inner{flex-direction:column!important}.a4-hero-img{flex:1 1 auto!important;width:100%!important}.a4-niche-inner{flex-direction:column!important}.a4-niche-img{flex:1 1 auto!important;width:100%!important}}
        @media(min-width:769px){.a4-mob-menu{display:none!important}}
      `}</style>
      <HashRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
        </Routes>
        <Footer />
        <Chatbot />
      </HashRouter>
    </>
  );
}
