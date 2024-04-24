<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>

        Dev KevenWillianPS | Bas64 Image Encoder

    </title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="fonts/BootStrap/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/dropzone.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/file.js"></script>

</head>
<body>

<div class="container my-5">

    <div class="row g-2">

        <div class="col-md-12 fadeInUp-animation--15">

            <h2 class="text-white">

                🖼️ Base64 Image Encoder | JavaScript

            </h2>

        </div>

        <div class="col-md-12 d-flex fadeInUp-animation--10">

            <div class="card bg-dark text-white w-100">

                <div class="card-body">

                    <script type="text/javascript">

                        /** Instânciamento da classe do Toast */
                        var _file = new File();

                    </script>

                    <div id="FilesZone">

                        <label for="file" class="drop-container" id="dropContainer">

                            <span class="text-white fw-medium fs-2">

                               Solte seu Arquivo Aqui

                            </span>

                            ou

                            <input type="file" id="file" name="file" multiple accept="image/*" onchange="_file.prepare('file')">

                        </label>

                    </div>

                    <script type="text/javascript">

                        // Seleciona o elemento HTML com o id "dropContainer" e atribui-o à constante dropContainer
                        const dropContainer = document.getElementById("dropContainer");

                        // Seleciona o elemento HTML com o id "file" e atribui-o à constante fileInput
                        const fileInput = document.getElementById("file");

                        // Adiciona um ouvinte de evento para o evento "dragover" no elemento dropContainer
                        dropContainer.addEventListener("dragover", (e) => {

                            // Previne o comportamento padrão do navegador para permitir a operação de arrastar e soltar
                            e.preventDefault();

                        }, false);

                        // Adiciona um ouvinte de evento para o evento "dragenter" no elemento dropContainer
                        dropContainer.addEventListener("dragenter", () => {

                            // Adiciona a classe "drag-active" ao elemento dropContainer quando um item é arrastado para dentro dele
                            dropContainer.classList.add("drag-active");

                        });

                        // Adiciona um ouvinte de evento para o evento "dragleave" no elemento dropContainer
                        dropContainer.addEventListener("dragleave", () => {

                            // Remove a classe "drag-active" do elemento dropContainer quando um item é arrastado para fora dele
                            dropContainer.classList.remove("drag-active");

                        });

                        // Adiciona um ouvinte de evento para o evento "drop" no elemento dropContainer
                        dropContainer.addEventListener("drop", (e) => {

                            // Previne o comportamento padrão do navegador para permitir a operação de arrastar e soltar
                            e.preventDefault();

                            // Remove a classe "drag-active" do elemento dropContainer quando um item é solto dentro dele
                            dropContainer.classList.remove("drag-active");

                            // Define os arquivos arrastados e soltos como os arquivos selecionados no elemento fileInput
                            fileInput.files = e.dataTransfer.files;

                            // Preparo os arquivos para envio
                            _file.prepare('file')

                        });

                    </script>

                </div>

            </div>

        </div>

    </div>

</div>

</body>
</html>