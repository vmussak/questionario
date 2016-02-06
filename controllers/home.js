module.exports = () =>{
  var controller = {
    index: (req, res) => {
      res.render('index');
    }
  };
  return controller;
}