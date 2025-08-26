class Pessoa{
    nome;
    idade;
    #cpf;

    constructor (nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.#cpf = cpf;
    }

    getcpf() {
        return this.#cpf
    }

    setcpf(cpf){
        this.#cpf = cpf
    }

    seapresentar(){
        return `Olá, eu sou o ${this.nome} e tenho ${this.idade} anos.`
    }
}
module.exports = Pessoa