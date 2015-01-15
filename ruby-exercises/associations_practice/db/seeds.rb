# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

Magazine.destroy_all

Subscription.destroy_all

10.times do |i|
  user = User.create
  magazine = Magazine.create
  subscription = Subscription.create(user_id: user.id, magazine_id: magazine.id)
end
