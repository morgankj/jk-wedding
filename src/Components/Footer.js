import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div>© 2023 Jonagan, LLC. All rights reserved.</div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 1.2rem;
`;