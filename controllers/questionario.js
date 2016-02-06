var questoes = [
    {
        id: 1,
        descricao: "Qual era a cor do cavalo branco de napoleão?",
        respostas: [
            {
                descricao: 'Branca',
                correta: true,
                explicacao: 'Porque sim...'
            },
            {
                descricao: 'Preta',
                correta: false
            },
            {
                descricao: 'Amarelo',
                correta: false
            },
            {
                descricao: 'Marrom',
                correta: false
            }
        ]
    },
    {
        id: 2,
        descricao: "Você é inteligente?",
        respostas: [
            {
                descricao: 'Não',
                correta: true,
                explicacao: 'Porque sim...'
            },
            {
                descricao: 'Sim',
                correta: false
            },
            {
                descricao: 'Não sei',
                correta: false
            },
            {
                descricao: 'Mais ou menos',
                correta: false
            }
        ]
    }
];

questoes.FirstOrDefault = function (condition) {
    for (var i = 0 ; i < this.length ; i++) {
        if (condition(this[i]))
            return this[i];
    }
    return null;
}

module.exports = () =>{
  var controller = {
    getAll: (req, res) => {
      res.render('questionario/index', {model: questoes});
    },
    get: (req, res) => {
      res.render('questionario/editar', {model: questoes.FirstOrDefault(x => x.id == req.params.id)});
    },
    post: (req, res) => {
      res.render('questionario/index');
    },
    put: (req, res) => {
      res.render('questionario/index');
    },
    delete: (req, res) => {
      res.render('questionario/index');
    }
  };
  return controller;
}


