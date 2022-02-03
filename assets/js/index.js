const form = document.querySelector('#form')

form.addEventListener('submit', e => {
    e.preventDefault()

    const peso    = Number(e.target.querySelector('#peso').value)
    // const peso          = Number(input_peso.value)
    const altura  = Number(e.target.querySelector('#altura').value)
    // const altura        = Number(input_altura.value)

    if (!peso) {
        definicao_resultado('Peso Inválido', false)
        return
    }
    
    if (!altura) {
        definicao_resultado('Altura Inválido', false)
        return
    }

    const imc        = calculadora(peso, altura)
    const msg        = `Seu IMC é ${imc} (${tabela_imc(imc)})` 
    
    definicao_resultado(msg, true)
})

function calculadora(peso, altura) {
    const calculo = peso / (altura * altura) * 10000
    return calculo.toFixed(2)
}

function tabela_imc(calculo) {
    const classificacao_imc = ['Peso Baixo', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
    if(calculo <= 18.5) return classificacao_imc[0]
    if(calculo <= 24.9) return classificacao_imc[1]
    if(calculo <= 29.9) return classificacao_imc[2]
    if(calculo <= 34.9) return classificacao_imc[3]
    if(calculo <= 39.9) return classificacao_imc[4]
    if(calculo >=  40)  return classificacao_imc[5]
}

function cria_tag() {
    const p = document.createElement('p')
    return p
}

function definicao_resultado(msg, e_valido) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = cria_tag()

    // if (e_valido) {
    //     p.classList.add('sucesso')
    // } else {
    //     p.classList.add('falha')
    // }

    p.innerHTML = msg
    resultado.appendChild(p)
    console.log(msg)
}

function abrir_modal() {
    let elemento =  document.getElementById('modal_resultado')
    let minha_modal = new bootstrap.Modal(elemento)
    minha_modal.show()
}