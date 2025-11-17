// src/objetos/modelos/PJ.mjs

import Pessoa from "./Pessoa.mjs";
import IE from "./IE.mjs";

export default class PJ extends Pessoa {
  #cnpj;
  #ie;
  // Novo atributo para Data de Registro
  #dataRegistro; 

  setCNPJ(cnpj) {
    if (cnpj && cnpj.length >= 14) {
      this.#cnpj = cnpj;
      return true;
    }
    return false;
  }

  getCNPJ() {
    return this.#cnpj;
  }

  setIE(ie) {
    if (ie instanceof IE) {
      this.#ie = ie;
      ie.setPJ(this);
      return true;
    }
    return false;
  }

  getIE() {
    return this.#ie;
  }
  
  // Setter para Data de Registro
  setDataRegistro(data) {
    if (data) {
      this.#dataRegistro = data;
      return true;
    }
    return false;
  }

  // Getter para Data de Registro
  getDataRegistro() {
    return this.#dataRegistro;
  }
}