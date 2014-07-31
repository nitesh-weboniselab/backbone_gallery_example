var Blog = Blog || {};
Blog.templates = (function(){
	return{
		userTemplate: '<div><span><% name %></span><br/><button id="update">update</button><br/><button id="delete">delete</button></div>'
	}   
})();


var Initialize = Backbone.View.extend({
	events:{
      	'click button':'addUser'
  },
      template : _.template(Blog.templates.userTemplate),
	initialize:function(options){
		this.event = options.event;
		
	},
	addUser:function(e){
    this.el.append(new this.template({name:$('#add').val()}));  
	}

});

var router= Backbone.Router.extend({
  routes: {
      '': 'index',
      'show/:id': 'show',
      'add':'add'
  },

  index: function(){
    $(document.body).append('<input type="text" id="add"/><button id="addbutton">ADD</button>');
      $(document.body).append('<div id="userList"></div>');
      new Initialize({
      	event : _.extend({},Backbone.Events)
      })
  },
  show: function(){
      $(document.body).append("Show route has been called..");
  },
   add: function(){
   	
   }
});
new router();
Backbone.history.start();
