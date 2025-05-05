// import {Link} from 'react-router-dom';
// const dataobtain=async()=>{
//     const response=await fetch('http://localhost:8000/users')
//     const data=response.json()
//     return data
// }
// const data=await dataobtain();
// console.log(data);




// const Login = () => {
//     return ( 
//         <div className="login-container">
//              <div id="login"> 
//                  <h2>Login</h2>
//                  <input type="text" placeholder="Username" />
//                  <input type="password" placeholder="Password" />
//                  <button>Login</button>
//                  <p>Don't have an account? <a href="/signup">Sign Up</a></p>

//              </div>

            
//         </div>
//      );
// }
 
// export default Login;

import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');

        try {
            const response = await fetch('/data.json');
            let users = await response.json();

            let user = users.find(
                (u) => u.name === username
            );
            if(!user){
                let usersdata = localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[];
                user = usersdata.find(
                    (u) => u.name === username
                );
            }

            if (!user) {
                setError('Username not found');
            } else if (user.password !== password) {
                setError('Incorrect password');
            } else {
                console.log('Logged in user:', user);

                localStorage.setItem('userData', JSON.stringify(user));
            window.location.href = '/profile';
            // const prof=document.getElementById("profile");
            // prof.style.display="block";
            // const login=document.getElementById("login-but");
            // login.style.display="none";
            // const logout=document.getElementById("logout-but");
            // logout.style.display="block";

            }
        } catch (err) {
            console.error('Error fetching users:', err);
            setError('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <div id="login">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;

