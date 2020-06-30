let acaoEscolhida = ''
let valorTela = ''
let valorAntigoTela = ''
let resultado

function btnNumberClick (event) {
    let digito = event.target.value
    atualizaTela(`${valorTela}${digito}`)
}

function btnActionClick (event) {
    let acao = event.target.value
    rodarAcao(acao)
}

function atualizaTela (valor) {
    const tela = document.querySelector('#display')
    valorTela = valor
    tela.innerHTML = valorTela
}

function rodarAcao (acao) {

    if (acao === '%'){
        valorAntigoTela = valorTela
        resultado = (parseFloat(valorAntigoTela) * 1) / 100
        atualizaTela(resultado)
    }

    if (acao === '=') {
        
        switch (acaoEscolhida) {
            case '+':
                resultado = parseFloat(valorAntigoTela) + parseFloat(valorTela)
                break;
            case '-':
                resultado = parseFloat(valorAntigoTela) - parseFloat(valorTela)
                break;
            case 'x':
                resultado = parseFloat(valorAntigoTela) * parseFloat(valorTela)
                break;
            case '/':
                resultado = parseFloat(valorAntigoTela) / parseFloat(valorTela)
                break;
            default:
                break;
        }    

        atualizaTela(resultado)

    } else {
        if (acaoEscolhida === 'AC') {
            location.reload()
        }
        valorAntigoTela = valorTela
        atualizaTela('')
        acaoEscolhida = acao
    }

}