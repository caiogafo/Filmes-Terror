function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Não encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado
            resultados += `
             <div class="item-resultado">
                <h2>
                    <p>${dado.titulo}</p>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href=${dado.saibamais} target="_blank">Saiba mais</a>
            </div>
      `;
        }
    }  

    if (!resultados ) {
        resultados = "<p>Não encontrado</p>"

    }
    
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }