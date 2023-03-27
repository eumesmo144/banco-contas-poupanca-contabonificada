class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta, dependentes: Array<Cliente>) {
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }
    
    get dependentes(): Array<Cliente>{
        return this._dependentes;
    }
    adicionarDependente(dependente: Cliente) {
        this._dependentes.push(dependente);
    }
    removerDepedente(dependente: Cliente){
        let index: number = this._dependentes.findIndex(cliente => cliente.cpf == dependente.cpf);
        if (index !== -1){
            this._dependentes.splice(index, 1);
        }
    }
}