class RemoveRemainingMealsUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :remaining_meals
  end
end
