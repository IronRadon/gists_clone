GistApp.Views.GistDetailView = Backbone.View.extend({	
	initialize: function() {
		this.listenTo(this.model, "remove add", this.render)
	},

	events: { 
		"click button.favorite" : "favorite",
		"click button.unfavorite" : "unfavorite"

	},

	template: JST["gists/detail"],

	render: function(){
		var renderedContent = this.template({
			gist: this.model
		});

		this.$el.html(renderedContent);
		return this;
	},

	favorite: function(event) {
		event.preventDefault();
		var options = {"gist_id": this.model.get('id')};
		var favorite = new GistApp.Models.Favorite(options);
		console.log(favorite);
		favorite.save();
	},

	unfavorite: function(event) {
		event.preventDefault();
		var options = {"gist_id": this.model.get('id')};
		console.log(this.model.attributes);
		var favorite = new GistApp.Models.Favorite(options);
		console.log(favorite.atrributes); 
		favorite.destroy();
	}
})