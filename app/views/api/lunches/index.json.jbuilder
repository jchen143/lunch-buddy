@lunches.each do |lunch|
    json.set! lunch.id do
        json.extract! lunch, :id, :name, :description, :image_url, :size, :restaurant_id
        json.photoUrl url_for(lunch.photo)
    end
end