class Song < ActiveRecord::Base
	belongs_to :album

	validates :title, presence: true
	validates :artist, presence: true
	validates :year, presence: true
end
