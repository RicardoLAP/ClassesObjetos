// Classes  
class Cliente {
    constructor(cpf, nome, datanasc) {
        this.cpf = cpf
        this.nome = nome
        this.datanasc = datanasc
    }
}

class Produto {
    constructor(codigo, descr, qtdestoque) {
        this.codigo = codigo
        this.descr = descr
        this.qtdestoque = qtdestoque
    }
}

class Venda {
    constructor(codigo, datahora, cliente, produto) {
        this.codigo = codigo
        this.datahora = datahora
        this.cliente = cliente
        this.produto = produto

    }
}
// Novo Cliente
let cliente1 = new Cliente('123456789', 'João', '1990-05-15')
let cliente2 = new Cliente('987654321', 'Maria', '1995-10-20')

// Novo Produto
let produto1 = new Produto('001', 'Camiseta', 10)
let produto2 = new Produto('002', 'Calça', 5)

//Nova venda
let venda1 = new Venda('001', '24031990', cliente1, produto1)
let venda2 = new Venda('002', '24021990', cliente2, produto2)

console.log(venda1.cliente.nome)
console.log(venda2.produto.descr)

// Nova Array 
let clientes = []
let produtos = []
let vendas = []

// Nova Instaciando objetos da classe Produto
for (let i = 0; i < 3; i++) {
    let cliente = new Cliente(`CPF ${i}`, `Cliente ${i}`, '1990-01-01')
    clientes.push(cliente)
}

for (let i = 0; i < 8; i++) {
    let produto = new Produto(`COD ${i}`, `Produto ${i}`, 10)
    produtos.push(produto)
}

// Instanciando objetos da classe Venda, fazendo referência aos clientes e produtos existentes
for (let i = 0; i <5; i++) {
    let clienteIndex = i % 3
    let produtoIndex = i % 8
    let venda = new Venda(`VENDA ${i}`, new Date(), clientes[clienteIndex], produtos[produtoIndex])
    vendas.push(venda)
}

// Exibindo objetos criados
console.log(clientes)
console.log(produtos)
console.log(vendas)


// Arrays para armazenar os objetos de cada classe 
let arrayClientes = clientes
let arrayProdutos = produtos
let arrayVendas = vendas

// Exibindo os atributos de cada objeto
console.log("Atributos dos Clientes:")
arrayClientes.forEach(cliente => {
    console.log(cliente.nome)
})

console.log("Atributos do Produtos:")
arrayProdutos.forEach(produto => {
    console.log(produto.descr)
})

console.log("Atributos das Vendas:")
arrayVendas.forEach(venda => {
    console.log(venda.datahora)
})

// Transformando o array de Clientes em um objeto Map
let mapClientes = new Map(arrayClientes.map(cliente => [cliente.cpf, [cliente.nome, cliente.datanasc]]))

// Transformando o array de Produtos em um objeto Map
let mapProdutos = new Map(arrayProdutos.map(produto => [produto.codigo, [produto.descr, produto.qtdestoque]]))

// Transformando o array de Vendas em um objeto Map
let mapVendas = new Map(arrayVendas.map(venda => [venda.codigo, [venda.datahora, venda.cliente, venda.produto]]))

// Exibindo os objetos Map
console.log("Objeto Map dos Clientes:", mapClientes)
console.log("Objeto Map dos Produtos:", mapProdutos)
console.log("Objeto Map das Vendas:", mapVendas)

// Transformando o array de Clientes em um objeto Map
let mapClientes1 = new Map(arrayClientes.map(cliente => [cliente.cpf, { nome: cliente.nome, datanascimento: cliente.dataNascimento }]))

// Transformando o array de Produtos em um objeto Map
let mapProdutos1 = new Map(arrayProdutos.map(produto => [produto.codigo, {descr: produto.descr, qtdestoque: produto.qtdestoque} ]))

// Transformando o array de Vendas em um objeto Map
let mapVendas1 = new Map(arrayVendas.map(venda => [venda.codigo, {datahora: venda.cliente, produto: venda.produto }]))

// Exibindo os objetos Map
console.log("Objeto Map dos CLientes:", mapClientes)
console.log("Objeto Map dos Produtos", mapProdutos)
console.log("Objeto Map das Vendas", mapVendas)