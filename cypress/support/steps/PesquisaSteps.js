/* global Given, Then, When */

import PesquisaPage from '../pageObjects/pesquisaPage'
const pesquisaPage = new PesquisaPage

Given("que navego para a página de busca do banco de questões", () => {
    pesquisaPage.acessarSite();
    pesquisaPage.clicarBotaoBrowse();
})

Given("digito {string} no campo de busca", (texto) => {
    pesquisaPage.informarQuestao(texto);
})

When("clico no botão de buscar", () => {
    pesquisaPage.clicarBotaoSearch();
})

Then("visualizo uma mensagem de erro com o texto {string}", (resposta) => {
    pesquisaPage.visualizarResultadoInvalido(resposta);
})

Given("seleciono a opcao {string}", (tipo) => {
    pesquisaPage.selecionarCategoria(tipo);
})

Given("controle de paginação está aparecendo.", () => {
    pesquisaPage.verificarPaginacao();
})

Given("controle de paginação não está aparecendo.", () => {
    pesquisaPage.verificarNaoExibePaginacao();
})

Then("visualizo se a listagem de questões está com {int} itens", (qtd)=> {
    pesquisaPage.verficarQuantidadeItens(qtd);
})

Then("verifico se a questao está sendo exibida corretamente", ()=> {
    pesquisaPage.verificarConteudo();
})