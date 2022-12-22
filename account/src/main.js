import express from 'express';
import { routes } from './routes.js';

const app = express();

app.use(express.json());
app.use(routes)
//só para informar que a ferramenta está recebendo requisições
app.get('/health', (req, res) =>{
    return res.send();
});

app.listen(3000, () => {
    console.log('Accounts server is running')
});