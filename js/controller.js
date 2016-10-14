define(
  
  'controller',
  ['jquery', 'model', 'view'],
  function() {

    function Controller(model,view) {
      var self = this;

      view.elements.addButton.on('click', addItem);
      view.elements.taskList.on('click', '.item_list_delete', removeItem);
      view.elements.taskList.on('click', '.item_list_edit', editItem);

      function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      };

      function removeItem() {
        var item = $(this).attr('data_value');
        model.removeItem(item);
        view.renderList(model.data);
      };

      function editItem() {
        var item = $(this).siblings('.item_list_delete').attr('data_value');
        var itemToReplace = prompt('Edit task content below', item);
        if (itemToReplace !== '') {
          model.insertItem(item, itemToReplace);
          view.renderList(model.data); 
        };
      };
    };
    return Controller;
  }
);