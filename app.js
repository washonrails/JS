/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

console.log('Linha 1')
console.log('Linha 2')

setTimeout(() => console.log('linha 9'), 2000)

console.log('Linha 3')
console.log('Linha 4')

setTimeout(() => console.log('linha 10'), 2000)

console.log('Linha 5')
console.log('Linha 6')
console.log('Linha 7')
console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting (name) {
  console.log(`olá, ${name}`)
}

logGreeting('wallace')

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const lesserThanFive = [3, 4, 10, 20].filter(n => n < 5)
console.log(lesserThanFive)

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
totalPrice = prices.reduce((acc, suc) => acc + suc, 0)

console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: 'amarelo' }

car["color"] = 'azul'
console.log(car.color)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

function verifyParams(p1, p2, p3) {
  const params = arguments.callee.length
  const args = arguments.length
  
  if (params === args) {
    return 'A funcao foi invocada com 3 argumentos'
  }

  return 'A funcao deve ser invodada com pelo menos 3 argumentos'
}

console.log(verifyParams(1,2,3))

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa.
      Esse número não precisa encher a caixa de uma só vez, os livros podem
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular)
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0,

  addBooks (num) {
    const sleep = ms => new Promise( res => setTimeout(res, ms) )

    const demo = async () => {

    let numBooksToAdd = num;

    if (numBooksToAdd > this.spaces) return console.log('O numero de livros excede o numero de espaços na prateleira')

      while (numBooksToAdd <= this.spaces) {
        this.booksIn++
        numBooksToAdd--

        console.log(`Já há  ${this.booksIn} livros na caixa`)

        const oneBookRest = !numBooksToAdd && this.booksIn === 4
        const fullShelf = this.booksIn === this.spaces

        if (oneBookRest) return console.log('So cabe mais um livro na prateleira')
        if (fullShelf) return console.log(`A prateleira esta cheia!`)
        if (!numBooksToAdd) return console.log(`So cabem mais ${this.spaces - this.booksIn} livros`)

        await sleep(1000);
      }
    }

    demo()
  }
}

booksBox.addBooks(3)
