class FavoritesController < ApplicationController
	def create
		params[:favorite][:user_id] = current_user.id
		params[:favorite][:gist_id] = params[:gist_id]
		@favorite = Favorite.new(params[:favorite])

		if @favorite.save
			render :json => @favorite
		else
			render :json => @favorite.errors.full_messages
		end
	end

	def destroy
		@favorite = current_user.favorites.where(:gist_id => params[:gist_id])
		@favorite.destroy
		render :json => @favorite
	end

	def index
		@favorites = current_user.favorites
		render :json => favorites
	end
end