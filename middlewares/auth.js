exports.isAuthenticated = (req, res, next) => {
  if(!req.headers["authorization"]){
    res.status(401).json({status: "Você não tem permissão!!"});
    return;
  }
  next();
}
