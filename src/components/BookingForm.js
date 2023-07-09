import { useState } from "react";

export default function BookingForm() {

    // const []

    const [book, setBook] = useState ({
        date:"",
        time:"",
        guests:"1",
        occasion:"",
    })
    return (
        <form className="booking">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={book.date} onChange={(e) => setBook(e.target.value)}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={book.time} onChange={(e) => setBook(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={book.guests} onChange={(e) => setBook(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select className="oop" id="occasion" value={book.occasion} onChange={(e) => setBook(e.target.value)}>
                <option className="oop">Birthday</option>
                <option className="oop">Anniversary</option>
            </select>
            
            <div className="select-menu">
                <div className="select-btn" >
                    <span>Occasion</span>
                </div>

                <ul className="options">
                    <li className="option">
                        <span className="option-text">Birthday</span>
                    </li>
                    <li className="option">
                        <span className="option-text">Anniversary</span>
                    </li>
                    <li className="option">
                        <span className="option-text">Engagement</span>
                    </li>
                </ul>
            </div>

            <input type="submit" value="Make Your reservation"/>
        </form>
    );
}

