class Album < ActiveRecord::Base
	has_many :songs

	validates :title, presence: true

	validates :artist, presence: true

	validates :year, presence: true
end
