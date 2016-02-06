module.exports = app => {
  const controller = app.controllers.home;

  app.get('/', controller.index);
}