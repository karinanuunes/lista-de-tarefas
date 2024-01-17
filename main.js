let listaTarefas = [];

function adicionarTarefa() {
  const tarefa = document.getElementById("tarefa").value;
  if (tarefa.trim() !== "") {
    listaTarefas.push(tarefa);

    criarLista(tarefa); // Passa o titulo que pegou do input para a funcão criar lista
    localStorage.setItem("lista", JSON.stringify(listaTarefas));
  }
}

function criarLista(tarefa) {
  const tarefas = document.getElementById("tarefas");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  li.textContent = tarefa;
  tarefas.appendChild(ul);
  ul.appendChild(li);

  const concluir = document.createElement("button");
  concluir.id = "concluir";
  concluir.textContent = "Concluir";
  ul.appendChild(concluir);

  concluir.addEventListener("click", () => {
    li.classList.toggle("roxo");
    if (concluir.textContent === "Concluir") concluir.textContent = "Voltar";
    else concluir.textContent = "Concluir";
  });
}

function concluirTarefa() {
  criarLista();
  localStorage.setItem("lista", JSON.stringify(listaTarefas));
}

let listaTarefasLocalStorage = localStorage.getItem("lista");

if (listaTarefasLocalStorage) {
  listaTarefas = JSON.parse(listaTarefasLocalStorage);
  // Passa o titulo para o criar lista
  listaTarefas.forEach((item) => {
    criarLista(item);
  });
}

function removerTarefas() {
  localStorage.clear();

  const ul = document.querySelectorAll("ul");
  ul.forEach((ul) => {
    ul.remove();
  });
}
