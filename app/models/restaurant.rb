# == Schema Information
#
# Table name: restaurants
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  address    :string           not null
#  latitude   :float            not null
#  longitude  :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Restaurant < ApplicationRecord
    validates :name, :address, :latitude, :longitude, presence: true 

    has_many :lunches,
        foreign_key: :restaurant_id, 
        class_name: :Lunch 

end 
