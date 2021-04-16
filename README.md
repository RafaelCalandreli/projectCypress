# Projeto OPENTDB
## Objetivo

Projeto que busca validar a busca no banco de questões do site https://opentdb.com/.


O projeto de automação foi desenvolvido utilizando a ferramenta e2e Cypress.

## Como rodar o projeto?

- Com o projeto na sua máquina, execute o seguinte comando:  npm install (Ele irá importar todas as dependências do projeto).
- Após isso, você pode escolher como deseja executar os testes:

        

       * "npm run cy:open": Abre a ferramenta para que possa ser selecionado o navegador e o teste que será executado.
       * "npm run test:chrome": Executa os testes sem a necessidade de abrir o navegador.
       
## Como vejo o report dos testes?
Após a execução dos testes é gerado um report, ele fica disponível na pasta Cypress/Results, para visualiza-lo, basta abri-lo em um navegador de sua escolha.


## Quais cenários de testes foram criados?
Feature: Busca no Banco de Questões

    Scenario: Busca por questão inexistente
        Given que navego para a página de busca do banco de questões
        And digito 'Science: Computers' no campo de busca
        When clico no botão de buscar
        Then visualizo uma mensagem de erro com o texto 'No questions found.'

    Scenario: Busca por questão válida
        Given que navego para a página de busca do banco de questões
        And digito 'What does the computer software acronym JVM stand for?' no campo de busca
        When clico no botão de buscar
        Then visualizo se a listagem de questões está com 1 itens
            And verifico se a questao está sendo exibida corretamente

    Scenario: Busca categoria por 'Science: Computers'
        Given que navego para a página de busca do banco de questões
        And seleciono a opcao 'Category'
        And digito 'Science: Computers' no campo de busca
        When clico no botão de buscar
        Then visualizo se a listagem de questões está com 25 itens
            And controle de paginação está aparecendo.

    Scenario: Busca usuario por 'Pikabush'
        Given que navego para a página de busca do banco de questões
        And seleciono a opcao 'User'
        And digito 'Pikabush' no campo de busca
        When clico no botão de buscar
        Then visualizo se a listagem de questões está com 14 itens
            And controle de paginação não está aparecendo.
