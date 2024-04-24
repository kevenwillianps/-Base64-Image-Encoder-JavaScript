/** Classe Desejada */
class File {

    /** Método construtor */
    constructor() {

        /** Parâmetros da classe */
        this._zone = null;
        this._zone_preview = null;
        this._files = [];
        this._size = 0;

    }

    /**
     * Copia o conteúdo em base64 de um arquivo especificado para a área de transferência do sistema.
     * Este método facilita a interação do usuário, permitindo copiar diretamente os dados de um arquivo,
     * como uma string base64, sem a necessidade de interações manuais adicionais.
     *
     * @param {number} target - O índice do arquivo no array `_files` do qual o conteúdo em base64 será copiado.
     */
    download(target) {

        // Obtenho o base64 salvo em variavel
        const data = this._files[target].base64;

        // Criar um blob
        const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });

        // Criar um link para download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this._files[target].name + ".txt"; // Nome do arquivo para download
        document.body.appendChild(a);
        a.click();

        // Limpar e remover o link
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

    }

    /**
     * Copia o conteúdo em base64 de um arquivo especificado para a área de transferência do sistema.
     * Este método facilita a interação do usuário, permitindo copiar diretamente os dados de um arquivo,
     * como uma string base64, sem a necessidade de interações manuais adicionais.
     *
     * @param {number} target - O índice do arquivo no array `_files` do qual o conteúdo em base64 será copiado.
     */
    copy(target) {

        // Cria um elemento textarea temporariamente no DOM
        var tempTextarea = document.createElement("textarea");

        // Adiciona o elemento textarea ao corpo do documento
        document.body.appendChild(tempTextarea);

        // Define o valor do elemento textarea para a string base64 do arquivo especificado
        // o índice 'target' é usado para acessar o arquivo específico no array '_files'
        tempTextarea.value = this._files[target].base64;

        // Seleciona todo o conteúdo do elemento textarea
        tempTextarea.select();

        // Executa o comando de cópia nativo do navegador
        // Isto copia o texto selecionado (neste caso, a string base64) para a área de transferência
        document.execCommand("copy");

        // Remove o elemento textarea do corpo do documento após a cópia
        document.body.removeChild(tempTextarea);

    }

    /**
     * Remove uma imagem com base no ID fornecido, atualizando a interface e a array de envio.
     * @param {number} target - O ID da imagem a ser removida.
     */
    remove(target) {

        /** Localiza o elemento desejado e realiza a remoção */
        document.getElementById(target).remove();

        /** Remove o item da array de base64 */
        this._files.splice(target, 1);

        /** Verifico se devo remover o botão de salvar e habilitar o formulário */
        if (this._files.length === 0)
        {

            /** Removo o corpo da listagem */
            document.getElementById('ItemListWrapper').remove();

            /** Removo a barra de progresso */
            document.getElementById('progressWrapper').remove();

        }

    }

    /**
     * Atualiza ou cria uma nova barra de progresso dentro de um elemento contêiner especificado.
     * Este método verifica a existência de uma barra de progresso dentro do contêiner e,
     * caso não exista, cria uma. Se já existir, atualiza o progresso conforme o estado atual.
     */
    progress() {

        // Verifica se o elemento com ID 'progress' já existe
        if (!document.getElementById('progress')) {

            // Caso a barra de progresso não exista, obtém o contêiner onde ela deve ser inserida
            var _target = document.getElementById('progressWrapper');

            // Insere a estrutura HTML da barra de progresso no contêiner
            _target.innerHTML = `
            <div class="progress mt-2" id="progress" role="progressbar" 
                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height:6px">
                <div class="progress-bar" style="width: 0%" id="size"></div>
            </div>`;

        } else {

            // Se a barra de progresso já existir, obtém o elemento 'div' que representa a barra preenchida
            var size = document.getElementById('size');

            // Atualiza a largura da barra de progresso com base no valor percentual armazenado em '_size'
            size.style.width = this._size + "%";

        }

    }

    /**
     * Renderiza a visualização de um arquivo na interface do usuário.
     * Esta função cria e insere um elemento HTML que representa um arquivo específico,
     * incluindo ações para interação com o arquivo como visualizar, copiar e excluir.
     *
     * @param {Object} data - Um objeto contendo informações sobre o arquivo, incluindo índice, nome e tamanho.
     */
    view(data) {

        // Verifica se a estrutura inicial de lista de arquivos ainda não foi criada
        if (!document.getElementById('ItemListWrapper')) {

            // Cria e insere a estrutura inicial HTML para visualização de arquivos
            // incluindo uma barra de progresso e um contêiner para itens de lista de arquivos
            this._zone_preview.innerHTML = `
            <div class="my-3" id="progressWrapper"></div>
            <div class="card bg-dark-secondary" id="ItemListWrapper">
                <ul class="list-group list-group-flush bg-dark-secondary" id="ItemListBody"></ul>
            </div>`;

        }

        // Define o HTML para um item de lista específico representando o arquivo
        // Inclui ícones para ações e uma representação visual do tipo de arquivo baseado na extensão
        var html = `<li class="list-group-item bg-dark-secondary border-dark text-white" id="item_${data.indice}">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <div class="rounded bg-dark p-1">
                                <img src="images/${this.getExtension(data.name)}.png" width="40px">
                            </div>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <div class="fs-6 mb-0 fw-semibold">
                               ${data.name}
                            </div>
                            <div class="fs-6 mt-0" id="complement_${data.indice}">
                                ${this.getSize(data.size)}
                            </div>
                        </div>
                        <div class="flex-shrink-0 text-end">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-outline-light">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button type="button" class="btn btn-outline-light" onclick="_file.download(${data.indice})">
                                    <i class="bi bi-download"></i>
                                </button>
                                <button type="button" class="btn btn-outline-light" onclick="_file.copy(${data.indice})">
                                    <i class="bi bi-copy"></i>
                                </button>
                                <button type="button" class="btn btn-outline-light" onclick="_file.remove('item_${data.indice}')">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>`;

        // Obtém o elemento que contém a lista de arquivos
        var ItemListBody = document.getElementById('ItemListBody');

        // Insere o novo item de arquivo no início da lista para manter os mais recentes no topo
        ItemListBody.innerHTML = html + ItemListBody.innerHTML;

    }

    /**
     * Função que converte um arquivo para sua representação em base64.
     * @param {File} inputFile - O arquivo a ser convertido.
     * @returns {Promise<string>} - Uma promessa que resolve com a representação do arquivo em base64, ou rejeita com uma mensagem de erro.
     */
    getBase64(inputFile) {

        return new Promise((resolve, reject) => {

            // Cria um novo objeto FileReader
            var reader = new FileReader();

            // Lê o arquivo como uma URL de dados (base64)
            reader.readAsDataURL(inputFile);

            // Define o callback para quando a leitura for concluída com sucesso
            reader.onload = function () {

                // Obtém a representação base64 do arquivo
                var base64 = reader.result;

                // Resolve a promessa com a representação base64 do arquivo
                resolve(base64);

            };

            // Define o callback para quando ocorrer um erro durante a leitura
            reader.onerror = function (error) {

                // Rejeita a promessa com uma mensagem de erro
                reject('Erro ao ler o arquivo: ' + error);

            };

        });

    }

    /**
     * Função que realiza a separação de uma string em partes menores (chunks) e retorna um array contendo essas partes.
     * @param {string} inputString - A string a ser dividida em chunks.
     * @param {number} chunkSize - O tamanho desejado de cada chunk em termos de caracteres.
     * @returns {Array} - Um array contendo os chunks da string.
     */
    getChunk(inputString, chunkSize) {

        // Inicializa um array para armazenar os chunks resultantes.
        const chunks = [];

        // Loop através da string de entrada, com incremento pelo tamanho do chunk.
        for (let i = 0; i < inputString.length; i += chunkSize) {

            // Obtém uma parte (chunk) da string com base no tamanho especificado.
            const chunk = inputString.substring(i, i + chunkSize);

            // Adiciona o chunk ao array de chunks.
            chunks.push(chunk);

        }

        // Retorna o array contendo os chunks da string.
        return chunks;

    }

    /**
     * Função que recebe um nome de arquivo e retorna a extensão do arquivo.
     * @param {string} data - O nome do arquivo ou caminho completo do arquivo.
     * @returns {string|null} - A extensão do arquivo, ou null se nenhum ponto for encontrado no nome do arquivo.
     */
    getExtension(data) {

        // Verifica se o nome do arquivo possui uma extensão
        if (data.lastIndexOf('.') !== -1) {

            // Obtém a posição do último ponto no nome do arquivo
            var point = data.lastIndexOf('.');

            //Retorno o tipo da extensão
            return data.substr(point + 1);

        }

        // Se não houver extensão, retorna null
        return null;

    }

    /**
     * Converte o tamanho de um conjunto de dados em um formato legível por humanos.
     * @param {number} dados - O tamanho dos dados em bytes.
     * @returns {string} - O formato legível por humanos do tamanho.
     */
    getSize(data) {

        // Se o tamanho dos data for 0, retorna '0 Bytes'
        if (data === 0) return '0 Bytes';

        // Define as unidades para conversão de tamanho
        const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        // Calcula a scale do tamanho
        const scale = Math.floor(Math.log(data) / Math.log(1024));

        // Converte o tamanho para a unidade apropriada e formata-o
        return parseFloat((data / Math.pow(1024, scale)).toFixed(2)) + ' ' + units[scale];

    }

    /**
     * Prepara a visualização dos arquivos selecionados e os armazena para envio posterior.
     * @param {string} target - O ID do elemento que contém os arquivos selecionados.
     * @returns {void}
     */
    async prepare(target)
    {

        /** Obtém os arquivos selecionados no campo input de acordo com o TARGET */
        var _files = document.getElementById(target);

        /** Obtenho a zona do arquivo */
        this._zone = document.getElementById('FilesZone');

        /** Crio o espaço para visualização do arquivos */
        var FilesPreview = document.createElement('div');

        /** Defino o Id do espaço */
        FilesPreview.id = 'FilesPreview';

        /** Insiro a zona de visualização na zona de upload */
        this._zone.appendChild(FilesPreview);

        /** Localizo a zona de visualização de arquivo */
        this._zone_preview = document.getElementById('FilesPreview');

        /** Itera sobre todos os elementos da array de arquivos selecionados */
        for (let i = 0; i < _files.files.length; i++) {

            /** Variável local temporária para armazenar os detalhes do arquivo */
            var temp = {};

            /** Guarda o índice do arquivo */
            temp.indice = i;

            /** Obtém o nome do arquivo */
            temp.name = _files.files[i].name;

            /** Obtém o tamanho do arquivo */
            temp.size = _files.files[i].size;

            /** Guardo o base64 original */
            temp.base64 = await this.getBase64(_files.files[i]);

            /** Obtém e armazena as partes do arquivo em chunks */
            temp.chunks = this.getChunk(temp.base64, (1024 * 1024));

            /** Armazena as informações do arquivo na classe */
            this._files.push(temp);

            /** Realiza a montagem da visualização dos arquivos na tela */
            this.view(temp);

            /** Obtenho em porcentagem os arquivos processados */
            this._size = ((i + 1) / _files.files.length) * 100;

            /** Atualizo a barra de progresso */
            this.progress();

        }

        /** Reinicia o campo file */
        _files.value = '';

    }

}