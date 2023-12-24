import React from "react";
import { Button, Table,Form,Modal } from 'react-bootstrap';
/* import { Link } from 'react-router-dom'; */


class Tarefas extends React.Component{
  
    constructor(props){
        super(props);

        this.state = {
            id: 0,
            titulo: '',
            descricao: '',
            tarefas : [],
            modalAberta: false
        }
    }

componentDidMount(){
    this.buscarTarefa();
}
componenteWillUnmount(){
 
}

buscarTarefa = () => {
   fetch("http://localhost:8800/tarefas")
    .then(resposta => resposta.json())
    .then(dados => {
        this.setState({tarefas : dados})
    })
}

deletarTarefa = (id) => {
    fetch("http://localhost:8800/tarefas/"+id, { method: 'DELETE'})
    .then(resposta => {
   if(resposta.ok){
        this.buscarTarefa();
     }
   })
}

carregaDados = (id) => {
  fetch("http://localhost:8800/tarefas/" + id, { method: 'GET' })
    .then(resposta => resposta.json())
    .then(tarefa => {
      this.setState({
        id: id, // Set the correct ID here
        titulo: tarefa.titulo,
        descricao: tarefa.descricao
      })
      this.abrirModal()
    })
}


cadastraTarefa = (tarefa) => {
  fetch("http://localhost:8800/tarefas", 
  { method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tarefa)
  })
    .then((resposta) => {
      if (resposta.ok) {
        this.buscarTarefa();
      } else {
        alert("Não foi possível adicionar a tarefa!");
      }
    })
}

atualizarTarefa = (tarefa) => {
  fetch("http://localhost:8800/tarefas/"+tarefa.id, { 
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tarefa)
  })
    .then((resposta) => {
      if (resposta.ok) {
        this.buscarTarefa();
      } else {
        alert("Não foi possível adicionar a tarefa!");
      }
    })
}

renderTabela() {
   return <Table striped borded hover>
   <thead>
   <tr>
       <th>Titulo</th>
       <th>Descrição</th>
       <th>Opções</th>
   </tr>
 </thead>
 <tbody>
       {
         this.state.tarefas.map((tarefa) =>
         <tr key={tarefa.id}>
     <td>{tarefa.titulo} </td>
     <td>{tarefa.descricao}</td>
     <td>
 
       <Button variant="secondary" onClick={() => this.carregaDados(tarefa.id)}>Atualizar</Button> 
       <Button variant="danger" onClick={() => this.deletarTarefa(tarefa.id)}>Excluir</Button>
       
     </td>
   </tr>
           )
       }
    </tbody>
</Table>
}

atualizaTitulo = (e) => {
    this.setState(
      {
        titulo: e.target.value
      }
    )
}

atualizaDescricao = (e) => {
  this.setState(
    {
      descricao: e.target.value
    }
  )
}

submit = () => {

  if(this.state.id === 0){
      const tarefa = {
        id: this.state.id,
          titulo: this.state.titulo,
          descricao: this.state.descricao
      };

      this.cadastraTarefa(tarefa);
    }else{
      const tarefa = {
        id: this.state.id,
        titulo: this.state.titulo,
        descricao: this.state.descricao
    };

    this.atualizarTarefa(tarefa);
    }
    this.fecharModal();

}

    reset = () => {
      this.setState(
        {
          id: 0,
          titulo:'',
          descricao: '',
        }
      )
      this.abrirModal();
    }

    fecharModal = () => {
      this.setState(
        {
          modalAberta: false
        }
      )
    }

    abrirModal = () => {
      this.setState(
        {
          modalAberta: true
        }
      )
    }

    render(){
        return(
            <div>


        <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Formulário</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>
                  <Form.Group className="mb-3"> <Form.Label>ID</Form.Label>
                    <Form.Control type="text" value={this.state.id} readOnly={true}/>
                    </Form.Group>


                    <Form.Group className="mb-3"> <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Digite o título" value={this.state.titulo} onChange={this.atualizaTitulo}/>
                    </Form.Group>

                    <Form.Group className="mb-3"><Form.Label>Descrição</Form.Label>
                      <Form.Control type="text" placeholder="Digite a Descrição" value={this.state.descricao} onChange={this.atualizaDescricao} />
                    </Form.Group>

                    <Button variant="warning" type="submit" onClick={this.reset}>
                      Limpar
                    </Button>

      	     </Form>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.fecharModal}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit" onClick={this.submit}>
                      Salvar
                    </Button>
                  
                </Modal.Footer>
              </Modal>


              <Button variant="warning" type="submit" onClick={this.abrirModal}>
                      Novo
                    </Button>

            
             {this.renderTabela()}
          </div>
      
        )
    }

}

export default Tarefas;




