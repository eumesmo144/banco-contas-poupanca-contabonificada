// let contaController = new ContaController();
let clienteController = new ClienteController();
clienteController.listar();
// contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const cli1 = new Cliente('Manoel Gomes', '12334', c1);
const cli2 = new Cliente('Yukata Maeno', '12445', p1);