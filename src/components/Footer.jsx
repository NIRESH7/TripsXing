import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <img src="/img/Logo white.png" alt="" />
                                <p>TripsXing helps you travel smarter with 10-50% OFF on hotels using our Privilege Card.</p>
                            </div>
                            <div className="col-md">
                                <h6>Contact us</h6>
                                <ul className="contact-info">
                                    <li>
                                        <a href="https://wa.me/919080416643?text=Hi%21%20I'd%20like%20to%20know%20more%20about%20TripsXing!" target="_blank" rel="noreferrer">
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
                                        <a href="https://maps.app.goo.gl/BjV3bsTVR8mfKrTb6" target="_blank" rel="noreferrer">
                                            <i className="la la-map"></i> Covai Tech Park
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <h6>Social Media</h6>
                                <ul>
                                    <li><a href="https://www.instagram.com/tripsxing.official/" target="_blank" rel="noreferrer"><i className="la la-instagram"></i> Instagram</a></li>
                                    <li><a href="https://www.facebook.com/tripsxing.official" target="_blank" rel="noreferrer"><i className="la la-facebook"></i> Facebook</a></li>
                                    <li><a href="https://x.com/tripsxing_" target="_blank" rel="noreferrer"><i className="la la-twitter"></i> Twitter</a></li>
                                    <li><a href="https://www.linkedin.com/company/tripsxing-official/" target="_blank" rel="noreferrer"><i className="la la-linkedin"></i> LinkedIn</a></li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <h6>Usefull Link</h6>
                                <ul>
                                    <li><Link to="/about"><i className="la la-user"></i> About</Link></li>
                                    <li><Link to="/#features"><i className="la la-rocket"></i> Features</Link></li>
                                    <li><Link to="/#download"><i className="la la-dollar"></i> Pricing</Link></li>
                                    <li><a href="mailto:Tripsxing@gmail.com"><i className="la la-envelope"></i> Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-cp">
                <div className="container">
                    <div className="row">
                        <div className="col-md col-12">
                            Copyright 2025 © All Right Reserved | Tripsxing Pvt. Ltd
                        </div>
                        <div className="col-md col-12">
                            <ul>
                                <li><a href="https://wa.me/919080416643?text=Hi%20team%2C%20I%20need%20a%20support!" target="_blank" rel="noreferrer"> Help & Center </a></li>
                                <li><Link to="/terms">Terms of Services</Link></li>
                                <li><a href="/privacy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
