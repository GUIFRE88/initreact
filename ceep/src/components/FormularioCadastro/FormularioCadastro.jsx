import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component{
  render(){
    return(
      <form className="form-cadastro">
        <input type="text" placeholder="Titulo" className="form-cadastro_input"/>
        <textarea rows={15} type="text" placeholder="Escreva sua nota..." className="form-cadastro_input"/>
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }  
}

export default FormularioCadastro;