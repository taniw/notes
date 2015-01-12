class ArticlesController < ApplicationController
	#refactor code. see private
	before_action :find_article, only: [:show, :edit, :update, :destroy]

	#show form to create article
	def new
		@article = Article.new
	end

	#create article
	def create
		@article = Article.new(article_params)

		if @article.save
			redirect_to @article
		else
			render :new
		end
	end

	#show specific article
	def show
		#@article = Article.find(params[:id])
	end

	#list all the articles
	def index
		@articles = Article.all
		#bc there's a collection of articles
	end

	#find specific article to edit
	def edit
		#@article = Article.find(params[:id])
	end

	#update article
	def update
		#@article = Article.find(params[:id])

		if @article.update_attributes(article_params)
			redirect_to @article
		else
			render :edit
		end
	end

	#delete article
	def destroy
		#@article = Article.find(params[:id])
		@article.destroy
		redirect_to articles_path
	end

	private
		def article_params
			params.require(:article).permit(:title, :body)
		end

		#can remove it within the methods
		def find_article
			@article = Article.find(params[:id])
		end

	end

