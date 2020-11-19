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
}

const MinhasList = new TodoList();

document.getElementById("novotodo").onclick = function () {
  MinhasList.add("Novo todo")
  MinhasList.mostraUsuario()
}