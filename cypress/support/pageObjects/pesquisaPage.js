/// <reference types="Cypress" />

import PesquisaElements from '../elements/pesquisaElements'
const pesquisaElements = new PesquisaElements
const url = Cypress.config("baseUrl")
const messagem = 'What does the computer software acronym JVM stand for?';

class PesquisaPage {
    
    acessarSite() {
        cy.visit(url)
    }

    clicarBotaoBrowse() {
        cy.get(pesquisaElements.botaoBrowse()).click()
    }
  
    informarQuestao(texto) {
        cy.get(pesquisaElements.inputQuestao()).type(texto)
    }

    clicarBotaoSearch(){
        cy.get(pesquisaElements.botaoSearch()).click()
    }

    visualizarResultadoInvalido(resposta){
        cy.get(pesquisaElements.alertBuscaInvalida()).should('contain', resposta)
    }

    selecionarCategoria(tipo){
        cy.get(pesquisaElements.selectCategoria()).select(tipo)
    }

    verficarQuantidadeItens(qtd){
        cy.get(pesquisaElements.tabela()).should('have.length', qtd);
    }

    verificarPaginacao(){
        cy.get(pesquisaElements.paginacao()).should('be.visible') 
    }

    verificarNaoExibePaginacao(){
        cy.get(pesquisaElements.paginacao()).should('not.exist') 
    }
    verificarConteudo(){
        cy.get(pesquisaElements.tabela()).contains('td', messagem);
    }
}

export default PesquisaPage;