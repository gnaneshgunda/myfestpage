const Profile= () => {
   const userData=JSON.parse(localStorage.getItem("userData"));
   
    return ( 
       <div className="profile-container">
         <div className="profile-card">
            <h2>Profile</h2>
            <div><b>Name:</b>   {userData.name}</div>
            <div><b>Your email:</b>   {userData.email}</div>
            <div><b>College:</b>   {userData.college}</div>
            <div><b>Phone number:</b>   {userData.phone}</div>
         </div>   
        </div>
     );
}
 
export default Profile;