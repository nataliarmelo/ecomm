import express, { json } from 'express';
import { routes } from './routes.js';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import apiDocs from './api-docs.json' assert {type: 'json'};

const app = express();

app.use(express.json());
app.use(routes)
app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

app.get('/health', (req, res) =>{
    return res.send();
});

app.listen(3001, () => {
    console.log('Accounts server is running')
});