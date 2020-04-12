# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  diner_id   :integer          not null
#  lunch_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reservation < ApplicationRecord 
    belongs_to :user, 
        foreign_key: :diner_id,
        class_name: :User 

    belongs_to :lunch,
        foreign_key: :lunch_id,
        class_name: :Lunch 
end 
