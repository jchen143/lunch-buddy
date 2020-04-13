@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :diner_id, :lunch_id, :created_at
    
    end
end