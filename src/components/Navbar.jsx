import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div id="navbar" className="navbar navbar-expand-lg justify-content-center">
            <div className="container">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav">
                        <li className="nav-item"><Link className="nav-link" to="/#home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/#features">Features</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/#download">Downlaod</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/#faq">Faq</Link></li>
                    </ul>
                </div>
                <a href="/" className="navbar-brand"><img src="/img/logo.png" alt="" /></a>
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
    );
}

export default Navbar;
