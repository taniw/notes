class SongsController < ApplicationController
	def create
		album = Album.find_by_id(params[:album_id])
		album.songs.create(params.require(:song).permit!)
		redirect_to album
	end

	def destroy
	end
end
