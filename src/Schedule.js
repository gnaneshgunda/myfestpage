import {Link} from 'react-router-dom';
const Schedule = () => {
    return (
        <div className="schedule-container">
         <Link to="/"><div id="day0">
            <h2>Day 0</h2>
            <h3>Registration</h3>
            <p>Time: 9:00 AM - 10:00 AM</p>
            <p>Location: Main Hall</p>
            <p>Description: Registration for all participants.</p>
         </div>
         </Link>
         <Link to="/"><div id="day1">
            <h2>Day 1</h2>
            <h3>Opening Ceremony</h3>
            <p>Time: 10:00 AM - 11:00 AM</p>
            <p>Location: Main Hall</p>
            <p>Description: Inauguration of the event.</p>
        </div>
        </Link>
        <Link to="/">
        <div id="day2">
                <h2>Day 2</h2>
                <h3>Workshops</h3>
                <p>Time: 11:00 AM - 5:00 PM</p>
                <p>Location: Various Rooms</p>
                <p>Description: Hands-on workshops on various topics.</p>
        </div>
        </Link>

        </div>
      );
}
 
export default Schedule;