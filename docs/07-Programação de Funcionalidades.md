# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

## Telas - Menus de Navegação - RF-010

**Responsável:** *Carlos Roberto Teixeira

**Comentários:** Ao fazer login na aplicação, a barra de navegação inferior é exibida, e esta permite ao usuário navegar entre as quatro telas principais da aplicação, conforme descrito no requisito funcional **RF-010**. As telas 'Comunidade', 'Buscar', 'Meus Registros' e 'Perfil' podem ser conferidas nas Figuras abaixo, apresentadas abaixo. Durante o desenvolvimento da funcionalidade "Menus de Navegação", foram criados 3 componentes (Body, Container e Header), utilizados em comum nas páginas desenvolvidas para os menus de navegação. Além dos componentes, foram criadas 5 páginas (Buscar, Comunidade, Meus Registros, Perfil e Home), sendo as 4 primeiras para cada um dos botões do menu de navegação e a página "Home" utilizada para fazer a rota entre essas 4 páginas ao clicar nos botões da barra inferior. Recurso de rotas e **BottonNavegation** foram utilizados para essa navegação entre telas. Funcionalidade desenvolvida com sucesso, tanto em ambiente web quanto em android e ios, onde foram testados cada um dos botões do menu. O conteúdo interno de cada uma dessas 4 páginas será matéria de outros requisitos funcionais. Foram inseridas informações dentro do corpo das páginas apenas a título ilustrativo e para demonstrar o aprendizado de alguns recursos aprendidos durante o microfundamento do Prof. Cléber. Durante os trabalhos também foram utilizados outros recursos do React-Native e React-Native-Paper, a saber: Text, StyleSheet, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Appbar,  TextInput, List, BottonNavigation, Avatar, Button, Card, Title, Paragraph). Nesta funcionalidade não houve utilização do sqllite e sim a inserção de dados locais no interior do código apenas para verificar o funcionamento da FlatList. No estudo do microfundamento do Prof. Cléber foi realizado todo o projeto da Calculadora Flex, inclusive com a utilização do sqllite, onde pude aprender como criar, buscar, editar e excluir registros do banco, entre outros aprendizados importantes para o desenvolvimento desse requisito e de outros.

**Screnshots:**

![image](https://user-images.githubusercontent.com/81597848/167258691-930d8213-723c-4923-a412-9e0b4fb3c302.png)

![image](https://user-images.githubusercontent.com/81597848/167258716-f31662a5-52fe-42bb-979c-e986635105ab.png)

![image](https://user-images.githubusercontent.com/81597848/167258737-525c981f-1777-469d-b460-5797ecb6b4b2.png)

![image](https://user-images.githubusercontent.com/81597848/167258759-6048982b-4cbf-4598-ac3e-fd3b3a677d6c.png)

**Link do Vídeo - RF-010:** https://youtu.be/w79STp4vtCo



## Tela de busca
### Desenvovlvida por Adriana Neves da Silva Carvalho

Nesta tela , o usuario poderá buscar por meio de um campo especifico hospedagens, restaurantes, pontos turisticos e assim, inclui-los no registro de viagem.

**Screnshots:**

![tela1](https://user-images.githubusercontent.com/81448442/167275646-620ece5e-8996-492c-aa67-99f6613c4495.png)
![tela2](https://user-images.githubusercontent.com/81448442/167275661-75b4ba2a-269c-4f54-9f3c-aae097f9cc49.png)
![tela3](https://user-images.githubusercontent.com/81448442/167275662-ffb4eb8c-8cbd-4600-9c07-74a098d20e7b.png)
![tela4](https://user-images.githubusercontent.com/81448442/167275664-16bdd650-427f-4c2b-ac3d-199a5b0f91fb.png


## Card Registro de Viagens

**Responsável:** *Rafael Henrique Teixeira

![Registro de Viagens](https://user-images.githubusercontent.com/81194817/167262850-08ac8e89-e141-43e6-8928-8e722314385b.jpg)

**Comentários:** 



**Link do Vídeo

)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
