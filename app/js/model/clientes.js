class Clientes{

    _clientes;
    constructor() {
        this._clientes = new Array; 
    }
    inserir(cliente){
        this._clientes.push(cliente);
    }
    remover(cpf){
            const indexCliente = this._clientes.findIndex(cliente => cliente.cpf == cpf);
            if (indexCliente > -1) {
                this._clientes.splice(indexCliente, 1);
            }
        }
    
    pesquisar(cpf){
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this._clientes;
    }
}
