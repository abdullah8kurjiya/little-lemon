import  BookingForm  from "./BookingForm";
import { fetchAPI, submitAPI } from "./Api";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [availableTimes, setAvailableTimes]=useState([]);
  const [formData,setFormData]=useState({});
  useEffect(()=>{
    setAvailableTimes(updateTimes(date));
  },[date]);
  
  useEffect(()=>{
    //console.log("formData",formData);
    if(Object.keys(formData).length !== 0){
      const isSubmitted = submitAPI(formData);
      if (isSubmitted) {
        navigate("/confirmed-booking");
      }
    }
  },[formData]);


  function initializeTimes(date) {
    return fetchAPI(date);
  }

  function updateTimes(date) {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
  }
  function submitForm(formData) {
    setFormData(formData);
  }

 
  const navigate = useNavigate();

  return  <div>
  {/* <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/> */}
  <BookingForm availableTimes={availableTimes} setDate={setDate} submitForm={submitForm}/>
  </div>
}
