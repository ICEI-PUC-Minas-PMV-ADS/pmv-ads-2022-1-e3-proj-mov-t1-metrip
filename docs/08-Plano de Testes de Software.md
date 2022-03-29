# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|**Atividade(tela)**|**Ação**|**Resultado Esperado**|
|-------------------|--------|----------------------|
|Cadastrar usuário|CT 1: Clicar no botão “Não tem uma conta? Cadastra-se”|CT 1: Cadastro concluído.|
||CT 1.1: Preencher os campos informados (Nome, E-mail, senha e confirmar senha)|
|Login|CT 2: Digitar usuário e senha.|CT 2: Login efetuado com sucesso|
|Esqueci minha senha|CT 3: Clicar no link “Esqueci minha senha”|CT 3.1: Será enviado um e-mail com o código para ser digitado para recuperar a senha.|
||CT 3.1: Digitar o e-mail da conta que deseja recuperar||
|Menu navegação|CT 4: Ao entrar no menu navegação, o usuário vai se deparar com as opções ( “Homepage , Buscar , Meus registros , perfil” )|CT 4: Ter acesso a todas as opções  |
|Homepage |CT 5: Ao entrar na homepage , o usuário visualizar os registros da comunidade, e ter acesso aos campos ( Perfil,  Meus registros e  Buscar )|CT 5: Ter interação com o sistema.|
|Perfil |CT 6:  O Clicar no campo perfil. |CT 6: O usuário terá acesso ao seus dados , dados da conta e uso do aplicativo , além de poder alterar sua senha ( ao clicar será encaminhado para o campo alterar senha. CT 3.1)|
|Meus Registros|CT 7:  Acesso ao campo Meus registros, onde encontrara os campos (Cadastros de registros de viagem , onde ficar, o que fazer , onde comer e Dicas de locais )|CT 7.1: Ao entrar no campo (cadastro de registro de viagem), o usuário deverá preencher.  Com:  Cidade, pais e logo depois clicar em salvar.|
|||CT 7.2: Ao entrar no campo ( onde ficar )O usuário devera preencher Com : Nome, Valor e Data de entrada , data de saída , o que foi bom , o que foi ruim e dica. E fazer uma votação de 0 a 10.|
|||CT 7.3: Ao clicar no campo ( o que fazer ) o usuário devera preencher com: Atividade e valor Dica e fazer uma votação.|
|||CT 7.4: Ao clicar no campo onde comer o usuário devera preencher com: Nome , Valor Estilo de comida  e fazer uma votação no final . |
|||CT 7.5: Ao clicar no campo ( Dicas de locais ) O usuário devera preencher com: O que , Local , valor e tempo .Clicar no campo vale a pena ou nem pensar , votação. |
|BUSCAR|CT 6:Buscar por registros.|CT 6: Pode ser feito buscas por registros de locais específicos utilizando palavras-chaves. |

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
