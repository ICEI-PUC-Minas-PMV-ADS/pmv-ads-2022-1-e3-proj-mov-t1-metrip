# Template Padrão da Aplicação

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>

Layout padrão da aplicação que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.


## Guia de Estilos
Antes de definir o template da aplicação, foi necessário definir uma guia de estilos com todos os padrões que serão utilizados durante o desenvolvimento do projeto. Estão detalhados nos itens a seguir:

### Paleta de Cores
A paleta de cores definida conta com 4 cores primárias, sendo a principal delas definida como cor base, variando entre 6 diferentes tonalidades e também uma escala de cinzas que conta com 4 variações, conforme *Figura X*:
 <p align="center">
  <img src="/docs/img/PaletaDeCores.png">
 </P>
Figura X – Paleta de Cores


### Tipografia
As fontes utilizadas na aplicação são Montserrat e Rubik, e seguem as seguintes definições de tamanho e estilização, como pode ser observado na *Figura X*:
 <p align="center">
  <img src="/docs/img/Tipografia.png">
 </P>
Figura X – Tipografia e Fontes utilizadas


### Componentes
Dentre nossos principais componentes personalizados estão a barra de navegação, os modais e os cards, conforme pode ser visto na *Figura X*:
 <p align="center">
  <img src="/docs/img/Componentes.png">
 </P>
Figura X – Principais componentes visuais da aplicação


### Ícones
A iconografia segue a paleta de cores apresentada e possui padrão de design que identifica todos os icones, conforme *Figura X* abaixo: 
 <p align="center">
  <img src="/docs/img/Iconografia.png">
 </P>
Figura X – Iconografia


## Aplicação nas telas e fluxos:

### LandingPage / Login
 
A landing page contém a logo do projeto ao iniciar a aplicação e caso o usuário não esteja logado, ela o direciona para a tela de Login, que permite entrar no sistema, se cadastrar como um novo usuário ou alterar a senha caso a tenha esquecido. Podemos conferir a estrutura de ambas as páginas, conforme *Figura X*, listada abaixo:
 <p align="center">
  <img src="/docs/img/DI_LandingPageLogin.png">
 </P>
 Figura X – Landing page e tela de Login 
 
 ### Fluxo de Telas - Cadastro de Usuário
 O fluxo de *Cadastro de Usuário* ilustrado na *Figura X* permite ao usuário se cadastrar na aplicação caso este ainda não possua uma conta, seguindo um formulário solicitando informações obrigatórias de acordo com o tipo de perfil a ser criado.
 <p align="center">
  <img src="/docs/img/DI_CadastroDeUsuário.png">
 </P>
 Figura X –  Fluxo de Cadastro de Usuário.
 
 ### Fluxo de Telas - Esqueci a Senha
 Caso o usuário já possua uma conta mas não saiba sua senha, é permitido que ele altere sua senha por meio do fluxo apresentado na *Figura X*. 
 <p align="center">
  <img src="/docs/img/DI_EsqueciASenha.png">
 </P>
 Figura X – Fluxo de Telas de Redefinição de Senha.
 
 
 ### Telas presentes no Menu
 Ao fazer login na aplicação, a barra de navegação inferior é exibida, e esta permite ao usuário navegar entre as quatro telas principais da aplicação, conforme descrito no requisito funcional RF-010. As telas 'Comunidade', 'Buscar', 'Meus Registros' e 'Perfil' podem ser conferidas na *Figura X*, apresentada a seguir:
 
 <p align="center">
  <img src="/docs/img/DI_TelasPrincipais.png">
 </P>
 Figura X – Telas que são acessadas pela barra de navegação.
 
 ### Cadastrar Registro de Viagem
 Como a função principal definida pelo projeto no requisito funcional RF-002 se trata de permitir ao usuário registrar suas viagens, surge a necessidade de represnetar em tela essa funcionalidade. Isso será feito por meio de um formulário coeso e intuitivo, conforme pode ser observado na *Figura X*:
 <p align="center">
  <img src="/docs/img/DI_CadastrarRegistro.png">
 </P>
 Figura X – Criação de novo Registro de Viagem
 
 ### Visualizar Registro de Viagem
 Para garantir o cumprimento de dois importantes requisitos funcionais, o RF-003 e RF008, foi estruturado um modelo de tela para visualizar em detalhes um registro criado pelo usuário e também os de outras pessoas da comunidade. No caso de um registro próprio, é por meio dessa tela que o usuário consegue acionar as funcionalidades para editar aquele registro, gerar um relatório em PDF com as informações contidas e também excluí-lo permanentemente. Essas funções mencionadas podem ser acessadas por meio de um botão flutuante de ação, conforme a *Figura X*, apresentada abaixo:
 <p align="center">
  <img src="/docs/img/DI_VisualizarRegistro.png">
 </P>
 Figura X – Visualização de Registro de Viagem
 
 ### Editar Registro de Viagem
 Uma vez criado um registro de viagem, ocasionalmente pode ser que o usuário que o criou deseje editá-lo, por *n* motivos. Sendo assim, também foi pensado em um fluxo para permitir que isso seja possível, conforme exigido no requisito funcional RF-004. O protótipo de visualização do usuário com essa tela pode ser conferido na *Figura X*, mostrada a seguir:
 <p align="center">
  <img src="/docs/img/DI_EditarRegistro.png">
 </P>
 Figura X – Edição de Registro de Viagem
 
 ### Excluir Registro de Viagem
 Em uma aplicação onde a base é alimentada pelos usuários, é comum que em algum momento o usuário em questão deseje excluir um registro criado por ele mesmo, e devido a isso foi pensado também em um fluxo que permite essa flexibilidade, conforme se segue na *Figura X*:
 <p align="center">
  <img src="/docs/img/DI_DeletarRegistro.png">
 </P>
 Figura X – Exclusão de Registro de Viagem
 
