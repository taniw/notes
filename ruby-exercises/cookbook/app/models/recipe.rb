class Recipe < ActiveRecord::Base
	validates :title, presence: true
	validates :instructions, presence: true
	#aka validates :title, :instructions, presence: true
end
