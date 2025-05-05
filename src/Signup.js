import {Link} from 'react-router-dom';
import {useState} from 'react';


const Signup = () => {
  function handleSignup(){
    const userData={
      name:name,
      password:password,
      email:email,
      college:college,
      phone:phone
    }
    localStorage.setItem("userData",JSON.stringify(userData));  
    localStorage.getItem("users")?localStorage.setItem("users",JSON.stringify([...JSON.parse(localStorage.getItem("users")),userData])):localStorage.setItem("users",JSON.stringify([userData]));
  window.location.href="/profile";
  // const prof=document.getElementById("profile");
  //           prof.style.display="block";
  }
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [college,setCollege]=useState("");
  const [phone,setPhone]=useState("");
  return ( 
        <div id="signupcont">
          <div id="signup">
                <h2>Sign Up</h2>
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                  type="text" 
                  placeholder="College name" 
                  value={college} 
                  onChange={(e) => setCollege(e.target.value)} 
                />
                <input 
                  type="text" 
                  placeholder="Phone number" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
                <button onClick={handleSignup}>Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                
          </div>
          
        </div>
     );
}
 
export default Signup;