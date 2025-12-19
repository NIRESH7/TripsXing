import { useEffect } from 'react';

function App() {
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

    // smooth scroll
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        if ($(hash).length) {
          $("html, body").animate({
            scrollTop: $(hash).offset().top - 50
          }, 850);
        }
      }
    });

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
      $("a").off("click");
    };
  }, []);

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


      {/* navbar */}
      <div id="navbar" className="navbar navbar-expand-lg justify-content-center">
        <div className="container">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#download">Downlaod</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">Faq</a></li>
            </ul>
          </div>
          <a href="#" className="navbar-brand"><img src="img/logo.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="la la-bars"></i>
          </button>
          <ul className="button-navbar">
            <li><a href="https://apps.apple.com/in/app/tripsxing/id6749824141" target="_blank" className="button"><i className="lab la-app-store"></i>App Store</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.tripsxing.app" target="_blank" className="button"><i className="lab la-google-play"></i>Google Play</a></li>
          </ul>
        </div>
      </div>
      {/* end navbar */}


      {/* intro */}
      <div id="home" className="intro">
        <div className="container">
          <div className="content">
            <h1>TripsXing, Get Luxury in Budget</h1>
            <p>Get 10-50% OFF on hotels with the TripsXing Privilege Card. Explore, book, and save on premium stays
              effortlessly.</p>
          </div>
        </div>
      </div>
      {/* end intro */}

      {/* intro image */}
      <div className="intro-image">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img src="img/center.png" alt="" />
            </div>
            <div className="col-md m-none">
              <img src="img/left.png" alt="" />
            </div>
            <div className="col-md m-none">
              <img src="img/right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* end intro image */}

      {/* counter */}
      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-md col-6">
              <h1>50K+</h1>
              <p>Install</p>
            </div>
            <div className="col-md col-6">
              <h1>20K+</h1>
              <p>Beneficiaries</p>
            </div>
            <div className="col-md col-6">
              <h1>45K+</h1>
              <p>Bookings</p>
            </div>
            <div className="col-md col-6">
              <h1>15+</h1>
              <p>Years</p>
            </div>
          </div>
        </div>
      </div>
      {/* end counter */}

      {/* features */}
      <div id="features" className="features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="content">
                <div className="text">
                  <h5 id="clr">TripsXing Privilege Card – Your Travel Savings Pass!</h5>
                  <p>Enjoy massive discounts on hotels, stays, and premium travel services. Unlock year-round
                    savings for just ₹599/year!</p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <i className="la la-check"></i>
                </div>
                <div className="text">
                  <h5>10-50% OFF on Partner Hotels</h5>
                  <p>Enjoy exclusive discounts on top-rated hotels and resorts</p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <i className="la la-check"></i>
                </div>
                <div className="text">
                  <h5>Personalized Travel Deals & Offers</h5>
                  <p>Customized travel recommendations & special deals for you.</p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <i className="la la-check"></i>
                </div>
                <div className="text">
                  <h5>Seamless Hotel Check-ins with QR Code</h5>
                  <p>Fast & Easy QR-based check-ins at partner hotels.</p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <i className="la la-check"></i>
                </div>
                <div className="text">
                  <h5>Priority Support & Assistance</h5>
                  <p>Access 24/7 customer support and dedicated travel assistance whenever you need it.</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="content-image">
                <img src="img/USP.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end features */}

      {/* features 02*/}
      <div className="features02">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="content-image">
                <img src="img/tripsxing.png" alt="" />
              </div>
            </div>
            <div className="col-md">
              <h2>Why Choose TripsXing?</h2>
              <div className="row">
                <div className="col">
                  <div className="content">
                    <i className="la la-tags"></i>
                    <h5>Exclusive Discounts</h5>
                    <p>Save 10-50% on hotels and stays.</p>
                  </div>
                </div>
                <div className="col">
                  <div className="content">
                    <i className="la la-hotel"></i>
                    <h5>Seamless Check-ins</h5>
                    <p>Quick QR code-based access.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="content">
                    <i className="la la-compass"></i>
                    <h5>Trending Destinations</h5>
                    <p>Explore top-rated travel spots.</p>
                  </div>
                </div>
                <div className="col">
                  <div className="content">
                    <i className="la la-handshake"></i>
                    <h5>Premium Travel Perks</h5>
                    <p>Rental cars, insurance & more!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end features 02*/}

      {/* download */}
      <div id="download" className="download">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h2>Download TripsXing</h2>
              <p>Experience luxury travel on a budget with TripsXing! Get 10-50% OFF on top hotels, explore
                trending destinations, and enjoy seamless bookings. Watch engaging travel stories, access
                exclusive deals, and check in effortlessly with your QR code. Plus, enjoy additional services
                like rental cars, travel insurance, and AI-powered travel packages—all in one app!</p>
              <ul>
                <li><a href="https://apps.apple.com/in/app/tripsxing/id6749824141" target="_blank" className="button"><i className="lab la-app-store"></i>App Store</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.tripsxing.app" target="_blank" className="button"><i className="lab la-google-play"></i>Google Play</a></li>
              </ul>
            </div>
            <div className="col-md col-second">
              <div className="row">
                <div className="col">
                  <img src="img/1.png" alt="" className="image1" />
                </div>
                <div className="col">
                  <img src="img/2.png" alt="" className="image2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end download */}

      {/* faq */}
      <div id="faq" className="faq">
        <div className="container">
          <h2>FAQ</h2>
          <h2>Frequently Asked</h2>
          <div className="row top-row">
            <div className="col-md">
              <h5>What is the TripsXing Privilege Card?</h5>
              <p>The TripsXing Privilege Card gives you 10-50% OFF on partner hotels and exclusive travel deals.
                It also offers seamless QR-based check-ins and priority customer support.</p>
            </div>
            <div className="col-md">
              <h5>How much does the Privilege Card cost?</h5>
              <p>The TripsXing Privilege Card is available for just ₹599 per year, giving you access to unlimited
                hotel discounts and premium travel perks.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <h5>How do I use my Privilege Card for hotel discounts?</h5>
              <p>Simply show your TripsXing Privilege Card QR code at partner hotels, or enter your discount code
                when booking online to avail of the exclusive discounts.</p>
            </div>
            <div className="col-md">
              <h5>What other services does TripsXing offer?</h5>
              <p>Apart from hotel discounts, TripsXing provides AI-driven travel packages, travel insurance, car
                rentals, and car wash services to enhance your travel experience.</p>
            </div>
          </div>
        </div>
      </div>
      {/* end faq */}

      {/* footer */}
      <footer>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <img src="img/Logo white.png" alt="" />
                <p>TripsXing helps you travel smarter with 10-50% OFF on hotels using our Privilege Card.</p>
              </div>
              <div className="col-md">
                <h6>Contact us</h6>
                <ul>
                  <ul className="contact-info">
                    <li>
                      <a href="https://wa.me/919080416643?text=Hi%21%20I'd%20like%20to%20know%20more%20about%20TripsXing!" target="_blank">
                        <i className="la la-whatsapp"></i> +91 90804 16643
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919003550455">
                        <i className="la la-phone"></i> +91 90035 50455
                      </a>
                    </li>
                    <li>
                      <a href="mailto:Tripsxing@gmail.com">
                        <i className="la la-envelope"></i> Tripsxing@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="https://maps.app.goo.gl/BjV3bsTVR8mfKrTb6" target="_blank">
                        <i className="la la-map"></i> Covai Tech Park
                      </a>
                    </li>
                  </ul>

                </ul>
              </div>
              <div className="col-md">
                <h6>Social Media</h6>
                <ul>
                  <li><a href="https://www.instagram.com/tripsxing.official/"><i className="la la-instagram"></i> Instagram</a></li>
                  <li><a href="https://www.facebook.com/tripsxing.official"><i className="la la-facebook"></i> Facebook</a></li>
                  <li><a href="https://x.com/tripsxing_"><i className="la la-twitter"></i> Twitter</a></li>
                  <li><a href="https://www.linkedin.com/company/tripsxing-official/"><i className="la la-linkedin"></i> LinkedIn</a></li>
                </ul>
              </div>
              <div className="col-md">
                <h6>Usefull Link</h6>
                <ul>
                  <li><a href=""><i className="la la-user"></i> About</a></li>
                  <li><a href=""><i className="la la-rocket"></i> Features</a></li>
                  <li><a href=""><i className="la la-dollar"></i> Pricing</a></li>
                  <li><a href=""><i className="la la-envelope"></i> Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}

      {/* footer copyright */}
      <div className="footer-cp">
        <div className="container">
          <div className="row">
            <div className="col-md col-12">
              Copyright 2025 © All Right Reserved | Tripsxing Pvt. Ltd
            </div>
            <div className="col-md col-12">
              <ul>
                <li><a href="https://wa.me/919080416643?text=Hi%20team%2C%20I%20need%20a%20support!" target="_blank"> Help & Center </a></li>

                <li><a href="/terms.html">Terms of Services</a></li>
                <li><a href="/privacy.html">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end footer copyright */}
    </>
  );
}

export default App;
