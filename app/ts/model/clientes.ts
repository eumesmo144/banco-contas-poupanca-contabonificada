class Clientes extends Cliente {

    private clientes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this.clientes = new Array<Cliente>(); 
    }
    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }
    remover(cpf: string): void {
        const clientepRemover = this.pesquisar(cpf);
        if (clientepRemover) {
            const indiceConta = this.clientes.indexOf(clientepRemover);
            if (indiceConta > -1) {
                this.clientes.splice(indiceConta, 1);
            }
        }
    }
    pesquisar(cpf: string): Cliente {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar(): Array<Cliente> {
        return this.clientes;
    }

    }