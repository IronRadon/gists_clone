GistApp.Collections.Gists = Backbone.Collection.extend({
	url: "/gists",
	model: GistApp.Models.Gist,

	//add parse function override
})