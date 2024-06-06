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
                <div class="card">
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
};


document.addEventListener('DOMContentLoaded', function() {
    getAPIMedicos();

    // Configura o carrossel para rolar automaticamente
    $('#carouselExample').carousel({
        interval: 5000 
    });
});
