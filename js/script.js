let contatos = []

document.getElementById('busca').addEventListener('input', atualizarContatos)

function cadastrarContato() {
    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value

    if (!nome || !telefone || !email) {
        alert('Todos os campos devem ser preenchidos!')
        return
    }

    const contato = { nome, telefone, email }
    contatos.push(contato)

    atualizarContatos()
    limparCampos()

}

function atualizarContatos() {
    const lista = document.getElementById('listaContatos')
    lista.innerHTML = ''

    const buscar = document.getElementById('busca').value.toLowerCase()

    const contatosFiltrados = contatos.filter(contato =>
        contato.nome.toLowerCase().includes(buscar))

    if (contatosFiltrados.length === 0) {
        lista.innerHTML = 'Nenhum contato encontrado!'
    }

    contatosFiltrados.forEach(contato => {

        const indexReal = contatos.indexOf(contato)

        const linha = `
            <tr>
                <td>${contato.nome}</td>
                <td>${contato.telefone}</td>
                <td>${contato.email}</td>
                <td>
                    <div>
                        <button onclick="excluirContato(${indexReal})">X</button>
                        <button onclick="editarContato(${indexReal})">Editar</button>
                    </div>
                </td>
            </tr>
        `

        lista.innerHTML += linha
    })
}

function excluirContato(index) {
    contatos.splice(index, 1)
    atualizarContatos()
}

function editarContato(index) {

    const contato = contatos[index]

    document.getElementById('nome').value = contato.nome
    document.getElementById('telefone').value = contato.telefone
    document.getElementById('email').value = contato.email

    contatos.splice(index, 1)
}

function limparCampos() {
    document.getElementById('nome').value = ''
    document.getElementById('telefone').value = ''
    document.getElementById('email').value = ''
}
