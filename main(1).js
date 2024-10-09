import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import router from './router/rota.js'

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/eventos", router);

app.listen(9000, () => {
    console.log('Servidor rodando em http://localhost:9000');
});
