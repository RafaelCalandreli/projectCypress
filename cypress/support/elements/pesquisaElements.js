class PesquisaElements {
    botaoBrowse = () => { return '#navbar > ul > li:nth-child(1) > a' }

    inputQuestao = () => { return '#query' }

    botaoSearch = () => { return '.btn'}

    alertBuscaInvalida = () => { return '.alert' }

    selectCategoria = () => { return '#type' }

    tabela = () => { return '#page-top > div:nth-child(3) > table > tbody > tr'}

    paginacao  = () => { return '.pagination' }
    
}

export default PesquisaElements;