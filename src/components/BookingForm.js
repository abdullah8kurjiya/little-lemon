import { useState } from "react";
import { DropDown } from "./DropDown";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { IoMdAlarm } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineExclamation } from "react-icons/hi";
import {IoReturnDownBackSharp} from "react-icons/io5";

export default function BookingForm({ availableTimes, setDate, submitForm }) {
  const [stage, setStage] = useState(1);
  //const [resdate, setResDate] = useState("");
  //const [diners, setDiners] = useState("No. of Diners");
  //const [occasion, setOccasion] = useState("Occasion");
  //const [time, setTime] = useState("Select Time");
  const todayDate = ()=>{
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email:"",
    specialrequest:"",
    date: todayDate(),
    time: "Select Time",
    noOfDiners: "No. of Diners",
    occasion: "Occasion",
  });

  const dinerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    (i) => `${i} Diner${i !== 1 ? "s" : ""}`
  );
  const occasionOptions = ["Birthday", "Engagement", "Anniversary"];
  const occasionIcon = <LiaGlassCheersSolid className="beforeicon" />;
  const timeIcon = <IoMdAlarm className="beforeicon" />;
  const dineIcon = <BsPerson className="beforeicon" />;
  const errorIcon = <HiOutlineExclamation className="erroricon" />;
  const handleDateChange = (event) => {
    //dispatch({ type: "UPDATE_TIME_LIST", payload: event.target.value });
    console.log(event.target.value);
    if(event.target.value===""){
      setDate(todayDate());
    }else{
      setDate(new Date(event.target.value));
    }
    
    //setResDate(event.target.value);
    setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value==="" ? todayDate() : event.target.value,
      }));
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log(formData);
    if(formData.firstname!=="" && formData.lastname!=="" && formData.phonenumber!=="" &&
    formData.email!=="" && formData.noOfDiners!=="No. of Diners" && formData.time!=="Select Time" 
    && formData.occasion!=="Occasion" && formData.date!==null && formData.date!==undefined 
    && formData.date!==""){
      submitForm(formData);
    }
    //
  }
  const handleFormChange = (event) => {
    //console.log(event.target.name,event.target.value);
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    //console.log(formData);
  };
  const setDiners = (noofdiners)=>{
    setFormData((prev) => ({
        ...prev,
        noOfDiners: noofdiners,
      }));
  }
  const setTime = (t)=>{
    setFormData((prev) => ({
        ...prev,
        time: t,
      }));
  }
  const setOccasion = (o)=>{
    setFormData((prev) => ({
        ...prev,
        occasion: o,
      }));
  }
  const generateErrorData = (d) => {
    return (
      <div
        className="errorcontainer"
        onClick={() => {
          setStage(1);
        }}
      >
        {errorIcon}
        {d}
      </div>
    );
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="bookcontainer">
        {stage===2 ?
        (
          <div className="backarrowcontainer">
            <span>
              <IoReturnDownBackSharp className="backarrow" title="Back To Reservation" onClick={()=>{setStage(1);}}/> Back To Reservation
            </span>
        </div>
        ) : ""}

        {stage === 1 ? (
          <div className="bookingformcontainer">
            <div className="dateitemscontainer">
              <label htmlFor="formdate">Date</label>
              <AiOutlineCalendar className="dateIcon" />
              <input
                name="date"
                id="formdate"
                type="date"
                value={formData.date}
                className="bookingformdate"
                onChange={handleDateChange}
              ></input>
            </div>
            <div>
              <label>Number of Diners</label>
              <DropDown
                lefticon={dineIcon}
                selected={formData.noOfDiners}
                setSelected={setDiners}
                options={dinerOptions}
                grid={true}
                defaultstate="No. of Diners"
              />
            </div>
            <div>
              <label>Occasion</label>
              <DropDown
                lefticon={occasionIcon}
                selected={formData.occasion}
                setSelected={setOccasion}
                options={occasionOptions}
                grid={false}
                defaultstate="Occasion"
              />
            </div>
            <div>
              <label>Time</label>
              <DropDown
                lefticon={timeIcon}
                selected={formData.time}
                setSelected={setTime}
                options={availableTimes}
                grid={true}
                defaultstate="Select Time"
              />
            </div>
            <input
              className="button-primary"
              type="button"
              value="Reserve a Table"
              aria-label="submit button"
              onClick={(e) => {
                setStage(2);
              }}
            />
          </div>
        ) : (
          <div className="bookingformcontainer">
            <div className="inputcontainer">
              <AiFillStar className="beforeicon" />
              <label htmlFor="firstname">First Name</label>
              <input
                name="firstname"
                id="firstname"
                type="text"
                value={formData.firstname}
                onChange={handleFormChange}
                className="bookingformdate"
                required
              ></input>
            </div>
            <div className="inputcontainer">
              <AiFillStar className="beforeicon" />
              <label htmlFor="lastname">Last Name</label>
              <input
                name="lastname"
                id="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleFormChange}
                className="bookingformdate"
                required
              ></input>
            </div>
            <div className="inputcontainer">
              <AiFillStar className="beforeicon" />
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                className="bookingformdate"
                required
              ></input>
            </div>
            <div className="inputcontainer">
              <AiFillStar className="beforeicon" />
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                name="phonenumber"
                id="phonenumber"
                type="text"
                value={formData.phonenumber}
                placeholder="555-444-1234"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleFormChange}
                className="bookingformdate"
                required
              ></input>
            </div>
            <div className="reservationdatesummary">
              <div>
                <AiOutlineCalendar className="beforeicon" />
                {formData.date === undefined || formData.date === null || formData.date === ""
                  ? generateErrorData("Select Date")
                  : formData.date}
              </div>
              <div>
                {dineIcon}
                {formData.noOfDiners === "No. of Diners"
                  ? generateErrorData("Select Diners")
                  : formData.noOfDiners}
              </div>
              <div>
                {timeIcon}
                {formData.time === "Select Time"
                  ? generateErrorData("Select Time")
                  : formData.time}
              </div>
              <div>
                {occasionIcon}
                {formData.occasion === "Occasion"
                  ? generateErrorData("Select Occasion")
                  : formData.occasion}
              </div>
            </div>
            <div className="inputcontainer">
              <label htmlFor="specialcomment">Sepcial Request</label>
              <textarea
                rows={10}
                name="specialrequest"
                id="specialcomment"
                value={formData.specialrequest}
                onChange={handleFormChange}
                className="bookingformdate"
              ></textarea>
            </div>
            <input
              className="button-primary"
              type="submit"
              value="Confirm Reservation"
              aria-label="submit button"
            />
          </div>
        )}
      </div>
    </form>
  );
}
