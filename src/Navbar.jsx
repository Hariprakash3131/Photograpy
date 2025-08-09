import './Navbar.css'
import logoImage from './assets/logo.png'
function Navbar() {
    return (
        <div className="navbar-wrapper"> {/* Renamed to avoid conflict */}
            <nav className="navbar navbar-expand-lg">
                <span className='nav-logo'>
                    <img src={logoImage} alt="Fotokaran Logo"/>
                    <b className='nav-b'>Fotokaran</b>
                </span>

                {/* Hamburger Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-links navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Booking</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                    </ul>
                </div>

                <div className='nav-button'>
                    <button className='nav-booknow'>Book Now</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
