import GlobalStyle from "../src/styles/global.js";
import styled from "styled-components";
import Form from "../src/components/Form.js"
/* import Grid from "./components/Grid"; */ 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  `;
  
const Title = styled.h2``;

function Notes() {
  return (
    <>
    <Container>
      <Title>Tarefas</Title>
      <Form />
  
    </Container>
    <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default Notes;
