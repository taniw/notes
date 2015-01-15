class User < ActiveRecord::Base
	has_many :subscriptions, :dependent => :destroy
	has_many :magazines, through: :subscriptions
end
