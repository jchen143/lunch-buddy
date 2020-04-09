class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :diner_id, null: false 
      t.integer :lunch_id, null: false 

      t.timestamps
    end
    add_index :reservations, :diner_id 
    add_index :reservations, :lunch_id 
  end
end
