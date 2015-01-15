require 'rails_helper'

RSpec.describe Author, type: :model do
    describe 'Attributes' do 
  	it { is_expected.to respond_to :name }
  	
  end 
  describe 'Database' do
		it { is_expected.to have_db_column :name }
		
  end
  describe 'Validations' do 
  	it { is_expected.to validate_presence_of :name }
  	end
end
