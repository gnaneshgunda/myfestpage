import { Link } from "react-router-dom";
const Profile= () => {
   const userData=JSON.parse(localStorage.getItem("userData"));
   const handlelogout=()=>{
      localStorage.setItem('userLoggedIn', 'false');
      localStorage.removeItem('userData');
   }


    return ( 
       <div className="profile-container">
         <div className="profile-card">
            <h2>Profile</h2>
            <div><b>Name:</b>   {userData.name}</div>
            <div><b>Your email:</b>   {userData.email}</div>
            <div><b>College:</b>   {userData.college}</div>
            <div><b>Phone number:</b>   {userData.phone}</div>

            <Link to="/" id="logout-but" onClick={handlelogout}>Logout</Link>
         </div>   
        </div>
     );
}
 
export default Profile;