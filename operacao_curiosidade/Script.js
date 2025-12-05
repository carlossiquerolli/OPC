// Script.js - frontend logic for login and dashboard

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const dados = new FormData(form);

      try {
        const req = await fetch("login.php", {
          method: "POST",
          body: dados
        });

        const resp = await req.text();

        if (resp.trim() === "OK") {
          window.location.href = "Index2.html";
        } else {
          alert("Email ou senha incorretos!");
        }
      } catch (err) {
        alert("Erro ao conectar com o servidor.");
        console.error(err);
      }
    });
  }

  // If on dashboard page, load users
  if (window.location.pathname.includes("Index2.html") || window.location.pathname.endsWith("/")) {
    carregarUsuarios();
    const searchInput = document.getElementById("pesquisar");
    if (searchInput) {
      searchInput.addEventListener("input", filtrarTabela);
    }
  }
});

async function carregarUsuarios() {
  try {
    const req = await fetch("buscar_usuarios.php");
    if (!req.ok) throw new Error("Falha na requisição");
    const usuarios = await req.json();

    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    let ativos = 0;
    let inativos = 0;

    usuarios.forEach(u => {
      if (u.status === "Ativo") ativos++;
      else inativos++;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${u.nome}</td>
        <td>${u.email}</td>
        <td class="${u.status === 'Inativo' ? 'inactive' : ''}">${u.status}</td>
      `;
      lista.appendChild(tr);
    });

    document.getElementById("totalCadastros").textContent = usuarios.length;
    document.getElementById("ativos").textContent = ativos;
    document.getElementById("inativos").textContent = inativos;
  } catch (err) {
    console.error(err);
  }
}

function filtrarTabela(e) {
  const filter = e.target.value.toLowerCase();
  const rows = document.querySelectorAll("#listaUsuarios tr");
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const email = row.cells[1].textContent.toLowerCase();
    row.style.display = (name.includes(filter) || email.includes(filter)) ? "" : "none";
  });
}

function logout() {
  // For this simple implementation just redirect to login page
  window.location.href = "Index.html";
}
