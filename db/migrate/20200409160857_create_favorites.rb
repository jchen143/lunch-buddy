class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :diner_id, null: false 
      t.integer :reservation_id, null: false 
      t.timestamps
    end

    add_index :favorites, :diner_id 
    add_index :favorites, :reservation_id
  end
end
