class AlbumsController < ApplicationController
	before_action :find_album, only: [:show, :edit, :update, :destroy]


	def new
		@album = Album.new
	end

	def create
		@album = Album.new(album_params)

		if @album.save
			redirect_to @album
		else
			render :new
		end
	end

	def show
		#@album = Album.find(params[:id])
	end

	def index
		@album = Album.all
	end

	def edit
		#@album = Album.find(params[:id])
	end

	def update
		#@album = Album.find(params[:id])

		if @album.update_attributes(album_params)
			redirect_to @album
		else
			render :edit
		end
	end

	def destroy
		#@album = Album.find(params[:id])
		@album.destroy
		redirect_to albums_path
	end


	private
		def album_params
			params.require(:album).permit(:title, :artist, :year)
		end

		def find_album
			@album = Album.find(params[:id])
		end

	end

