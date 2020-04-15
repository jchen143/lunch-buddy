json.extract! @reservation, :id, :diner_id, :lunch_id, :created_at
json.set! 'lunch' do
    lunch = @reservation.lunch 

    json.extract! lunch, :id, :name, :description, :size
    json.photoUrl url_for(lunch.photo)
end 

json.set! 'restaurant' do
    restaurant = @reservation.restaurant

    json.extract! restaurant, :id, :name, :address 
end