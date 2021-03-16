import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import ListaDeCategorias from "./components/ListaDeCategorias"
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';
import "./assets/App.css";
import './assets/index.css';


class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias;
    this.notas = new ArrayDeNotas;
  }
  
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota={this.notas.adicionarNota}
          categorias={this.categorias.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas 
            apagarNota={this.notas.apagarNotas}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
