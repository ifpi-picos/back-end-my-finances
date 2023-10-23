import Express from 'express';
import logger from 'morgan';
import rotasDeUsuarios from './rotas/rotasDeUsuarios.js';

const app = Express();
app.use(logger('dev'));

app.use('/usuarios', rotasDeUsuarios);
app.use('/contas', rotasDeContas);
app.use('/orcamento', rotasDeOrcamento);
app.use('/despesas', rotasDeDespesas);
app.use('/metas', rotasDeMetas);
app.use('/relatorios', rotasDeRelatorios);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
