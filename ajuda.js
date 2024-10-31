preço = 'R$ 5,00'

resescrita = 'Se quiser alterar o tamanho da fonte, digite h1 (ou outro valor no lugar do 1), um entre < > e o outro < / aqui > os valores vão de 1 a 6. Entre eles coloque o texto.'
resadd = 'Para adicionar um elemento, como uma imagem, precisamos escrever img. No lugar de link digite o link da imagem. Mas se quiser adicionar algum outro elemento não precisa colocar um link'
resper = 'Para personalizar um elemento, digite o elemento que você adicionou, depois a o numero dele, o número começa do 0, então se você adicionar uma terceira imagem ao invés dela ser a número 3 ela será a número 2, ou apenas subtraia  1 do valor, 3 - 1 = 2. Em caso de dúvida olhe o console. Também adicione um valor como pixel(px), porcentagem(%), ou algum outro válido.'
restipo = 'No tipo você pode colocar em pixels(px), porcenatagem(%), distância vertical(dvh) ou qualquer outro valor válido, para saber mais pesquise na internet.'
resgeral = `Este site foi feito para criar sites, quando terminar clique em finalizar, você será redirecionado para o gmail. Lá apenas envie o email, não mude o assunto, o conteúdo nem o destinatário. Terá um valor de ${preço} a cada site feito. Caso queira enviar uma mensagem no Whatsapp fique a vontade, também terá o valor de ${preço}. Se precisar combinaremos o preço em qualquer um destes contatos.`

text = document.getElementById('text')

function escrita() {
    text.innerHTML = resescrita
}

function add() {
    text.innerHTML = resadd
}

function personalizar() {
    text.innerHTML = resper
}

function tipo() {
    text.innerHTML = restipo
}

function geral() {
    text.innerHTML = resgeral
}

function res() {    
    option = document.getElementById('1').value

    if (option == 'Escrita') {
        escrita()
    } else if (option == 'Adicionar Elemento') {
        add()
    } else if (option == 'Personalizar') {
        personalizar()
    } else if (option == 'Tipo') {
        tipo()
    } else if (option == 'Geral') {
        geral()
    }
}

