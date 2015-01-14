require 'rails_helper'

RSpec.describe RecipesController, type: :controller do
	describe '#new' do
		before { get :new }

		it 'returns 200' do
			expect(response).to be_success
		end

		it 'renders recipes/new' do
			expect(response).to render_template 'recipes/new'
		end

		it 'assigns @recipe' do
			expect(assigns(:recipe)).to be_a Recipe
			expect(assigns(:recipe)).not_to be_persisted
		end
	end
end
