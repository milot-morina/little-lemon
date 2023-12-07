import { useState } from "react";
import { Link } from "react-router-dom";


export default function BookingPage(props) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        people: 1,
        date: "",
        occasion: "",
        preferences: "",
        comments: "",
        finalTime: props.availableTimes
            ? props.availableTimes.map((times) => <option key={times}>{times}</option>)
            : null,
    });

    function handleDateChange(e) {
        const newDate = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            date: newDate,
            finalTime: props.availableTimes
                ? props.availableTimes.map((times) => <option key={times}>{times}</option>)
                : null,
        }));

        props.updateTimes(new Date(newDate));
    }

    return (
        <form className="reservation-form">
            <div className="personal-info">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={50}
                    value={formData.firstName}
                    onChange={(e) => setFormData(e.target.value)}
                ></input>



                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    minLength={2}
                    maxLength={50}
                    value={formData.lastName}
                    onChange={(e) => setFormData(e.target.value)}
                ></input>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    required
                    minLength={4}
                    maxLength={200}
                    onChange={(e) => setFormData(e.target.value)}
                ></input>

                <label htmlFor="phonenum">Phone Number</label>
                <input
                    type="tel"
                    id="phonenum"
                    placeholder="(xxx)-xxx-xxxx"
                    value={formData.tel}
                    required
                    minLength={10}
                    maxLength={25}
                    onChange={(e) => setFormData(e.target.value)}
                ></input>
            </div>

            <div className="reservation-details">
                <label htmlFor="people">Number of People</label>
                <input
                    type="number"
                    id="people"
                    placeholder="Number of People"
                    value={formData.people}
                    required
                    min={1}
                    max={100}
                    onChange={(e) => setFormData(e.target.value)}
                ></input>

                <label htmlFor="date">Select Date</label>
                <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleDateChange}
                ></input>

                <label htmlFor="time">Select Time</label>
                <select id="time" required>
                    {formData.finalTime}
                </select>

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={formData.occasion}
                    onChange={(e) => setFormData(e.target.value)}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>

            </div>

            <div className="additional-details">
                <label htmlFor="preferences">Seating preferences</label>
                <select
                    id="preferences"
                    value={formData.preferences}
                    onChange={(e) => setFormData(e.target.value)}
                >
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>

                <label htmlFor="comments">Additional Comments</label>
                <textarea
                    id="comments"
                    rows={8}
                    cols={50}
                    placeholder="Additional Comments"
                    value={formData.comments}
                    onChange={(e) => setFormData(e.target.value)}
                ></textarea>




                <small>
                    <p>
                        Please double-check your answer before submitting your reservation request.
                    </p>
                </small>
                <Link className="action-button" to="/confirmation">
                    Book Table
                </Link>
            </div>
        </form>
    );
}

