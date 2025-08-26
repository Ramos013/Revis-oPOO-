const Pessoa = require('./Pessoa.js');

class Aluno extends Pessoa {

    numero_matricula;

    constructor(nome,idade,matricula){
        super(nome,idade)
        this.numero_matricula = matricula;
    }

    estudar(){
        return `${this.nome} está estudando`;
    }
}
module.exports = Aluno;