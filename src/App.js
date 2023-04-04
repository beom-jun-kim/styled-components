import styled, { keyframes } from "styled-components";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Target = styled.span`
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
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
  height: 100px;
  width: 100px;
  background: skyblue;
  animation: ${ani} 3s ease-in infinite;
  ${Target} {
    &:hover{
      font-size: 30px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Target as="p">hi!</Target>
      </Box>
      <Target>hello!</Target>
    </Wrapper>
  );
}

export default App;
