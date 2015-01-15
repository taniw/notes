# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Author.destroy_all
Book.destroy_all

10.times do |i|
	Author.create( name: i
	)
	Book.create( title: "hello", year: "1900", author_id: "1" 
	)
end
