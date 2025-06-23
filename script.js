function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('header')
});

link2.addEventListener('click', () => {
    scrollToElement('.form')
});

link3.addEventListener('click', () => {
    scrollToElement('.form', 1)
});

link4.addEventListener('click', () => {
    scrollToElement('.form', 2)
});



let produtos = []

function cadastrar() {
    let nome = document.querySelector('#nome')
    let descricao = document.querySelector('#descricao')
    let categoria = document.querySelector('#categoria')
    let marca = document.querySelector('#marca')

    let venda = document.querySelector('#venda')
    let custo = document.querySelector('#custo')
    let unmed = document.querySelector('#unmed')
    let codbarra = document.querySelector('#codbarra')

    let estq = document.querySelector('#estq')
    let estqmin = document.querySelector('#estqmin')
    let loc = document.querySelector('#loc')
    let valid = document.querySelector('#valid')

    let novoProduto = {
        nome: nome.value,
        descricao: descricao.value,
        categoria: categoria.value,
        marca: marca.value,
        precoVenda: Number(venda.value),
        precoCusto: Number(custo.value),
        unidadeMedida: unmed.value,
        codigoBarras: codbarra.value,
        estoque: Number(estq.value),
        estoqueMinimo: Number(estqmin.value),
        localizacao: loc.value,
        validade: valid.value
    }

    let produtos = JSON.parse(localStorage.getItem('produtos')) || []
    produtos.push(novoProduto)
    localStorage.setItem('produtos', JSON.stringify(produtos))

    // Limpar os campos
    nome.value = ''
    descricao.value = ''
    categoria.value = ''
    marca.value = ''
    venda.value = ''
    custo.value = ''
    unmed.value = ''
    codbarra.value = ''
    estq.value = ''
    estqmin.value = ''
    loc.value = ''
    valid.value = ''

    // Atualiza a exibição
    mostrarProdutos()
}

function mostrarProdutos() {
    const lista = document.getElementById('listaProdutos')
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []

    // Limpa a div
    lista.innerHTML = '<h3>Produtos Cadastrados:</h3>'

    // Cria e adiciona os produtos
    produtos.forEach((p, index) => {
        lista.innerHTML += `
            <div style="margin-bottom: 10px; padding: 10px; border-bottom: 1px solid #ccc;">
                <strong>${index + 1}. ${p.nome}</strong><br>
                Descrição: ${p.descricao}<br>
                Categoria: ${p.categoria}<br>
                Marca: ${p.marca}<br>
                Preço de Venda: R$ ${p.precoVenda.toFixed(2)}<br>
                Preço de Custo: R$ ${p.precoCusto.toFixed(2)}<br>
                Unidade: ${p.unidadeMedida} <br>
                Código de Barras: ${p.codigoBarras} <br>
                Estoque: ${p.estoque}<br>
                Estoque Mínimo: ${p.estoqueMinimo}<br>
                Localização: ${p.localizacao}<br>
                Validade: ${p.validade}
            </div>
        `
    })
}

// Carrega os produtos salvos ao abrir a página
window.onload = mostrarProdutos

