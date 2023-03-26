class ClienteController {
    private _inputName: HTMLInputElement;
     private _inputCPF:  HTMLInputElement;
     private _contas: Contas;
    constructor() {
        this._inputName =
            <HTMLInputElement>document.querySelector("#clientName")
        this._inputCPF =
            <HTMLInputElement>document.querySelector("#cpf");
        this._contas = new Contas();
    }
    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Conta(this._inputName.value,
            parseFloat(this._inputCPF.value));

        this._contas.inserir(novoCliente);
        this.inserirContaNoHTML(novoCliente);
}
    listar() {
        this._contas.listar().forEach(
            conta => {
                this.inserirContaNoHTML(conta);
            }
        );
    }
    inserirContaNoHTML(conta: Conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + conta.toString());
                this._contas.remover(conta.numero);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}