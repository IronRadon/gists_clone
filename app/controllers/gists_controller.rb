class GistsController < ApplicationController
	include SessionsController

	def show
		@gists = Gist.where(:owner_id => current_user.id)
		render :json => @gists
	end
end
