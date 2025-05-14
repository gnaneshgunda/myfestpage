import {Link} from 'react-router-dom';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
// }
import { useState,useEffect } from 'react';


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('userLoggedIn')) {
            localStorage.setItem('userLoggedIn', 'false');
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkLoginStatus = () => {
                const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
                setIsLoggedIn(userLoggedIn);
            };

            checkLoginStatus();

            // Set up an interval to check login status
            const interval = setInterval(checkLoginStatus, 1000);

            return () => clearInterval(interval);
        }
    }, []);

    return ( 
        <nav className="Nav">
            <div id="logo">
            <img src="https://nssc.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnssc.2592aeea.png&w=640&q=75" alt="Logo" id="logo-image" />
            </div>
            <div id="navbar-links">
                <Link to="/">Home</Link>

                <Link to="/schedule">Schedule</Link>
                <Link to="/teams">Teams</Link>

                {isLoggedIn ? (
                    <>
                        <Link to="/profile" id="profile">Profile</Link>
                    </>
                ) : (
                    <Link to="/login" id="login-but">Login</Link>
                )}
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


