import '../../styles/Navbar.css'
import logoImage from '../../assets/logo.png'
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

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
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className={`nav-menu ${isOpen ? 'open' : ''}`} id="navbarNav">
                    <ul className="nav-links navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#" onClick={closeMenu}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://astonishing-souffle-3e73d8.netlify.app/" onClick={closeMenu}>Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={closeMenu}>Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={closeMenu}>Booking</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar
