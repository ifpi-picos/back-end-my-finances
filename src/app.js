import Express from 'express';
import logger from 'morgan';
import cors from 'cors';
import rotasDeUsuarios from  './rotas/rotasDeUsuarios.js';
import rotasDeContas from './rotas/rotasDeContas.js';
import rotasDeOrcamento from './rotas/rotaDeOrcamento.js';
import rotasDeRelatorios from './rotas/rotaDeRelatorios.js';
import rotasDeMetas from './rotas/rotaDeMetas.js';
import rotasDeDespesas from './rotas/rotaDeDespesas.js';
import login from './rotas/login.js';
import cadastro from './rotas/cadastro.js';

const app = Express();
app.use(cors());
app.use(Express.json())
app.use(logger('dev'));

app.use('/usuarios', rotasDeUsuarios);
app.use('/contas', rotasDeContas);
app.use('/orcamento', rotasDeOrcamento);
app.use('/despesas', rotasDeDespesas);
app.use('/metas', rotasDeMetas);
app.use('/relatorios', rotasDeRelatorios);
app.use('/cadastro', cadastro);
app.use('/login', login);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
