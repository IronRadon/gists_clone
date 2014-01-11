GistApp.Routers.GistRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl
	},

	routes: {
		"":"gistsIndex",
		"gists":"gistsIndex"
	},

	gistsIndex: function() {
		var that = this;
		// var gists = new GistApp.Collections.Gists();
		GistApp.gists.fetch({
			success: function() {
				var view = new GistApp.Views.GistIndexView({
				collection: GistApp.gists
				});
				that._swapView(view); 
			}
		});
	},

	_swapView: function(view){
		this._currentView && this._currentView.remove();
		this._currentView = view;
		$('#content').html(this._currentView.render().$el)
	}


})