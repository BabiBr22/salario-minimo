const base = []

// cadastrando um evento
const cadastroEvento = async (req, res) => {
    try {
        const cadastro = req.body
        const newEvent = { ...cadastro, id: base.length + 1 };
        base.push(newEvent)
        res.status(200).send(newEvent)
    } catch (fail) {
        res.status(500).send(fail)
    }
}

// listando eventos cadastrados
const listaEvento = async (req, res) => {
    try {
        const lista = base.map(event => ({
            title: event.title, // Use 'title' em vez de 'nome'
            preco: event.preco
        }));

        res.status(200).send(lista);
    } catch (fail) {
        res.status(500).send(fail);
    }
};


// detalhes do evento
const detalheEvento = async (req, res) => {
    try {
        const descricao = req.body
        base.push(descricao)
        res.status(200).send(base)
    } catch(fail) {
        res.status(500).send(fail)
    }
}

export { listaEvento, cadastroEvento, detalheEvento };