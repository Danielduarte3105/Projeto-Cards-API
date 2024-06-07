let medicos = [];

const getAPIMedicos = async function() {
    let url = 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto4/fecaf/listar/medicos';

    let response = await fetch(url);
    let resultMedicos = await response.json();

    if (response.status === 200) {
        medicos = resultMedicos.medicos;
        setListDados(resultMedicos);
    } else {
        alert('A API não retornou dados ou está fora do ar.');
    }
};

const setListDados = function(dadosMedicos) {
    let carouselInner = document.querySelector('.carousel-inner');
    let cards = '';
    dadosMedicos.medicos.forEach(function(medico, index) {
        cards += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="card" data-index="${index}">
                    <img src="${medico.image}" class="card-img-top" alt="${medico.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${medico.nome}</h5>
                        <p class="card-text">CRM: ${medico.crm}</p>
                        <p class="card-text">Especialidade: ${medico.especialidade}</p>
                    </div>
                </div>
            </div>`;
    });
    carouselInner.innerHTML = cards;

    // Adiciona evento de clique aos cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            let index = this.getAttribute('data-index');
            showModal(medicos[index]);
        });
    });
};

const showModal = function(medico) {
    let modal = document.getElementById('medicoModal');
    document.getElementById('modal-img').src = medico.image;
    document.getElementById('modal-title').textContent = medico.nome;
    document.getElementById('modal-crm').textContent = `CRM: ${medico.crm}`;
    document.getElementById('modal-especialidade').textContent = `Especialidade: ${medico.especialidade}`;
    

    document.getElementById('update-button').onclick = function() {
        window.location.href = 'cadastro_medicos.html';
    };
    document.getElementById('register-button').onclick = function() {
        window.location.href = 'cadastro_medicos.html';
    };
    
    modal.style.display = "flex";
};

document.addEventListener('DOMContentLoaded', function() {
    getAPIMedicos();

    // Configura o carrossel para rolar automaticamente
    $('#carouselExample').carousel({
        interval: 5000 
    });

    // Fecha o modal quando clicar no "x"
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('medicoModal').style.display = "none";
    });

    // Fecha o modal quando clicar fora do modal
    window.addEventListener('click', function(event) {
        let modal = document.getElementById('medicoModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

