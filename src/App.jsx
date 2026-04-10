import { C } from "./constants";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import Niche from "./components/Niche";
import Services from "./components/Services";
import Work from "./components/Work";
import Resources from "./components/Resources";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{background:${C.warmWhite};-webkit-font-smoothing:antialiased}
        @media(max-width:768px){.a4-desk{display:none!important}.a4-mob-btn{display:block!important}.a4-hero-inner{flex-direction:column!important}.a4-hero-img{flex:1 1 auto!important;width:100%!important}}
        @media(min-width:769px){.a4-mob-menu{display:none!important}}
      `}</style>
      <Nav />
      <Hero />
      <Stories />
      <Niche />
      <Services />
      <Work />
      <Resources />
      <CTA />
      <Footer />
    </>
  );
}
