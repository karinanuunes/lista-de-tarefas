let listaTarefas = [];

function adicionarTarefa() {
  const tarefa = document.getElementById("tarefa").value;
  if (tarefa.trim() !== "") {
    listaTarefas.push(tarefa);

    criarLista();
    localStorage.setItem("lista", JSON.stringify(listaTarefas));
  }
}

function criarLista() {
  const tarefas = document.getElementById("tarefas");
  const tarefa = document.getElementById("tarefa").value;
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
  });
}

function concluirTarefa() {
  criarLista();
  localStorage.setItem("lista", JSON.stringify(listaTarefas));
}

let listaTarefasLocalStorage = localStorage.getItem("lista");

if (listaTarefasLocalStorage) {
  listaTarefas = JSON.parse(listaTarefasLocalStorage);
  criarLista();
}

function removerTarefas() {
  localStorage.clear();

  const ul = document.querySelectorAll("ul");
  ul.forEach((ul) => {
    ul.remove();
  });
}