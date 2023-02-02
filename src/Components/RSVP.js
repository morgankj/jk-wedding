import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import RSVPForm from "./RSVPForm";

const initialFormValues = {
  name: '',
  email: '',
  attending: false,
  whoWith: '',
  specialNotes: ''
}

export default function Rsvp() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const postNewAttendee = newAttendee => {
    axios.post('https://reqres.in/api/users', newAttendee)
      .then(res => {
        console.log("Response: ", [res.data]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  };

  const formSubmit = () => {
    const newAttendee = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      attending: formValues.attending,
      whoWith: formValues.whoWith.trim(),
      specialNotes: formValues.specialNotes.trim()
    }
    postNewAttendee(newAttendee);
  };

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value});
  };
  


  return (
    <StyledRsvp>
      <h1>RSVP</h1>
      <div className="panelContainer">
        <div className="rsvpWeddingDetails">
          <h2>Details</h2>
          <div className="whereWhen">
            <p><span className="bold">Where:</span> 3610 Lohman Ford Rd, Lago Vista, TX 78645</p>
            <p><span className="bold">When:</span> August 7th starting at 4pm</p>
          </div>
          <p>Please RSVP by July 7th.</p>
          <p>Taco Bell and wedding cake will be served buffet style!</p>
          <p>To see a full breakdown of the menu, click <a href="https://www.tacobell.com/" target="_blank" rel="noreferrer">here</a></p>
        </div>
        <div className="rsvpForm">
          <h2>Are you Attending?</h2>
          <RSVPForm formValues={formValues} formSubmit={formSubmit} inputChange={inputChange} />
        </div>
      </div>
    </StyledRsvp>
  );
}

const StyledRsvp = styled.div`
  h2 {
    font-size: 3rem;
    margin: 5%;
  }
  .panelContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .whereWhen {
    text-align: left;
  }
  .rsvpForm {
    background: white;
    margin: 3rem;
    padding: 3rem;
    border: solid #bc6c25 7px;
  }
`;