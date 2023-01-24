/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const dateFormated = (localeTime) => localeTime
const data = new Date()
const localeTime = data.toLocaleDateString()


console.log(dateFormated(localeTime))

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/


/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const destructuring = ( {id, isVerified} ) => console.log(id, isVerified)
destructuring(user)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const namesRobots = ( {name: nameA}, {name: nameB} ) => console.log(nameA, nameB)
namesRobots(robotA, robotB)
/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const obj = {
  a: a,
  b: b,
  c: c,
  showName() {console.log(a,b,c)}
}

obj.showName()

/*
  06

  - Refatore o código abaixo.
*/

const anotherData = {
  target: '1',
  property: '2',
  willChange: 'valor indesejado' 
}

const useDataSomewhereElse = value => console.log(value)

const updateSomething = ({ target: tar, property: prop, willChange: willChange }) => {
  willChange === 'valor indesejado' ? willChange = 'valor desejado' : null
  useDataSomewhereElse({ tar, prop, willChange })
}

updateSomething(anotherData)

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)
