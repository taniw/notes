class Article < ActiveRecord::Base
	validates :title, presence: true
	#AKA validates(;title, { presence: true})
	validates :body, presence: true
end
