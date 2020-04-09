# == Schema Information
#
# Table name: lunches
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  description   :string           not null
#  image_url     :string           not null
#  size          :string           not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Lunch < ApplicationRecord 
    validates :name, :description, :image_url, :size, :restaurant_id, presence: true
    
    belongs_to :restaurant, 
        foreign_key: :restaurant_id,
        class_name: :Restaurant 

end 
