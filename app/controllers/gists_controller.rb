class GistsController < ApplicationController
	include SessionsHelper

	def index
		@gists = Gist.where(:owner_id => current_user.id)
		render :json => @gists
	end
end
