class AddRemainingMealsToUsersWithDefault < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :remaining_meals, :integer, default: 30
  end
end
