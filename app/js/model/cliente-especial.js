class ClienteEspecial extends Cliente {
    _dependentes;

    constructor(nome, cpf, conta, dependentes) {
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }
    
    get dependentes(){
        return this._dependentes;
    }
    adicionarDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDepedente(dependente){
        let index = this._dependentes.findIndex(cliente => cliente.cpf == dependente.cpf);
        if (index !== -1){
            this._dependentes.splice(index, 1);
        }
    }
}