const usuario = {
  nome: "George",
  idade: 36,
  endereco: {
    rua: "Rua dos devs",
    numero: "42",
    bairro: "Vale do Silício"
  }
}

const { nome, idade, endereco: { rua, numero, bairro } } = usuario

console.log(`nome: ${nome}\nidade: ${idade}\nendereco:\n rua: ${rua}\n numero: ${numero}\n bairro: ${bairro}`)

function showInfo({ nome, idade }) {
  console.log(nome)
  console.log(idade)
}

showInfo(usuario)