const errorMessages = {
  INTERNAL_ERROR: 'Error when trying to perform operation',
  NOT_FOUND: '404 Nothing Found',
  TALKER_NOT_FOUND: 'Pessoa palestrante não encontrada',
  EMAIL_REQUIRED: 'O campo "email" é obrigatório',
  INVALID_EMAIL: 'O "email" deve ter o formato "email@email.com"',
  PASSWORD_REQUIRED: 'O campo "password" é obrigatório',
  INVALID_PASSWORD: 'O "password" deve ter pelo menos 6 caracteres',
  TOKEN_NOT_FOUND: 'Token não encontrado',
  INVALID_TOKEN: 'Token inválido',
  NAME_REQUIRED: 'O campo "name" é obrigatório',
  INVALID_NAME: 'O "name" deve ter pelo menos 3 caracteres',
  AGE_REQUIRED: 'O campo "age" é obrigatório',
  INVALID_AGE: 'A pessoa palestrante deve ser maior de idade',
  TALK_REQUIRED: 'O campo "talk" é obrigatório',
  DATE_REQUIRED: 'O campo "watchedAt" é obrigatório',
  INVALID_DATE: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  RATE_REQUIRED: 'O campo "rate" é obrigatório',
  INVALID_RATE: 'O campo "rate" deve ser um inteiro de 1 à 5'
};

module.exports = errorMessages;
