const express = require ('express');
const routes = require('./routes/api');
const bodyParser = require(body-parser);

const app = express();

app.use(bodyParser);
app.use('/api', routes);

app.listen(process.env.port || 4000, () => console.log('Server started..'));