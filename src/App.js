import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Father = styled.div`
  display:flex;  
`;

const Box1 = styled.div`
  background:skyblue; 
  width:100px; 
  height:100px;
`;

const Box2 = styled.div`
  background:red; 
  width:100px; 
  height:100px;
`;

const Text = styled.h1`
  color: red;
`;

function App() {
  return (
    <Father>
      <Box1>
        <Text>hi!</Text>
      </Box1>
      <Box2 />
    </Father>
  );
}

export default App;
