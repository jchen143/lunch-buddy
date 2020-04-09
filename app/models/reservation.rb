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

end 
