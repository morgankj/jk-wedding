import React from "react";
import styled from "styled-components";

export default function RSVPForm(props) {
  const { formValues, formSubmit, inputChange } = props;

  const onSubmit = (event) => {
    console.log("Submitted form values: ", formValues);
    event.preventDefault();
    formSubmit();
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const realValue = type === "checkbox" ? checked : value;
    inputChange(name, realValue);
  };

  return (
    <StyledRSVPForm onSubmit={onSubmit}>
      <div className="formInputs">
        <label>
          Name&nbsp;
          <input
            value={formValues.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>
        <br />
        <label>
          Email&nbsp;
          <input
            value={formValues.email}
            onChange={onChange}
            name="email"
            type="email"
          />
        </label>
        <br />
        <div className="attending">
          <label>
            Not Attending&nbsp;
            <input
              value={formValues.attending}
              onChange={onChange}
              name="attending"
              type="radio"
            />
          </label>
          <br />
          <label>
            Attending&nbsp;
            <input
              value={formValues.attending}
              onChange={onChange}
              name="attending"
              type="radio"
            />
          </label>
          <br />
        </div>
        <label>
          How Many People in Your Party&nbsp;
          <input
            value={formValues.whoWith}
            onChange={onChange}
            name="whoWith"
            type="text"
            placeholder="Including yourself"
          />
        </label>
        <br />
        <label className="specialNotes">
          Special Notes&nbsp;
          <textarea
            value={formValues.specialNotes}
            onChange={onChange}
            name="specialNotes"
            type="text"
          />
        </label>
        <br />
      </div>
      <button id="submit">SUBMIT</button>
    </StyledRSVPForm>
  );
}

const StyledRSVPForm = styled.form`
  .formInputs {
    display: flex;
    flex-direction: column;
    align-items: start;
    /* justify-content: flex-start; */
  }
  .attending {
    text-align: right;
    margin: 1rem 0;
    border: solid grey 1px;
    padding: 1.5rem;
  }
  .specialNotes {
    display: flex;
  }
`;
