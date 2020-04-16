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

    has_one_attached :photo

    has_many :reservations,
        foreign_key: :lunch_id,
        class_name: :Reservation 

     def self.in_bounds(bounds)
        
            min_lat = bounds["southWest"]["lat"].to_f
            max_lat = bounds["northEast"]["lat"].to_f
            min_long= bounds["southWest"]["lng"].to_f
            max_long = bounds["northEast"]["lng"].to_f 
    
            records_array = [] 
            self.all.each do |lunch|
                lat = lunch.restaurant.latitude
                long = lunch.restaurant.longitude
                if (lat <= max_lat && lat >= min_lat) && (long <= max_long && long >= min_long)
                    records_array << lunch
                end 
            end 
        
        return records_array 

    end

    def self.search(query)

        #self.where("")
        records_array = self.where("(lower(lunches.name) SIMILAR ? OR lower(lunches.description) SIMILAR ? OR lower(restaurants.name) SIMILAR ? OR lower(restaurants.address) SIMILAR ?)", query.downcase, query.downcase, query.downcase, query.downcase)
        debugger

        return records_array
    end 

    def self.search_size(size)
        records_array = self.where("(size = ?)", size.downcase)
        return records_array
    end 

end 
