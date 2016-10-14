requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min',
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
  }
});

require(
  [
    'jquery',
    'model',
    'view',
    'controller'
  ],
  
  function($, Model, View, Controller) {
    var data = ['Jump with a parachute (don\'t forget to take it!)', 'Conquer Everest', 'Drink a cup of tea with Elizabeth II'];
    var model = new Model(data);
    var view = new View(model);
    var controller = new Controller(model, view);
  }
);