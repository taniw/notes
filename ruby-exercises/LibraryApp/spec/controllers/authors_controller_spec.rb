require 'rails_helper'

	RSpec.describe AuthorsController, :type => :controller do
		describe '#index' do
        	before { get :index }

			it 'returns 200' do 
				expect(response).to be_success
			end

			it 'renders authors/index' do
				expect(response).to render_template 'authors/index'
			end

			it 'assigns @authors' do
				expect(assigns(:authors)).to eq Author.all
			end

		describe '#show' do 
			before { get :show, id: 1 }
			let!(:author) { FactoryGirl.create(:author) }
		
			it 'returns 200' do 
				expect(response).to be_success
			end
		
			it 'assigns @author' do
				expect(assigns(:author)).to be_a Author
				expect(assigns(:author)).to be_persisted
			end
		
			it 'renders authors/show' do
				expect(response).to render_template 'authors/show'
			end
		end
	end
end
