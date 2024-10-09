const API_URL = 'http://localhost:9000/eventos'; // URL corrigida

let currentEvent = null;

// Função para listar todos os eventos
const fetchEvents = async () => {
    try {
        const response = await fetch(`${API_URL}/lista`); // Chamada para listar eventos
        const events = await response.json();

        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = '';

        events.forEach(event => {
            const li = document.createElement('li');
            li.innerText = `${event.title} - ${event.location} - R$ ${event.preco || 'N/A'}`;
            li.addEventListener('click', () => toggleEventDetails(event));
            eventsList.appendChild(li); // Adicione o elemento à lista
        });
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
    }
};

// Função para adicionar um novo evento
const addEvent = async (event) => {
    event.preventDefault(); 

    const newEvent = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
        imageUrl: document.getElementById('imageUrl').value,
        preco: parseFloat(document.getElementById('preco').value)
    };

    if (!newEvent.title || !newEvent.description || !newEvent.location || isNaN(newEvent.preco)) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/cadastro`, { // Chamada para adicionar evento
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent)
        });

        if (response.ok) {
            document.getElementById('event-form').reset();
            fetchEvents();
        } else {
            console.error('Erro ao adicionar evento:');
        }
    } catch (error) {
        console.error('Erro ao adicionar evento:', error);
    }
};

// Demais funções (toggleEventDetails, showEventDetails, hideEventDetails) permanecem inalteradas

// Adicionar evento ao enviar o formulário
document.getElementById('event-form').addEventListener('submit', addEvent);

// Carrega os eventos ao iniciar a página
fetchEvents();
