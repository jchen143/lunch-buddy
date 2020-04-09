@lunches.each do |lunch|
    json.set! lunch.id do
        json.extract! lunch, :id, :name, :description, :image_url, :size, :restaurant_id
    end
end