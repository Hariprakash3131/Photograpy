import '../../styles/Navbar.css'
import logoImage from '../../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <div className="navbar-wrapper"> {/* Renamed to avoid conflict */}
            <nav className="navbar navbar-expand-lg">
                <span className='nav-logo'>
                    <Link to="/">
                        <img src={logoImage} alt="Fotokaran Logo"/>
                        <b className='nav-b'>Fotokaran</b>
                    </Link>
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
                        <li className="nav-item"><Link className="nav-link" to="/" onClick={closeMenu}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar
