import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      notas:[]
    };
  }
  criarNota(titulo,texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    // Busca o array de notas
    let arrayNotas = this.state.notas;
    // Retira o elemento do Array
    arrayNotas.splice(index,1);
    // Seta a mudança de estado para chamar o render
    this.setState({notas:arrayNotas})
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main>
          
        </main>
        <ListaDeNotas 
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
