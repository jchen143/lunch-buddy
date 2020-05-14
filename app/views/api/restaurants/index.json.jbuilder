@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :address, :latitude, :longitude
        json.lunch_url url_for(restaurant.lunches[0].photo)
    end
end