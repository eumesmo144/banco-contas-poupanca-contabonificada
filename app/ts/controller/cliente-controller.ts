class ClienteController {
    private _inputName: HTMLInputElement;
    private _inputCPF:  HTMLInputElement;
    private _inputConta: HTMLInputElement;
    private _clientes: Clientes;
     
    constructor() {
        this._inputName =
            <HTMLInputElement>document.querySelector("#clientName")
        this._inputCPF =
            <HTMLInputElement>document.querySelector("#cpf");
        this._inputConta =
            <HTMLInputElement>document.querySelector("#typeConta");
        this._clientes = new Clientes();
    }
    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this._inputName.value, this._inputCPF.value, new Conta (this._inputConta.value));
        this._clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
}
    listar() {
        this._clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }
    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this._clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.querySelector('#cliente').appendChild(elementoP);
    }
}