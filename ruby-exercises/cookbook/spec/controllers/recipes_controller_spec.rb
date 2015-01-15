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

	describe '#create' do
		context 'valid params' do
			before do
				post :create, recipe: {
					title: 'foo', instructions: 'bar'
				}
			end

			it 'assigns @recipe' do
				expect(assigns(:recipe)).to be_a Recipe
			end

			it 'persists the recipe' do
				expect(assigns(:recipe)).to be_persisted
				#to be successfully stored in the database
			end

			it 'redirects to the recipe' do
				expect(response).to redirect_to recipe_path(Recipe.last)
			end
		end

		#if filled out everything wrong
		context 'invalid params' do
			before do
				post :create, recipe: {
					title: '', instructions: ''
				}
			end

			it 'assigns @recipe' do
				expect(assigns(:recipe)).to be_a Recipe
			end

			it 'does not persist the recipe' do
				expect(assigns(:recipe)).not_to be_persisted
			end

			it 'renders recipes/new' do
				expect(response).to render_template 'recipes/new'
			end
		end
	end

	describe '#show' do
		let!(:recipe) { FactoryGirl.create(:recipe) }
		#! bang makes this available immediately. bang allows it to be used throughout the tests. let allows that portion to run first. "let" makes it available to our "it" methods. Let with a bang = prepared. It's already stored so that it can be used in the tests. How do you know when to use the bang?

		before { get :show, id: recipe.id }


		it 'returns 200' do
			expect(response).to be_success
		end

		it 'assigns @recipe' do
			expect(assigns(:recipe)).to be_a Recipe
			expect(assigns(:recipe)).to be_persisted
		end

		it 'renders recipes/show' do
			expect(response).to render_template 'recipes/show'
		end
	end

	describe '#index' do
		before (:example) do
			get :index
		end

		before(:context) do
			FactoryGirl.create(:recipe)
		end

		it 'returns 200' do
			expect(response).to be_success
		end

		it 'renders recipes/index' do
			expect(response).to render_template 'recipes/index'
		end

		it 'assigns @recipes' do
			expect(assigns(:recipes)).to eq Recipe.all
		end
	end
end







