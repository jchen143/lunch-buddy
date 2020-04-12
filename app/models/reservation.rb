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
    validates :diner_id, :lunch_id, presence: true 
    validate :ensure_user_has_remaining_meals
    validate :ensure_one_per_day

    belongs_to :user, 
        foreign_key: :diner_id,
        class_name: :User 

    belongs_to :lunch,
        foreign_key: :lunch_id,
        class_name: :Lunch 

    #we have to make sure that the reservation is valid by passsing in current user to see if they have enough meals left,
    # do they 

    def ensure_user_has_remaining_meals
        user = User.find(diner_id)

        if user.remaining_meals < 1
            errors.add(:remaining_meals, "Insufficient amount of lunches remaining")
        end 
    end

    
    def ensure_one_per_day
        user = User.find(diner_id)

        if !(user.reservations.empty? || Time.now - user.reservations.last.created_at >= 86400)
            errors.add(:daily_limit, "You can only reserve one meal per day ")
        end 

    end 

    #use this for index
    def self.reservations_for_current_user(user)
        records = self.where('diner_id = ?', user.id)
        return records 
    end 

    
end 
