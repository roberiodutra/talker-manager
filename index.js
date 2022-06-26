const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers');
const rescue = require('express-rescue');
const helmet = require("helmet");
const morgan = require("morgan");
const httpStatus = require('./helpers/httpStatusCodes');

const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));

const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(httpStatus.OK).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.use(rescue(router.talkersRouter));
