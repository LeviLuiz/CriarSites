localStorage.removeItem('ultimo')

sites = localStorage.getItem('salvo')
background = localStorage.getItem('fundo')

main = document.querySelector('main')

if (sites != null) {
    main.innerHTML = sites
    main.style.background = background
}

i = 0
t = 0

aba1 = document.getElementById('um')
aba2 = document.getElementById('2')
aba3 = document.getElementById('3')
aba4 = document.getElementById('4')

aba1.style.display = 'none'
aba2.style.display = 'none'
aba3.style.display = 'none'
aba4.style.display = 'none'

function parte1() {
    aba2.style.display = 'none'
    aba3.style.display = 'none'
    aba4.style.display = 'none'
    aba1.style.display = 'block'
}

function parte2() {
    aba1.style.display = 'none'
    aba3.style.display = 'none'
    aba4.style.display = 'none'
    aba2.style.display = 'block'
}

function parte3() {
    aba1.style.display = 'none'
    aba2.style.display = 'none'
    aba4.style.display = 'none'
    aba3.style.display = 'block'
}

function parte4() {
    aba1.style.display = 'none'
    aba2.style.display = 'none'
    aba3.style.display = 'none'
    aba4.style.display = 'block'
}

function salvar() {
    const mainContent = main.innerHTML; // para obter o conteúdo HTML
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=leviluizmodesto@gmail.com&su=Publicar%20Site&body=${encodeURIComponent(mainContent)} ${background}`, '_blank');
}

function limpar() {
    confirmacao = confirm('Você tem certeza? Isso não poderá ser desfeito!')

    if (confirmacao == true) {
        localStorage.clear()
        window.location.reload()
    }
}

function escrever() {
    texto = document.getElementById('texto').value

    criar = document.createElement('p')
    criar.innerHTML = texto
    criar.id = 'p' + t
    main.appendChild(criar)
    localStorage.setItem('p', t)
    t++

    //localStorage.setItem('ultimo', criar.id)
    console.log(criar)
}

function adicionar() {
    elemento = document.getElementById('add').value
    link = document.getElementById('link').value

    nelement = document.createElement(elemento)
    nelement.src = link
    nelement.id = elemento + i
    localStorage.setItem(elemento + i, elemento + i)
    main.appendChild(nelement)
    console.log(`Elemento: ${elemento + i}`)
    i++

    localStorage.setItem('ultimo', nelement.id)
}

function fundo() {
    cor1 = document.getElementById('cor1').value.toLowerCase()
    cor2 = document.getElementById('cor2').value.toLowerCase()

    if (cor1.length == 0) {
        alert('Insira uma cor no Cor')
    } else {
        if (cor2.length > 0) {
            main.style.background = `linear-gradient(to right, ${cor1}, ${cor2})`;
        } else {
            main.style.background = cor1
        }
    }

    if (main.style.background == '') {
        alert('Insira uma cor válida')
    }
}

function personalizar() {
    let element = document.getElementById('element').value;
    let num = document.getElementById('num').value;

    // Cria a chave a partir dos valores do input
    let keyToCheck = element + num;

    // Obtém o elemento do DOM pelo ID
    let itemr = document.getElementById(keyToCheck);

    // Se o elemento não existir, alerta e sai
    if (!itemr) {
        console.warn("Elemento não encontrado no DOM:", keyToCheck);
        return;
    }

    // Captura os valores de estilo
    let tipo = document.getElementById('tipo').value;
    let largura = document.getElementById('width').value;
    let altura = document.getElementById('height').value;
    let position = document.getElementById('position').value;
    let top = document.getElementById('top').value;
    let bottom = document.getElementById('bottom').value;
    let left = document.getElementById('left').value;
    let right = document.getElementById('right').value;
    let cor = document.getElementById('cor').value;
    let border = document.getElementById('border').value;
    let borderr = document.getElementById('borderr').value;
    let margin = document.getElementById('margin').value;
    let fundo = document.getElementById('background').value;

    // Aplica os estilos
    if (tipo.length > 0) itemr.style.width = largura + tipo;
    if (tipo.length > 0) itemr.style.height = altura + tipo;
    if (tipo.length > 0) itemr.style.position = position;
    if (tipo.length > 0) itemr.style.top = top + tipo;
    if (tipo.length > 0) itemr.style.bottom = bottom + tipo;
    if (tipo.length > 0) itemr.style.left = left + tipo;
    if (tipo.length > 0) itemr.style.right = (right + tipo) - '25%';
    if (cor.length > 0) itemr.style.color = cor;
    if (border.length > 0) itemr.style.border = `1px solid ${border}`;
    if (borderr.length > 0) itemr.style.borderRadius = borderr + tipo
    if (margin.length > 0) itemr.style.margin = `${margin}`;
    if (fundo.length > 0) itemr.style.background = fundo;
}

function desfazer() {
    removerid = localStorage.getItem('ultimo')
    remover = document.getElementById(removerid)
    main.removeChild(remover)
}

function finalizar() {
    /*site = [main]
    salvar =  localStorage.setItem('site', site)
    console.log(main.Child)
    console.log(salvar)
    console.log(site)
    console.log(main.childNodes)*/

    const mainContent = main.innerHTML

    localStorage.setItem('salvo', mainContent)
    localStorage.setItem('fundo', main.style.background)

    document.getElementById('salvar').innerHTML = 'Salvo'

    tempo = setInterval(() => {
        document.getElementById('salvar').innerHTML = 'Salvar'
        clearInterval(tempo)
    },1000)
}