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
