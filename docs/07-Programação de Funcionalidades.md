# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

## Telas - Menus de Navegação - RF-010

### **Responsável:** Carlos Roberto Teixeira

**Comentários:** Ao fazer login na aplicação, a barra de navegação inferior é exibida, e esta permite ao usuário navegar entre as quatro telas principais da aplicação, conforme descrito no requisito funcional **RF-010**. As telas 'Comunidade', 'Buscar', 'Meus Registros' e 'Perfil' podem ser conferidas nas Figuras abaixo, apresentadas abaixo. Durante o desenvolvimento da funcionalidade "Menus de Navegação", foram criados 3 componentes (Body, Container e Header), utilizados em comum nas páginas desenvolvidas para os menus de navegação. Além dos componentes, foram criadas 5 páginas (Buscar, Comunidade, Meus Registros, Perfil e Home), sendo as 4 primeiras para cada um dos botões do menu de navegação e a página "Home" utilizada para fazer a rota entre essas 4 páginas ao clicar nos botões da barra inferior. Recurso de rotas e **BottonNavegation** foram utilizados para essa navegação entre telas. Funcionalidade desenvolvida com sucesso, tanto em ambiente web quanto em android e ios, onde foram testados cada um dos botões do menu. O conteúdo interno de cada uma dessas 4 páginas será matéria de outros requisitos funcionais. Foram inseridas informações dentro do corpo das páginas apenas a título ilustrativo e para demonstrar o aprendizado de alguns recursos aprendidos durante o microfundamento do Prof. Cléber. Durante os trabalhos também foram utilizados outros recursos do React-Native e React-Native-Paper, a saber: Text, StyleSheet, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Appbar,  TextInput, List, BottonNavigation, Avatar, Button, Card, Title, Paragraph). Nesta funcionalidade não houve utilização do sqllite e sim a inserção de dados locais no interior do código apenas para verificar o funcionamento da FlatList. No estudo do microfundamento do Prof. Cléber foi realizado todo o projeto da Calculadora Flex, inclusive com a utilização do sqllite, onde pude aprender como criar, buscar, editar e excluir registros do banco, entre outros aprendizados importantes para o desenvolvimento desse requisito e de outros.

**Screnshots:**

![image](https://user-images.githubusercontent.com/81597848/167258691-930d8213-723c-4923-a412-9e0b4fb3c302.png)

![image](https://user-images.githubusercontent.com/81597848/167258716-f31662a5-52fe-42bb-979c-e986635105ab.png)

![image](https://user-images.githubusercontent.com/81597848/167258737-525c981f-1777-469d-b460-5797ecb6b4b2.png)

![image](https://user-images.githubusercontent.com/81597848/167258759-6048982b-4cbf-4598-ac3e-fd3b3a677d6c.png)

**Link do Vídeo - RF-010:** https://youtu.be/w79STp4vtCo



## Tela de busca

### Desenvolvida por Adriana Neves da Silva Carvalho

Nesta tela , o usuario poderá buscar por meio de um campo especifico hospedagens, restaurantes, pontos turisticos e assim, inclui-los no registro de viagem.

**Screnshots:**

![tela1](https://user-images.githubusercontent.com/81448442/167275646-620ece5e-8996-492c-aa67-99f6613c4495.png)
![tela2](https://user-images.githubusercontent.com/81448442/167275661-75b4ba2a-269c-4f54-9f3c-aae097f9cc49.png)
![tela3](https://user-images.githubusercontent.com/81448442/167275662-ffb4eb8c-8cbd-4600-9c07-74a098d20e7b.png)
![tela4](https://user-images.githubusercontent.com/81448442/167275664-16bdd650-427f-4c2b-ac3d-199a5b0f91fb.png)
 
 
 Link da apresentação:https://youtu.be/Lv0KjauL-NA
 
 
## Registro de Viagem - Visualização
### Desenvolvida por Gustavo Costa

Essa tela mostra a visualização completa de um registro de viagem criado por um usuário da aplicação, atendendo ao Requisito Funcional 03.
** Impedimento: Tela não abre no Emulador de Android, o app abre e fecha sozinho.

https://user-images.githubusercontent.com/70529816/167314216-fb2649a4-02b7-4d23-8ffc-c37ebe707d45.mp4



## Card Registro de Viagens

**Responsável:** *Rafael Henrique Teixeira

![Registro de Viagens](https://user-images.githubusercontent.com/81194817/167262850-08ac8e89-e141-43e6-8928-8e722314385b.jpg)

**Comentários:** 

Desenvolver um card de Registro de Viagens

**Link do Vídeo ** [Uploading pmv-ads-2022-1-e3-proj-mov-t1-metrip_07-Programação de Funcionalidades.md at main · ICEI-PUC-Minas-PMV-ADS_pmv-ads-2022-1-e3-proj-mov-t1-metrip - Google Chrome 2022-05-08 08-38-58.zip…]()


## Telas Cadastro de usuario

## Responsavel : Rodrigo Pereira Lacerda 

Comentario : Primeiramente o usuario irá criar uma conta no Metrip no campo: "CADASTRE-SE".</BR>
1 : Ira inserir o "NOME" e "EMAIL" e clicar em continuar.</BR>
2 : logo enseguida ele ira criar "SENHA" e "CONFIRMAR SENHA". </BR>
3 : Assim ele tera o login criado. ( Tela 3 ) </BR>

![tela 1](https://user-images.githubusercontent.com/81272703/168179539-dec29b1f-9043-4c13-a3ad-dcba790441d2.png)
![tela 2](https://user-images.githubusercontent.com/81272703/168179543-21a5808c-e6c0-45c0-a788-76ab2360634b.png)
![tela 3](https://user-images.githubusercontent.com/81272703/168179550-7173c4e8-000e-48a2-bee5-4e9a3d5b3428.png)

## Link Video: https://www.youtube.com/watch?v=1wLvmej86f4



# Etapa 4


## Telas Cadastro de usuario

### Responsavel : Rodrigo Pereira Lacerda

## Link Video https://www.youtube.com/watch?v=se_x-td6LMU

Comentario : Primeiramente o usuario irá criar uma conta no Metrip no campo: "CADASTRE-SE".</BR>

1 : Ira inserir o "NOME" e "EMAIL" e clicar em continuar.</BR>
2 : logo enseguida ele ira criar "SENHA" e "CONFIRMAR SENHA". </BR>
3 : Assim ele tera o login criado. ( Tela 3 ) </BR>

## Erro que esta impedindo de prosseguir.

1 : Quando entrava pelo expo na web da o seguinte erro ![image](https://user-images.githubusercontent.com/81272703/172019762-6eba56f7-114b-434d-b97d-608e05ff2861.png)


## Solução
1 : Baixar o expo localmente atras de comando no CMD , juntamente tive que baixar os seguintes aplicativos  **Node .JS** ,  **Android Estudio** no caso o Android estudio ira simular o celular. ![image](https://user-images.githubusercontent.com/81272703/172019814-92a44de8-e3a9-4389-a0ea-00353c7e76f6.png)


## Tela de busca

### Desenvolvida por Adriana Neves da Silva Carvalho

Nesta tela, o histórico de busca feita pelo usuário será armazenada localmente, reduzindo assim, o tempo de busca e melhorando a experiência do usuário.

**Comentários:** Ao incluir o código do SQL e o CRUD na tela de busca, houve sucessivos erros no decorrer da decodificação. 
Mensagens de erros ecnontradas ao longo da programação:

- Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object

- services/PesquisaServiceDB.js (0:1)
Failed to execute 'openDatabase' on 'Window': Access to the WebDatabase API is denied in third party contexts

- Failed to execute 'openDatabase' on 'Window': Access to the WebDatabase API is denied in third party contexts.
  Evaluating services/PesquisaServiceDB.js
  Evaluating App.js
  Loading App.js
  
 Ao finalizar a programação do CRUD, a mensagem final de erro encontrada diz: "Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null" conforme demonstrado também na figura abaixo (figura 01).

![image](https://user-images.githubusercontent.com/81448442/172025540-f3231b36-2788-4868-a6e2-444e3d6f23b9.png)
 
 
 ### Link da apresentação:

https://youtu.be/S6ZEKNXOggI

https://youtu.be/YomfnEujVdo





