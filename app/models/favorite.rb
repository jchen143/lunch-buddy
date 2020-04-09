# == Schema Information
#
# Table name: favorites
#
#  id             :bigint           not null, primary key
#  diner_id       :integer          not null
#  reservation_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Favorite < ApplicationRecord 

end 
