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

    def self.in_bounds(bounds)
        # google map bounds will be in the following format:
            # {
            #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
            #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
            # }
            #... query logic goes here
            
            min_lat = bounds["southWest"]["lat"].to_f
            max_lat = bounds["northEast"]["lat"].to_f
            min_long= bounds["southWest"]["lng"].to_f
            max_long = bounds["northEast"]["lng"].to_f
           
        records_array = self.where("(latitude > ? AND latitude < ?) AND (longitude > ? AND longitude < ?)" , min_lat, max_lat, min_long, max_long)
  
        return records_array 

    end

     def self.search(query)

        #self.where("")
        records_array = self.where("lower(lunches.name) LIKE ? OR lower(lunches.description) LIKE ? OR lower(restaurants.name) LIKE ? OR lower(restaurants.address) LIKE ?", "%#{query.downcase}%" , "%#{query.downcase}%", "%#{query.downcase}%", "%#{query.downcase}%")
     

        return records_array
    end 

    def self.search_size(size)
        records_array = self.where("(lunches.size = ?)", size.downcase)
        return records_array
    end 

end 
