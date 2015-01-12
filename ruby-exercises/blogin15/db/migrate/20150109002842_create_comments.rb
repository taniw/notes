class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :post_id
      t.string :integer
      t.string :author
      t.text :body

      t.timestamps null: false
    end
  end
end
