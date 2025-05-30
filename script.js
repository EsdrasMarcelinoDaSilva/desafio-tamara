// const url = `https://openlibrary.org/search.json?q=codigo+limpo`;
const url = `https://picsum.photos/v2/list?page=1&limit=21`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.statusText);
    }
    return response.json();
  })
  .then((dados) => {
    console.log("Resultados da pesquisa DE IMAGENS:", dados); // aqui era data.docs
    preencherCardsImagens(dados); //aqui era dados.docs
  })
  .catch((error) => {
    console.error("Erro ao buscar informações:", error);
  });
// REFACTOR AQUI!!!
//troca de dados livros era o parametro da função livro o parametro do forEach
function preencherCardsImagens(photos) {
  const container = document.querySelector("#container");
  container.innerHTML = ""; // Limpa o conteúdo atual da tabela

  const section = document.createElement("section");
  section.style.display = "grid";
  section.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
  section.style.gap = "10px";


  photos.forEach((thumb) => {
    const linha = document.createElement("div");
    linha.style.textAlign = "center";


    const title = document.createElement("p");
    title.textContent = thumb.author;

    const img = document.createElement("img");

    img.src = `https://picsum.photos/id/${thumb.id}/100`;
    img.width = 100;

    const linkImagem = document.createElement("a");
    linkImagem.href = thumb.download_url;
    linkImagem.textContent = "Ver imagem";
    linkImagem.target = "_blank";

    linha.appendChild(title);
    linha.appendChild(img);
    linha.appendChild(linkImagem);
    section.appendChild(linha);
  });
  container.appendChild(section)
}
