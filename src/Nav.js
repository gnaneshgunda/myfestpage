import {Link} from 'react-router-dom';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
// }



const NavBar = () => {
    return ( 
        <nav className="Nav">
            <div id="logo">
            <img src="https://nssc.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnssc.2592aeea.png&w=640&q=75" alt="Logo" id="logo-image" />
            </div>
            <div className="nav-links">
                <Link to="/"><button>Home</button></Link>

                <Link to="/schedule"><button>Schedule</button></Link>
                <Link to="/teams"><button>Teams</button></Link>
                <Link to="/login" id="login-but"><button>Login</button></Link>
                <Link to="/logout" id="logout-but"><button>Logout</button></Link>
                <Link to="/profile" id="profile"><button>Profile</button></Link>
            </div>
           <div id="hamburger-icon">
           ☰
            </div>

            <div id="hamburger">
                <Link to="/"><div className="bar">Home</div></Link>
                <Link to="/schedule"><div className="bar">Schedule</div></Link>
                <Link to="/teams"><div className="bar">Teams</div></Link>
                <Link to="/profile" id="profile"><div className="bar">Profile</div></Link>
            </div>    
        </nav>
     );
}
 
export default NavBar;


