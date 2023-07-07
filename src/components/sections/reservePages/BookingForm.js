import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  const handleDateChange = (e) => {
    setDate(e.target.value);
    const date = new Date(e.target.value);
    props.updateTimes(date);
    setFinalTime(
      props.availableTimes.map((times) => <option key={times}>{times}</option>)
    );
  };

  return (
    <form className="reservation-form">
      <div>
        <label htmlFor="fName">First Name</label> <br />
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
      </div>

      {/* Other input fields omitted for brevity */}

      <div>
        <label htmlFor="date">Select Date</label> <br />
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br />
        <select id="time" required>
          {finalTime}
        </select>
      </div>

      {/* Remaining form elements omitted for brevity */}

      <div>
        <br />
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <Link className="action-button" to="/confirmation">
          Book Table
        </Link>
      </div>
    </form>
  );
}
