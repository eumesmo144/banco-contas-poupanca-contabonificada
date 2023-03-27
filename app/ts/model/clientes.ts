class Clientes{

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>(); 
    }
    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }
    remover(cpf: string): void {
            const indexCliente: number = this._clientes.findIndex(cliente => cliente.cpf == cpf);
            if (indexCliente > -1) {
                this._clientes.splice(indexCliente, 1);
            }
        }
    
    pesquisar(cpf: string): Cliente {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    listar(): Array<Cliente> {
        return this._clientes;
    }
}
