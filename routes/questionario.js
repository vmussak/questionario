module.exports = app => {
  const controller = app.controllers.questionario;

  app.get('/questoes', controller.getAll);
  /*app.post('/questoes', controller.post);
  app.put('/questoes/:id', controller.put);
  app.delete('/questoes/:id', controller.delete);*/
  app.get('/questoes/:id', controller.get);
}