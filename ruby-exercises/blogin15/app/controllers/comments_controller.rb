class CommentsController < ApplicationController
	def create
		post = Post.find_by_id(params[:post_id])
		post.comments.create(params.require(:comment).permit!)
		redirect_to post
	end

	def destroy
		post = Post.find_by_id(params[:post_id])
		comment = Comment.find_by_id(params[:id])
		comment.destroy
		redirect_to post
	end
end
