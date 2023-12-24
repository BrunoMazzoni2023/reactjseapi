import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";



const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin-top: 50px;
  width: 100%;
  justify-content: center;
  width: 100%;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getTarefas, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const tarefa = ref.current;

      tarefa.titulo.value = onEdit.titulo;
      tarefa.descricao.value = onEdit.tarefa;
      tarefa.valor.value = onEdit.valor;
      tarefa.data_emissao.value = onEdit.data_emissao;
      tarefa.data_vencimento.value = onEdit.data_vencimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tarefa = ref.current;

    if (
      !tarefa.nome.value ||
      !tarefa.titulo.value ||
      !tarefa.descricao.value ||
      !tarefa.valor.value||
      !tarefa.data_emissao.value||
      !tarefa.data_vencimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          titulo: tarefa.titulo.value,
          descricao: tarefa.descricao.value,
          valor: tarefa.valor.value,
          data_emissao: tarefa.data_emissao.value,
          data_vencimento: tarefa.data_vencimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          titulo: tarefa.titulo.value,
          descricao: tarefa.descricao.value,
          valor: tarefa.valor.value,
          data_emissao: tarefa.data_emissao.value,
          data_vencimento: tarefa.data_vencimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    tarefa.e.value = "";
    tarefa.titulo.value = "";
    tarefa.descricao.value = "";
    tarefa.valor.value = "";
    tarefa.data_emissao.value = "";
    tarefa.data_vencimento.value = "";

    setOnEdit(null);
    getTarefas();
  };


    
  return (
    <div className="Container">

    <FormContainer ref={ref} onSubmit={handleSubmit} style={{backgroundColor:"	#DCDCDC"}}>

    <InputArea>
 
      <label>
        <Label>Titulo</Label>
        <Input name="titulo" />
      </label>
      <br />
  

      <label>
        <Label>Descricao</Label>
        <Input name="descricao" />
      </label>
      <br />


      <label>
        <Label>Valor</Label>
        <Input type="number" 
         name="descricao" />
      </label>
      <br />

  
    

      <label>
        <Label>Data de Emissão</Label>
        <Input type="date"
         name="data_emissao" />
      </label>
      <br />


      <label>
        <Label>Data de Vencimento</Label>
        <Input type="date"
         name="data_vencimento" />
      </label>
      <br />


      <Button type="submit">SALVAR</Button>
      </InputArea>
      </FormContainer>
  </div>
);
}
export default Form;
