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

require 'open-uri'
#DEMO USER
User.create(email: "demo_user@appacademy.io", password: "password");

Restaurant.create([{name: 'App Academy Cafe', address: '90 5th Ave', latitude: 40.7352422, longitude: -73.9960728 }]) 
Restaurant.create([{name: 'Jos Crabshack', address: '1804 3rd Ave, Apt. 3', latitude: 40.7879917, longitude: -73.9496956 }])#yes, yes
Restaurant.create([{name: 'Lincoln Square Tavern', address: '113 W 60th St', latitude: 40.772826, longitude: -73.9869315 }]) #yes,
Restaurant.create([{name: 'Central Park Hideaway', address: 'Park Ave',latitude: 40.774768, longitude: -73.971970 }]) 
Restaurant.create([{name: 'Liberty Island Tacos', address: '1 Main St',latitude: 40.6983762, longitude: -74.0468981 }])
Restaurant.create([{name: 'World Trade Center Food Court', address: '285 Fulton St',latitude: 40.7115322, longitude: -74.0167379 }])
Restaurant.create([{name: 'Peter Kim Korean BBQ Extraordinaire', address: '229 W 28 St',latitude: 40.748346, longitude: -73.9961638 }])
Restaurant.create([{name: 'Rams Deli', address: '441 East Fordham Rd',latitude: 40.8586227, longitude: -73.8880667 }])
Restaurant.create([{name: 'Rancho Estrella', address: '616 E 187th St',latitude: 40.8551323, longitude: -73.8892581 }])
Restaurant.create([{name: 'Staten Island Soup Spot', address: '34 Baker St',latitude: 40.5737968, longitude: -74.1493022 }])
Restaurant.create([{name: 'Bella', address: '40 Queens Blvd',latitude: 40.7442052, longitude: -73.9265901 }])
Restaurant.create([{name: 'Risotto e Boccio', address: '43 Queens Blvd',latitude: 40.7433062, longitude: -73.9224616 }])
Restaurant.create([{name: 'Checkmate in Queens', address: '10 Utopia Pkwy',latitude: 40.7255828, longitude: -73.7941393}])
Restaurant.create([{name: 'Sweet Chick', address: '10 Utopia Pkwy',latitude: 40.67986932855128, longitude: -73.97645332888183}])
Restaurant.create([{name: 'Big Danny Brisket and Waffle House', address: '1400 Fulton St',latitude: 40.680317, longitude: -73.943119}])


lunch_1 = Lunch.create(name: 'Fullstack Pancakes', description: 'Breakfast for lunch!', image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[0].id)
file_1 = open('https://lunch-bud-seeds.s3.amazonaws.com/pancakes.jpg')
lunch_1.photo.attach(io: file_1, filename: 'pancakes.jpg')

lunch_2 = Lunch.create(name: 'Seafood Medley', description: 'Yummy seafood',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[1].id)
file_2 = open('https://lunch-bud-seeds.s3.amazonaws.com/seafood_medley.jpg')
lunch_2.photo.attach(io: file_2, filename: 'seafood_medley.jpg')

lunch_3 = Lunch.create(name: 'Burger and Fries', description: 'Classic',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[2].id)
file_3 = open('https://lunch-bud-seeds.s3.amazonaws.com/fries_burgers_yum.jpg')
lunch_3.photo.attach(io: file_3, filename: 'fries_burgers_yum.jpg')

lunch_4 = Lunch.create(name: 'Leafy Salad', description: 'Healthy',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[3].id)
file_4 = open('https://lunch-bud-seeds.s3.amazonaws.com/leafy_salad.jpg')
lunch_4.photo.attach(io: file_4, filename: 'leaf_salad.jpg')

lunch_5 = Lunch.create(name: 'Fish Tacos', description: 'Crunchy',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[4].id)
file_5 = open('https://lunch-bud-seeds.s3.amazonaws.com/fish_tacos.jpg')
lunch_5.photo.attach(io: file_5, filename: 'fish_tacos.jpg')

lunch_6 = Lunch.create(name: 'Sushi', description: 'BYOSoy sauce',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[5].id)
file_6 = open('https://lunch-bud-seeds.s3.amazonaws.com/sushi.jpeg')
lunch_6.photo.attach(io: file_6, filename: 'sushi.jpeg')

lunch_7 = Lunch.create(name: 'Bulgogi Bowl', description: 'Pork and rice, what more?', image_url: 'placeholder', size: 'large', restaurant_id: Restaurant.all[6].id)
file_7 = open('https://lunch-bud-seeds.s3.amazonaws.com/bulgogi.jpg')
lunch_7.photo.attach(io: file_7, filename: 'bulgogi.jpg')

lunch_8 = Lunch.create(name: 'Lamb Gyro', description: 'White Sauce + Hot Sauce', image_url: 'placeholder', size: 'large', restaurant_id: Restaurant.all[7].id)
file_8 = open('https://lunch-bud-seeds.s3.amazonaws.com/gyro.jpg')
lunch_8.photo.attach(io: file_8, filename: 'gyro.jpg')

lunch_9 = Lunch.create(name: 'Al Pastor Tacos', description: 'Delicioso',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[8].id)
file_9 = open('https://lunch-bud-seeds.s3.amazonaws.com/al_pastor.jpg')
lunch_9.photo.attach(io: file_9, filename: 'al_pastor.jpg')

lunch_10 = Lunch.create(name: 'Chicken Noodle Soup', description: 'Slurp Slurp',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[9].id)
file_10 = open('https://lunch-bud-seeds.s3.amazonaws.com/chicken_noods.jpg')
lunch_10.photo.attach(io: file_10, filename: 'chicken_noods.jpg')

lunch_11 = Lunch.create(name: 'Spaghetti Carbonara', description: 'Break a few eggs to make a winner',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[10].id)
file_11 = open('https://lunch-bud-seeds.s3.amazonaws.com/carbonara.jpg')
lunch_11.photo.attach(io: file_11, filename: 'carbonara.jpg')

lunch_12 = Lunch.create(name: 'Sausage Rigatoni', description: 'Seasoned Perfectly',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[11].id)
file_12 = open('https://lunch-bud-seeds.s3.amazonaws.com/sausage_rigatoni.jpg')
lunch_12.photo.attach(io: file_12, filename: 'sausage_rigatoni.jpg')

lunch_13 = Lunch.create(name: 'Chess Sandwich', description: 'Ham, eggs, and cheese',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[12].id)
file_13 = open('https://lunch-bud-seeds.s3.amazonaws.com/ham_and_cheese.jpg')
lunch_13.photo.attach(io: file_13, filename: 'ham_and_cheese.jpg')

lunch_14 = Lunch.create(name: 'Chicken Sandwich', description: 'Spicy and good',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[13].id)
file_14 = open('https://lunch-bud-seeds.s3.amazonaws.com/fried-chicken-sandwich.jpg')
lunch_14.photo.attach(io: file_14, filename: 'fried-chicken-sandwich.jpg')

lunch_15 = Lunch.create(name: 'BBQ Chicken', description: 'Scrumptious',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[14].id)
file_15 = open('https://lunch-bud-seeds.s3.amazonaws.com/bbq-chicken.jpg')
lunch_15.photo.attach(io: file_15, filename: 'bbq-chicken.jpg')
