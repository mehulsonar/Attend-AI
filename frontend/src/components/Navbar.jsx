import "./Navbar.css"
import logo from "../assets/logo.png"
export default function Navbar(){
    return (

        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand nav-link" href="#">
                    <img src={logo} alt="" className="nav-logo"/>
                    <h2 className="nav-text mt-4 ms-4">Attend AI</h2>
                </a>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Features
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Face Recognition</a></li>
                        <li><a className="dropdown-item" href="#">Voice Recognition</a></li>
                    </ul>
                    </div>
                {/* <a href="features">Features</a> */}
                <a href="landing-page">How It Works</a>
                <a href="landing-page">Dashboard Preview</a>
                <a href="footer" >Contact</a>
            </div>
        </nav>
        
        
    )
}
