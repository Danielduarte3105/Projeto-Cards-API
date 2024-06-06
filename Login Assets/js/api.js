let medicos = [];
let botaoSalvar;
let medicoId = null;
let medicoParaExcluirId = null; // Variável global para armazenar o ID do médico a ser excluído

const postMedico = async function() {
    let url = 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto4/fecaf/novo/medico';
    let method = 'POST';

    let nome = document.getElementById('nome').value;
    let crm = document.getElementById('crm').value;
    let imagem = document.getElementById('image').value;
    let especialidade = document.getElementById('especialidade').value;

    let medicoJSON = {
        nome,
        crm,
        image: imagem,
        especialidade
    };

    if (medicoId) {
        url = `https://projeto-integrado-avaliacao.azurewebsites.net/projeto4/fecaf/atualizar/medico/${medicoId}`;
        method = 'PUT';
    }

    try {
        const request = await fetch(url, {
            method: method,
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(medicoJSON)
        });

        if (request.ok) {
            alert(`Médico ${medicoId ? 'atualizado' : 'salvo'} com sucesso.`);
            resetForm();
            getAPIMedicos();
        } else {
            const errorMessage = await request.text();
            console.error('Erro ao salvar médico:', errorMessage);
            alert('Não foi possível salvar o médico.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar salvar o médico.');
    }
};

const getAPIMedicos = async function() {
    let url = 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto4/fecaf/listar/medicos';

    try {
        let response = await fetch(url);
        let resultMedicos = await response.json();

        if (response.status == 200) {
            medicos = resultMedicos.medicos;
            setListDados(resultMedicos);
        } else {
            alert('A API não retornou dados ou está fora do ar.');
        }
    } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        alert('Erro ao buscar médicos.');
    }
};

const deleteMedico = async function(id) {
    let url = `https://projeto-integrado-avaliacao.azurewebsites.net/projeto4/fecaf/excluir/medico/${id}`;
    console.log(`Tentando excluir médico com ID: ${id}`);

    try {
        let response = await fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            alert('Médico excluído com sucesso.');
            // Atualiza a lista de médicos após exclusão bem-sucedida
            getAPIMedicos();
        } else {
            const errorMessage = await response.text();
            console.error('Erro ao excluir médico:', errorMessage);
            alert('Não foi possível excluir o médico.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar excluir o médico.');
    }
};

const editarMedico = function(id) {
    medicoId = id;
    let medicoParaEditar = medicos.find(medico => medico.id === id);

    if (medicoParaEditar) {
        document.getElementById('nome').value = medicoParaEditar.nome;
        document.getElementById('crm').value = medicoParaEditar.crm;
        document.getElementById('image').value = medicoParaEditar.image;
        document.getElementById('especialidade').value = medicoParaEditar.especialidade;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alert('Médico não encontrado.');
    }
};

const resetForm = function() {
    medicoId = null;
    document.getElementById('nome').value = '';
    document.getElementById('crm').value = '';
    document.getElementById('image').value = '';
    document.getElementById('especialidade').value = '';
};

const confirmarExclusao = function(id) {
    medicoParaExcluirId = id;
    let medicoParaExcluir = medicos.find(medico => medico.id === id);
    if (medicoParaExcluir) {
        let confirmMessageElement = document.getElementById('confirmMessage');
        if (confirmMessageElement) {
            confirmMessageElement.textContent = `Tem certeza que deseja excluir ${medicoParaExcluir.nome}: CRM ${medicoParaExcluir.crm}?`;
            document.getElementById('confirmModal').style.display = 'block';
        } else {
            alert('Elemento confirmMessage não encontrado.');
        }
    } else {
        alert('Médico não encontrado.');
    }
};

const fecharModal = function() {
    document.getElementById('confirmModal').style.display = 'none';
    medicoParaExcluirId = null; // Reseta a variável após fechar o modal
};

const confirmarSim = function() {
    if (medicoParaExcluirId) { // Verifica se o ID do médico a ser excluído está definido
        deleteMedico(medicoParaExcluirId); // Chama a função deleteMedico com o ID correto
        fecharModal(); // Fecha o modal
    }
};

const confirmarNao = function() {
    fecharModal();
};

document.addEventListener('DOMContentLoaded', function() {
    botaoSalvar = document.getElementById('Salvar');
    botaoSalvar.addEventListener('click', function() {
        postMedico();
    });

    getAPIMedicos();
    
    document.getElementById('confirmYes').addEventListener('click', confirmarSim);
    document.getElementById('confirmNo').addEventListener('click', confirmarNao);
    document.getElementsByClassName('close')[0].addEventListener('click', fecharModal);
});

const setListDados = function(dadosMedicos) {
    let cards = '';
    for (let medico of dadosMedicos.medicos) {
        cards += `
            <div class="card" id="card-${medico.id}">
                <img src="${medico.image}" alt="${medico.nome}">
                <h2>${medico.nome}</h2>
                <p>CRM: ${medico.crm}</p>
                <p>Especialidade: ${medico.especialidade}</p>
                <button onclick="editarMedico(${medico.id})">Editar</button>
                <button onclick="confirmarExclusao(${medico.id})">Excluir</button>
            </div>`;
    }
    document.getElementById('cards').innerHTML = cards;
};
