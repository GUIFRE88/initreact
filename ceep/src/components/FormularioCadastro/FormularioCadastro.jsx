import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component{
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
  }
  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value
  }
  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value
  }
  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value
  }
  _criarNota(evento){
    // Desabilita comportamentos default do submit
    evento.preventDefault();
    evento.stopPropagation();
    // Esse método criar nota vendo do App.js
    this.props.criarNota(this.titulo, this.texto, this.categoria)
  }

  render(){
    return(
      <form 
        className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
        <option>Sem Categoria</option>
          {this.props.categorias.map((categoria,index)=>{
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input 
          type="text" 
          placeholder="Titulo" 
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea 
          rows={15} 
          type="text" 
          placeholder="Escreva sua nota..." 
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }  
}

export default FormularioCadastro;