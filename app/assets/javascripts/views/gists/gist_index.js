GistApp.Views.GistIndexView = Backbone.View.extend({
	events: {

	},

	template: JST["gists/index"],

	render: function() {
		var that = this;
		var renderedContent = this.template({
			gists: this.collection 
		});
		this.$el.html(renderedContent);

		this.collection.each(function(gist) {
			var gist_view = new GistApp.Views.GistDetailView({ model: gist });
			var gist_li = $(that.$el.find('#' + gist.get('id')));
			gist_li.html(gist_view.render().$el);
		});
		return this;
	}
});
