// const url = `https://openlibrary.org/search.json?q=codigo+limpo`;
const url = `https://picsum.photos/v2/list?page=1&limit=10`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.statusText);
    }
    return response.json();
  })
  .then((dados) => {
    console.log("Resultados da pesquisa DE IMAGENS:", dados); // aqui era data.docs
    preencherTabelaLivros(dados); //aqui era dados.docs
  })
  .catch((error) => {
    console.error("Erro ao buscar informações:", error);
  });
// REFACTOR AQUI!!!
//troca de dados livros era o parametro da função livro o parametro do forEach
function preencherTabelaLivros(photos) {
  const body = document.querySelector("tbody");
  body.innerHTML = ""; // Limpa o conteúdo atual da tabela

  photos.forEach((thumb) => {
    const linha = document.createElement("tr");
    const colunaTitle = document.createElement("td");
    colunaTitle.textContent = thumb.author;

    const colunaImg = document.createElement("td");
    const img = document.createElement("img");

    img.src = `https://picsum.photos/id/${thumb.id}/100`;
    img.width = 100;
    colunaImg.appendChild(img);

    const colunaImagem = document.createElement("td");
    const linkImagem = document.createElement("a");
    linkImagem.href = thumb.download_url;
    linkImagem.textContent = "Ver imagem";
    linkImagem.target = "_blank";
    colunaImagem.appendChild(linkImagem);

    linha.appendChild(colunaTitle);
    linha.appendChild(colunaImg);
    linha.appendChild(colunaImagem);
    body.appendChild(linha);
  });
}
