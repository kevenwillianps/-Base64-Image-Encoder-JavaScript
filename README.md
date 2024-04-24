<h1 align="center">Article Model</h1>
<p align="center"><i>Repository for versioning and project documentation used during the series of articles on GitHub.</i></p>

<p align="center" display="inline-block">
  <img src="https://img.shields.io/github/languages/top/Editora-Artigos/article-model" alt="top-language"/>
  <img src="https://img.shields.io/github/languages/count/Editora-Artigos/article-model.svg" alt="number-of-languages"/>
  <a href="https://www.codacy.com/gh/Editora-Artigos/article-model/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Editora-Artigos/article-model&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/a148a172d5b6471098a0f0166b08e542"/></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Editora-Artigos/article-model.svg">
  <a href="https://github.com/Editora-Artigos/article-model/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Editora-Artigos/article-model.svg">
  </a>

  <a href="https://github.com/Editora-Artigos/article-model">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Editora-Artigos/article-model.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/Editora-Artigos/article-model.svg">
  </p>
</p>

Para finalizar o nosso README podemos adicionar estatísticas sobre o repositório como Linguagem mais utilizada, Número de linguagens presentes, qualidade do código e muitas outras através da ferramenta oferecida pela Codacy. Não abordaremos aqui como cadastrar seu repositório e ter acesso a estas estatísticas já que no site deles já tem uma documentação completa sobre isto. Veja como fica:

![added-statistics-to-structure](https://raw.githubusercontent.com/balta-io/blog/main/documentacao-com-github/images/added-statistics-to-structure.jpg)

##  About this project

<h1>Classe JavaScript: File</h1>

<p>Esta documentação detalha a classe <code>File</code>, que gerencia operações relacionadas a arquivos em uma aplicação web, incluindo o carregamento, visualização, e manipulação de dados base64.</p>

<h2>Construtor</h2>
<p>Inicializa as propriedades da instância, preparando a classe para o gerenciamento de arquivos e interações com a interface do usuário.</p>

<h2>Métodos</h2>

<h3>copy(target)</h3>
<p>Permite copiar para a área de transferência o conteúdo em base64 de um arquivo especificado pelo índice <code>target</code> no array <code>_files</code>.</p>

<h3>remove(target)</h3>
<p>Remove um arquivo da interface e do array de controle com base no índice fornecido, limpando a interface se todos os arquivos forem removidos.</p>

<h3>progress()</h3>
<p>Atualiza ou cria uma barra de progresso dentro de um contêiner especificado, refletindo o progresso atual das operações com arquivos.</p>

<h3>view(data)</h3>
<p>Cria elementos HTML que representam visualmente um arquivo, mostrando detalhes e proporcionando interações como visualizar, copiar e deletar.</p>

<h3>getBase64(inputFile)</h3>
<p>Converte de forma assíncrona um arquivo para sua representação em string base64, facilitando outras manipulações ou uso dos dados.</p>

<h3>getChunk(inputString, chunkSize)</h3>
<p>Divide uma string em partes menores para facilitar o processamento ou envio de dados grandes.</p>

<h3>getExtension(data)</h3>
<p>Extrai a extensão de um arquivo, facilitando a identificação do tipo de arquivo e adequação da apresentação.</p>

<h3>getSize(data)</h3>
<p>Converte o tamanho de um arquivo em uma representação legível, melhorando a compreensão do usuário sobre o volume de dados.</p>

<h3>prepare(target)</h3>
<p>Carrega e processa arquivos selecionados, configurando a visualização inicial e manipulando os arquivos para obtenção de detalhes e conversão para base64.</p>

<p>Essa classe demonstra um excelente exemplo de encapsulamento de funcionalidades relacionadas ao gerenciamento de arquivos, mantendo o código organizado e reutilizável.</p>

### Technologies
<p display="inline-block">
  <img width="48" src="https://www.freeiconspng.com/uploads/c-logo-icon-18.png" alt="csharp-logo"/>
  <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png" alt="blazor-logo"/>
</p>
                                                                                                  
### Development Tools

<p display="inline-block">
  <img width="48" src="https://static.wikia.nocookie.net/logopedia/images/e/ec/Microsoft_Visual_Studio_2022.svg" alt="vs-logo"/>
  <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode-logo"/>
  <img width="48" src="https://resources.jetbrains.com/storage/products/rider/img/meta/rider_logo_300x300.png" alt="rider-logo"/>
</p>

## Running
dotnet run

## References
[About issues - GitHub Docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)

[About wikis - GitHub Docs](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis)

[About discussions - GitHub Docs](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/about-discussions)
