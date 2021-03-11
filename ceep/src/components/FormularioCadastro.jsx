import React, { Component } from "react";

class FormularioCadastro extends Component{
  render(){
    return(
      <form>
        <input type="text" placeholder="Titulo"/>
        <textarea type="text" placeholder="Escreva sua nota..."/>
        <button>Criar Nota</button>
      </form>
    );
  }  
}

export default FormularioCadastro;