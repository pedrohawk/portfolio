const username = "pedrohawk"; 
const container = document.getElementById("repos-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    container.innerHTML = "";
    repos.forEach(repo => {
      const el = document.createElement("div");
      el.className = "repo";
      el.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "Sem descrição"}</p>
      `;
      container.appendChild(el);
    });
  })
  .catch(err => {
    container.innerHTML = "Erro ao carregar repositórios.";
    console.error(err);
  });
