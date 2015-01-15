require "rails_helper"

RSpec.describe AuthorsController, type: :routing do 
	it 'routes to all the authors' do
		expect(get('/authors')).to route_to('authors#index')
	end 

	it 'routes to all the books for a given author' do
		expect(get('/authors/1')).to route_to('authors#show', id: '1')
	end
end
