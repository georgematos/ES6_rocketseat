// rest operator ...

const usuario = {
  nome: "George",
  idade: 36,
  empresa: "MyWallet"
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr
const { ...params } = arr // transforma o array em um objeto onde chave é o indice e o valor é o valor

console.log(a)
console.log(b)
console.log(c)

console.log(params)

function showAll(...params) {
  params.forEach(x => console.log(x))
}

showAll(1, 2, 3, 4, 5)

// spread operator

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2] // une os dois arrays

console.log(arr3)

// trocando propriedades de um objeto

const usuario1 = {
  nome: "George",
  idade: 36,
  empresa: "MyWallet"
}

const usuario2 = { ...usuario1, empresa: "Dell" }

console.log(usuario2)