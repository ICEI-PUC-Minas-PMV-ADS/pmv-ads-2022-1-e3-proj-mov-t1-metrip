# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![esquema relaciona](docs/img/entidade e relacionamento.jpg)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software ,  Qualidade de Software Iso 9126

|**Características Qualidade**|**Sub Características**|**Ação**|
|-----------------------------|-----------------------|--------|
|Funcionalidade|| A criação do Metrip veio para solucionar o problema de registro das nossas viagens.Para solucionar estes problemas iremos propor como solução tecnológica o desenvolvimento de um aplicativo mobile para registro dessas viagens, capaz de documentar com eficiência todos as cidades visitadas e avaliar qualitativamente os principais locais, tais como: hotéis, restaurantes, pontos turísticos, meios de transportes, atrativos, entre outros; além de ter como opção o compartilhamento dessas informações e experiências com outras pessoas.|
|| Adequação |Adequar as funções especificadas que estão presentes no software.|
|| Segurança |A empresa Metrip é responsável pela segurança dos dados dos seus usuários , mantendo em total sigilo.|
|| Conformidade| A empresa Metrip segue todas as conformidades estabelecidas pelas leis do seu país.|
| Confiabilidade||Refere-se a capacidade do software em manter seu nível de desempenho sob condições estabelecidas.|
|| Maturidade |O software segue uma sequência de testes para manter uma boa maturidade do seu sistema.|
|| Conformidade|Capacidade do produto de software de estar de acordo com normas, convenções ou regulamentações relacionadas à confiabilidade.|
|Usabilidade||Refere-se ao esforço necessário ao uso e a homologação individual de tal uso por um conjunto de usuários estabelecidos|
||Inteligibilidade|o software tem a capacidade de transmitir com clareza para o seus usuários os dados das telas solicitadas|
||Apreensibilidade|o software tem as suas telas de fácil usabilidade e de entendimento do que está sendo proposto.|
|Eficiência||Refere-se ao relacionamento entre o nível de desempenho do software e a quantidade de recursos utilizada , sob condições estabelecidas. |
||Comportamento em relação ao tempo|O Software apresenta uma boa resposta em relação a troca de dados e informações.|
||Comportamento em relação a recursos e conformidade|O software segue os recursos estabelecidos no documento H14b.|
|Manutenibilidade||Refere-se ao esforço necessário para fazer modificações específicas no sistema|
||Analisabilidade|Identificar o problema através da leitura do código.|
||Testabilidade|Será feito testes no sistema logo após a manutenção e verificar se foi concluído o erro ( bug ).|
|Portabilidade||Refere-se a capacidade do software em ser transferida de um ambiente para outro.|
||Coexistência|O Software não deverá gerar conflito com outros software instalados no sistema.|
||Capacidade de instalação|O software deve ser bem intuitivo e facilitar a sua instalação|


## Metrícas

|**Características**|**Perguntas**|**Resposta**|**Peso**|
|-------------------|-------------|------------|--------|
|  **Funcionalidade** |||Alto|
|Adequação|O software atende todas as funções específicas , para o seu posto de trabalho ?|A = Não atende|
|||B = Atende parcialmente|
|||C = Atende plenamente|
|||D = Possui mais funções do que necessito|
|Segurança|A Metrip mantém todos os dados seguros ?|A = Sim|
|||B = Não|
|Conformidade| A empresa segue todas as conformidades exigidas pelo país ?|A = sim|
||| B = Não|
|||||
|**Confiabilidade**|||Alto|
|Maturidade|Como está sendo usar o sistema Metrip ?|A = Péssimo|
|||B = Ruim|
|||C = Bom|
|||D = ótimo|
|Conformidade|O Sistema apresenta falha ?|A = Sim , Quais ? |
|||B = Não |
|||||
|**Usabilidade**|||Média|
|Inteligibilidade| o sistema apresenta os dados de suas telas com clareza ?|A = sim |
|||B = Não|
|Apreensibilidade|os dados e telas apresentadas estão de fácil usabilidade ? |A = sim|
|||B = Não ,  porque ?|
|||||
|**Eficiência**|||Baixa|
|Comportamento em relação ao tempo|O sistema apresenta uma boa troca de telas e  informações ?|A = Sim |
|||B = Não , porque ?|
|Comportamento em relação a recursos e conformidade|O desenvolvimento do software foi conforme o programado financeiramente ?|A = sim|
|||B = Não , porque ?|
|||||
|**Manutenibilidade**|||Média|
|Analisabilidade |O código do Software está com clareza ?|A = sim|
|||B = Não , onde ?|
|Testabilidade|o software foi atualizado recentemente , ainda apresenta os erros registrados ? |A = Sim , quais ?|
|||B = Não |
|||||
|**Portabilidade**|||Baixo|
|Coexistência|o software apresenta conflito com outros software ?|A = sim , Quais ?|
|||B = Não |
|Capacidade de instalação| o software é de fácil instalação ? |A = sim |
|||B = Não , porque ?|













> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
