MVC

O princípio básico do MVC é a divisão da aplicação em três camadas: a camada de interação do usuário (view), a camada de manipulação dos dados (model) e a camada de controle (controller).

● Model A responsabilidade dos models é representar o negócio. Também é responsável pelo acesso e manipulação dos dados na sua aplicação.
● View A view é responsável pela interface que será apresentada, mostrando as informações do model para o usuário.
● Controller É a camada de controle, responsável por ligar o model e a view, fazendo com que os models possam ser repassados para as views e vice-versa.


Exemplo…
Vamos utilizar o exemplo de uma página web, onde o usuário pode realizar o cadastro de clientes. Neste caso, provavelmente você teria uma classe chamada cliente.php que contém as informações do cliente que você deseja guardar (como nome, endereço, cidade, etc.). Essa classe seria o seu model.
Aqui, ainda poderíamos acoplar aspectos de manipulação de bancos de dados, concentrando nesta estrutura os métodos para inserir, alterar, excluir e listar os clientes a partir de uma tabela em um banco de dados.
A página HTML seria nossa view, que mostraria, por exemplo, a lista de usuários cadastrados ou mesmo o próprio formulário para cadastro de novos usuários.
O controller faz o meio de campo entre o model e a view. Ele é necessário porque as estruturas presentes com view não deveriam acessar diretamente os models, já que isso poderia criar um acoplamento entre as estruturas de apresentação e definição de negócio: é necessária uma estrutura intermediária para fazer essa ligação.
E aqui entra o controller, que age como uma ponte entre os dois. Você pode ter uma classe dentro do seu projeto PHP para fazer o papel de um controller, realizando a ligação entre models e views.
Framework
Facilitador no desenvolvimento de diversas aplicações e, sem dúvida, sua utilização poupa tempo e custos para quem utiliza, pois de forma mais básica, é um conjunto de bibliotecas utilizadas para criar uma base, onde as aplicações são construídas, um otimizador de recursos.
Middleware
O middleware é um tipo de software que funciona como uma camada oculta de tradução, que serve para se comunicar e interagir com dois ou mais aplicativos usados dentro de um sistema ou servidor, conectando-os. 
Como o próprio termo sugere, middle vem de meio, ou seja, sua função é conectar o que está em funcionamento em uma rede distribuída, fazendo que diferentes sistemas interajam entre si de forma harmônica. 
Há, inclusive, quem o conheça por “encanamento”. Funciona assim: enquanto dois ou mais aplicativos rodam e precisam acessar sua base de dados, o middleware entra em ação, como se tudo precisasse ser guiado dentro de um cano, por assim dizer.

 
Outras funcionalidades importantes, como:  
Gerenciamento de sessão: identificando, armazenando dados e recuperando a sessão.   
Autenticação: verificando credenciais, gerando tokens de sessão, validando sessões ativas e controlando acessos. 
Balanceamento de carga: realizando a distribuição de solicitações, detectando falhas e direcionando as sessões de um usuário a um mesmo servidor, em um processo de resistência. 
—----------------------------------------------------------------------------------------------------------------------------

Node (Ambiente roda JS) / Bun / Deno / Web Worker
NPM (Node Package Manager)
Nodemon / --watch
Express (Framework)
Routers
Métodos (GET, POST, PUT, DELETE, PATCH)
MVC
Middleware
Validação de Dados (Zod)
Prisma (ORM)
----------------------------------------------------------------------------------------------------------------------------

Principais Comandos
npm init //inicia o projeto node
npm i // instala todos os pacotes não instalados
npm i [nome do pacote] [nome do pacote] // Instala pacotes no projeto
npm i [nome do pacote] [nome do pacote] -D // Instala pacotes de desenvolvimento no projeto
npm uninstall [nome do pacote]
npm run [nome do script]
npm start // unico script que o run é opcional
