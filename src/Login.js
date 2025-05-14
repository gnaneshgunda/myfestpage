

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        try {
            setError('');

            // Get users from localStorage or default to empty array
            let usersData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
            
            // Find user with matching username
            const user = usersData.find(u => u.name === username);

            // Check user and password
            if (!user) {
                setError('Username not found');
            } else if (user.password !== password) {
                setError('Incorrect password');
            } else {
                console.log('Logged in user:', user);

                // Store user data and login status
                localStorage.setItem('userData', JSON.stringify(user));
                localStorage.setItem('userLoggedIn', 'true');
                
                // Redirect to profile page
                window.location.href = '/profile';
            }
        } catch (err) {
            console.error('Error during login:', err);
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