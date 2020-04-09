# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Lunch.destroy_all
Restaurant.destroy_all


User.create(email: "demo_user@appacademy.io", password: "password");

Restaurant.create([{name: 'App Academy Cafe', address: '90 5th Ave', latitude: 40.7352422, longitude: -73.9960728 }]) 
Restaurant.create([{name: 'Jos Crabshack', address: '1804 3rd Ave, Apt. 3', latitude: 40.7879917, longitude: -73.9496956 }])#yes, yes
Restaurant.create([{name: 'Lincoln Square Tavern', address: '113 W 60th St', latitude: 40.772826, longitude: -73.9869315 }]) #yes,
Restaurant.create([{name: 'Central Park Hideaway', address: 'Park Ave',latitude: 40.774768, longitude: -73.971970 }]) 
Restaurant.create([{name: 'Liberty Island Tacos', address: '1 Main St',latitude: 40.6983762, longitude: -74.0468981 }])
Restaurant.create([{name: 'World Trade Center Food Court', address: '285 Fulton St',latitude: 40.7115322, longitude: -74.0167379 }])


Lunch.create(name: 'Fullstack Tears Soup', description: 'Soup that does not soothe the soul',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[0].id)
Lunch.create(name: 'Seafood Medley', description: 'Yummy seafood',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[1].id)
Lunch.create(name: 'Burger and Fries', description: 'Classic',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[2].id)
Lunch.create(name: 'Leafy Salad', description: 'Healthy',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[3].id)
Lunch.create(name: 'Al Pastor Tacos', description: 'Delicioso',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[4].id)
Lunch.create(name: 'Sushi', description: 'BYOSoy sauce',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[5].id)
