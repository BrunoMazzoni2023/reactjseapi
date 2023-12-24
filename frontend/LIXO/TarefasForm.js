/* import React from "react";
import { Button, Form } from 'react-bootstrap';

class TarefasF extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      titulo: '',
      descricao: '',
      valor: '',
      data_emissao: '',
      data_vencimento: '',
      tarefas: [],
      modoEdicao: false, // Novo estado para controlar o modo de edição
    };
  }

  componentDidMount() {
    this.buscarTarefa();
  }

  componenteWillUnmount() {}

  buscarTarefa = () => {
    fetch("http://localhost:8800/")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ tarefas: dados });
      });
  };

  deletarTarefa = (id) => {
    fetch("http://localhost:8800/" + id, { method: 'DELETE' })
      .then((resposta) => {
        if (resposta.ok) {
          this.buscarTarefa();
        }
      });
  };

  cadastraTarefa = (tarefa) => {
    fetch("http://localhost:8800", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => {
        if (resposta.ok) {
          this.setState({ modoEdicao: false }); // Sair do modo de edição
          this.buscarTarefa();
        } else {
          alert("Não foi possível adicionar a tarefa!");
        }
      });
  };

  atualizaTitulo = (e) => {
    this.setState({
      titulo: e.target.value,
    });
  };
  atualizaDescricao = (e) => {
    this.setState({
      descricao: e.target.value,
    });
  };
  atualizaValor = (e) => {
    this.setState({
      valor: e.target.value,
    });
  };
  atualizaDataEmissao = (e) => {
    this.setState({
      data_emissao: e.target.value,
    });
  };
  atualizaDataVencimento = (e) => {
    this.setState({
      data_vencimento: e.target.value,
    });
  };

  submit = () => {
    const tarefa = {
      titulo: this.state.titulo,
      descricao: this.state.descricao,
      valor: this.state.valor,
      data_emissao: this.state.data_emissao,
      data_vencimento: this.state.data_vencimento,
    };

    if (this.state.modoEdicao) {
      // Se estiver no modo de edição, envia uma requisição PUT em vez de POST
      fetch("http://localhost:8800/" + this.state.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tarefa),
      })
        .then((resposta) => {
          if (resposta.ok) {
            this.setState({ modoEdicao: false }); // Sair do modo de edição
            this.buscarTarefa();
          } else {
            alert("Não foi possível atualizar a tarefa!");
          }
        });
    } else {
      // Se não estiver no modo de edição, cadastra a nova tarefa
      this.cadastraTarefa(tarefa);
    }
  };

  // Função para ativar o modo de edição
  editarTarefa = (id) => {
    const tarefaParaEditar = this.state.tarefas.find((tarefa) => tarefa.id === id);
    if (tarefaParaEditar) {
      this.setState({
        id: tarefaParaEditar.id,
        titulo: tarefaParaEditar.titulo,
        descricao: tarefaParaEditar.descricao,
        valor: tarefaParaEditar.valor,
        data_emissao: tarefaParaEditar.data_emissao,
        data_vencimento: tarefaParaEditar.data_vencimento,
        modoEdicao: true, // Entrar no modo de edição
      });
    }
  };

  

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={this.state.id} readOnly={true} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o título"
            value={this.state.titulo}
            onChange={this.atualizaTitulo}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a Descrição"
            value={this.state.descricao}
            onChange={this.atualizaDescricao}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Valor</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite o Valor"
            value={this.state.valor}
            onChange={this.atualizaValor}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data Emissao</Form.Label>
          <Form.Control
            type="date"
            placeholder="Digite a data de emissão"
            value={this.state.data_emissao}
            onChange={this.atualizaDataEmissao}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data Vencimento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Digite a data de vencimento"
            value={this.state.data_vencimento}
            onChange={this.atualizaDataVencimento}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.submit}>
          {this.state.modoEdicao ? 'Atualizar' : 'Salvar'}
        </Button>
      </Form>
    );
  }
}

export default TarefasF;
 */