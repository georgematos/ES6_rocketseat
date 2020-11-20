class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}

class TodoList extends List {
  constructor() {
    super()
    this.user = "George"
  }

  mostraUsuario() {
    console.log(this.user)
  }

  static boasVindas() {
    console.log(`Bem vindo ${this.user}`)
  }

  // metodo statico, não tem acesso aos atributos da classe
  static sum(a, b) {
    console.log(a + b)
  }
}

const MinhasList = new TodoList();

document.getElementById("novotodo").onclick = function () {
  MinhasList.add("Novo todo")
  MinhasList.mostraUsuario()
  TodoList.sum(5, 4)
} 