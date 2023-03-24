class Clientes extends Cliente {

    private clientes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this.clientes = new Array<Cliente>(); 
    }
    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }
    remover(t: Cliente): void {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceConta = this.contas.indexOf(contaARemover);
            if (indiceConta > -1) {
                this.contas.splice(indiceConta, 1);
            }
        }
    }
    }
}