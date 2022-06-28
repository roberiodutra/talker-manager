const errorMessages = {
  INTERNAL_ERROR: { message: 'Error when trying to perform operation' },
  NOT_FOUND: { message: '404 Nothing Found' },
  TALKER_NOT_FOUND: { message: 'Pessoa palestrante não encontrada' },
  EMAIL_REQUIRED: { message: 'O campo "email" é obrigatório' },
  INVALID_EMAIL: { message: 'O "email" deve ter o formato "email@email.com"' },
  PASSWORD_REQUIRED: { message: 'O campo "password" é obrigatório' },
  INVALID_PASSWORD: { message: 'O "password" deve ter pelo menos 6 caracteres' },
  TOKEN_NOT_FOUND: { message: 'Token não encontrado' },
  INVALID_TOKEN: { message: 'Token inválido' },
  NAME_REQUIRED: { message: 'O campo "name" é obrigatório' },
  INVALID_NAME: { message: 'O "name" deve ter pelo menos 3 caracteres' },
  AGE_REQUIRED: { message: 'O campo "age" é obrigatório' },
  INVALID_AGE: { message: 'A pessoa palestrante deve ser maior de idade' },
  TALK_REQUIRED: { message: 'O campo "talk" é obrigatório' },
  DATE_REQUIRED: { message: 'O campo "watchedAt" é obrigatório' },
  INVALID_DATE: { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
  RATE_REQUIRED: { message: 'O campo "rate" é obrigatório' },
  INVALID_RATE: { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
};

module.exports = errorMessages;
