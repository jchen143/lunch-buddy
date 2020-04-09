class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false 
      t.string :address, null: false 
      t.float :latitude, null: false 
      t.float :longitude, null: false 

      t.timestamps
    end
  end
end
