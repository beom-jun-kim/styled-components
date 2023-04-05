import styled, { keyframes } from "styled-components";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Title = styled.span`
  color: ${(prop) => prop.theme.textColor};
  font-size: 5rem;
  transition: .5s;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(prop) => prop.theme.backgroundColor};
`;

const ani = keyframes`
  form {
    transform:translateX(0);
  }
  to {
    /* transform:translateX(500px); */
  }
`;

const Box = styled.div`
  /* height: 100px;
  width: 100px; */
  /* background: skyblue; */
  animation: ${ani} 3s ease-in infinite;
  ${Title} {
    &:hover {
      font-size: 30px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Title as="p">Hello</Title>
      </Box>
    </Wrapper>
  );
}

export default App;
