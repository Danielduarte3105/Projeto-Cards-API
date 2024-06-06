Sistema de Gestão de Médicos

Este projeto é um sistema completo de gerenciamento de médicos desenvolvido para simplificar a administração de perfis médicos. 
Ele permite a criação, edição e exclusão de registros médicos através de uma interface amigável e intuitiva.
Utilizando tecnologias modernas, o sistema se comunica com uma API RESTful para realizar operações CRUD (Create, Read, Update, Delete) de maneira eficiente e segura.

Funcionalidades Principais:

Criação de Médicos: Adicione novos médicos ao sistema com informações detalhadas como nome, CRM, especialidade e imagem.
Edição de Perfis Médicos: Atualize as informações de médicos existentes de forma simples e rápida.
Exclusão de Médicos: Remova médicos do sistema de maneira segura, garantindo a integridade dos dados.
Listagem de Médicos: Visualize uma lista completa de todos os médicos cadastrados com detalhes de cada um.
Confirmação de Exclusão: Modal de confirmação para evitar exclusões acidentais.
Tecnologias Utilizadas
Frontend: HTML, CSS, JavaScript
Backend: API RESTful
Hosting da API: Azure Web Services
Comunicação: Fetch API para requisições assíncronas

Como Utilizar
Clone o Repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o Diretório do Projeto:
bash
Copiar código
cd seu-repositorio
Abra o Arquivo index.html no Seu Navegador.


Estrutura do Projeto
index.html: Arquivo principal contendo a estrutura HTML e os componentes da interface.
style.css: Estilos CSS para a personalização e layout da interface.
script.js: Arquivo JavaScript contendo a lógica para interação com a API e manipulação do DOM.


API Endpoints
GET /listar/medicos: Lista todos os médicos.
POST /novo/medico: Adiciona um novo médico.
PUT /atualizar/medico/:id: Atualiza as informações de um médico existente.
DELETE /excluir/medico/:id: Remove um médico do sistema.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

Autor
Daniel Duarte - https://github.com/Danielduarte3105

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
