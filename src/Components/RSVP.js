import { React, useState, useEffect } from "react";
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
        console.log("Response: ", [res]);
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
      <div className="rsvpWeddingDetails"></div>
      <div className="rsvpForm">
        <h2>Are you Attending?</h2>
        <RSVPForm formValues={formValues} formSubmit={formSubmit} inputChange={inputChange} />
      </div>
    </StyledRsvp>
  );
}

const StyledRsvp = styled.div`
`;