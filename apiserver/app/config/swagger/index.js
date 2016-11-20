const express = require('express');
const path = require('path')

const setupDocument = app => {
  app.get('/swagger/doc', (req, res) => {
      const doc = require('./v1.doc');
      res.json(doc);
  });
};

const setupSwaggerUi = app => {
  app.use('/swagger', (req, res, next) => {
    if (req.url === '/') res.redirect('/swagger?url=doc');
    else next();
  }, express.static(path.join(__dirname, '../../../node_modules/swagger-ui/dist')));
}

module.exports = app => {
    setupDocument(app);
    setupSwaggerUi(app);
}