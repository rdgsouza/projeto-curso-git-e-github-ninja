(function(win) {
   'use strict';

  fuction app() {
    return{
      hello: function(name) {
        return 'Hi ' + name;
      }
    }; 
  }

  win.app = app();
})(window);
