
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela a seguir.

|**Ambiente**|**Plataforma**|**Link de Acesso**|
|------------|--------------|------------------|
| Repositório de Código Fonte| GitHub | [GIT](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t1-metrip.git) |
| Documentação do Projeto|GitHub | [DOCS](https://sgapucminasbr-my.sharepoint.com/:w:/g/personal/1329884_sga_pucminas_br/EduSgVStt8VAgjzI_LtI_bIBTVUsXXoQr53_s_BcGuDAfA?e=BOLMez) |
| Projeto de Interface e Wireframes| Adobe XD | |
| Gerenciamento do Projeto | Jira | |
| Criação de Diagramas | Lucid Chart | [DIAGRAMAS](https://lucid.app/lucidchart/f3fe7c08-bbdb-4d74-91e7-a19a66c1ab33/edit?invitationId=inv_22333280-ddb5-4470-bd41-aeebd2991ad3) |
| Editor de código | | |
| Ferramentas de Comunicação | MsTeams, Google Meet, Whatsapp | |

## Controle de Versão

Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo mostrado na figura 3. Desta forma, todas as manutenções no código são realizadas em Branches separadas e depois entram em uma branch de DEV e depois Merge com a Master.



A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe opera por meio de metodologias ágeis, tendo escolhido o Scrum como principal base para definição do processo de desenvolvimento.

A equipe está organizada da seguinte maneira: 

* **Scrum Master:**

  * Gustavo Costa 

* **Product Owner:**

  * Adriana Neves da Silva Carvalho 

* **Equipe de Desenvolvimento:** 

  * Adriana Neves da Silva Carvalho 

  * Carlos Roberto Teixeira 

  * Gustavo Costa 

  * Rafael Henrique Teixeira 

  * Rodrigo Pereira Lacerda 

  * Ruver Clacyus Oliveira Caldeira 

* **Equipe de Design:** 

  * Adriana Neves da Silva Carvalho 

  * Gustavo Costa 

  * Rodrigo Pereira Lacerda 

### Processo

Para a organização e distribuição das tarefas do projeto, a equipe está utilizando o Jira estruturado com as seguintes listas: 

* **Recursos:** esta lista mantém um template de tarefas recorrentes com as configurações padronizadas que todos devem seguir. O objetivo é permitir a cópia destes templates para agilizar a criação de novos cartões. 

* **Backlog:** recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista. 

* **To do:** esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando. 

* **Doing:** quando uma tarefa tiver sido iniciada, ela é movida para cá. 

* **Test:** Testes e Checagem de Qualidade. Quando as tarefas são concluídas, são movidas para o “Done”. 

* **Done:** nesta lista são colocadas as tarefas que passaram pelos testes e checagem de qualidade e estão prontos para serem entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação. 

* **Locked:** quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa. 

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
