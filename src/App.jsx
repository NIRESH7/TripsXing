import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Logic from main.js
    const $ = window.$;
    if (!$) return;

    // preloader
    if (document.readyState === 'complete') {
      $('.loader').fadeOut('slow');
    } else {
      $(window).on('load', function () {
        $('.loader').fadeOut('slow');
      });
    }

    // navbar toggler icon
    $(document).on("click", ".navbar-toggler", function (e) {
      $(this).parent().siblings().find('i').removeClass('la-remove')
      $(this).find('i').toggleClass('la-remove')
    });

    // navbar on scroll
    $(window).on("scroll", function () {
      var onScroll = $(this).scrollTop();
      if (onScroll > 50) {
        $(".navbar").addClass("navbar-fixed");
      }
      else {
        $(".navbar").removeClass("navbar-fixed");
      }
    });

    return () => {
      $(window).off("scroll");
      $(document).off("click", ".navbar-toggler");
    };
  }, []);

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      {/* loader */}
      <div className="loader">
        <div className="loading">
          <div className="spinner-border aloader" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
      {/* end loader */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
