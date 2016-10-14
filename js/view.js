define(
  
  'view',
  ['jquery', 'template'],
  function() {
    function View(model) {
      var self = this;

      self.init = function(data) {
        var html = $('#wrapper_template').html();
        var content = tmpl(html);
        $('body').append(content);

        self.elements = {
          input: $('.controls_input'),
          addButton: $('.controls_button'),
          taskList: $('.task_list')
        };
        self.renderList(model.data);
      }

      self.renderList = function(data) {
        var taskHtml = $('#item_template').html();
        var taskContent = tmpl(taskHtml, {data: data});
        self.elements.taskList.html(taskContent);
      }

      self.init();
    }
    return View;
  }
);