class CreateLunches < ActiveRecord::Migration[5.2]
  def change
    create_table :lunches do |t|
      t.string :name, null: false 
      t.string :description, null: false 
      t.string :image_url, null: false 
      t.string :size, inclusion: {in: ['small', 'medium', 'large']}, null: false 
      t.integer :restaurant_id, null: false

      t.timestamps
    end
    add_index :lunches, :restaurant_id
    
  end
end
