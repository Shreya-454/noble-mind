import "./App.css";
import Head from "./components/Head";
import Aboutus from "./components/Aboutus";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className=" overflow-x-clip">
          <Head />
          <Aboutus />
          <Choose />
          <Contact />
          <Faq />
          <Subscribe />
          <Footer />
          <BackToTop />
        </div>
      )}
    </div>
  );
}

export default App;
