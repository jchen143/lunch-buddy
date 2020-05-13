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
Restaurant.create([{name: "Jo's Crabshack", address: '1804 3rd Ave, Apt. 3', latitude: 40.7879917, longitude: -73.9496956 }])#yes, yes
Restaurant.create([{name: 'Lincoln Square Tavern', address: '113 W 60th St', latitude: 40.772826, longitude: -73.9869315 }]) #yes,
Restaurant.create([{name: 'Central Park Hideaway', address: 'Park Ave',latitude: 40.774768, longitude: -73.971970 }]) 
Restaurant.create([{name: 'Liberty Island Tacos', address: '1 Main St',latitude: 40.6983762, longitude: -74.0468981 }])
Restaurant.create([{name: 'WTC Food Court', address: '285 Fulton St',latitude: 40.7115322, longitude: -74.0167379 }])
Restaurant.create([{name: 'Peter Kim BBQ', address: '229 W 28 St',latitude: 40.748346, longitude: -73.9961638 }])
Restaurant.create([{name: 'Rams Deli', address: '441 East Fordham Rd',latitude: 40.8586227, longitude: -73.8880667 }])
Restaurant.create([{name: 'Rancho Estrella', address: '616 E 187th St',latitude: 40.8551323, longitude: -73.8892581 }])
Restaurant.create([{name: 'Staten Island Soup Spot', address: '34 Baker St',latitude: 40.5737968, longitude: -74.1493022 }])
Restaurant.create([{name: 'Bella', address: '40 Queens Blvd',latitude: 40.7442052, longitude: -73.9265901 }])
Restaurant.create([{name: 'Risotto e Boccio', address: '43 Queens Blvd',latitude: 40.7433062, longitude: -73.9224616 }])
Restaurant.create([{name: 'Checkmate in Queens', address: '10 Utopia Pkwy',latitude: 40.7255828, longitude: -73.7941393}])
Restaurant.create([{name: 'Sweet Chick', address: '10 Utopia Pkwy',latitude: 40.67986932855128, longitude: -73.97645332888183}])
Restaurant.create([{name: "Big Danny's", address: '1400 Fulton St',latitude: 40.680317, longitude: -73.943119}])
Restaurant.create([{name: "Moftah", address: '413 E 84 St',latitude: 40.7752853, longitude: -73.9496612}])
Restaurant.create([{name: "Camila's", address: '2450 Broadway',latitude: 40.7910963, longitude: -73.9739914}])
Restaurant.create([{name: "Levi's", address: '167 W 74th St',latitude: 40.7790603, longitude: -73.9883463}])
Restaurant.create([{name: "Museum Dining", address: '200 Central Park W',latitude: 40.781018, longitude: -73.9760527}])
Restaurant.create([{name: "The Diner", address: '391 Amsterdam Ave',latitude: 40.7805188, longitude: -73.9783785}])
Restaurant.create([{name: "The Waterfront", address: '180 Riverside Dr',latitude: 40.774992, longitude: -73.944829}])
Restaurant.create([{name: "Jiro's", address: '1586 1st Ave',latitude: 40.7745479, longitude: -73.9529392}])
Restaurant.create([{name: "Church Grill", address: '1 Church St.',latitude: 40.804316, longitude: -73.953448}])
Restaurant.create([{name: "Joseph's", address: '311 East 60th St',latitude: 40.761600, longitude: -73.962350}])
Restaurant.create([{name: "STK by Sarjil", address: '1114 6th Ave',latitude: 40.754226, longitude: -73.980916}])
Restaurant.create([{name: "JaeSong", address: '1430 Broadway',latitude: 40.754024, longitude: -73.986274}])
Restaurant.create([{name: "Thai Guy", address: '135 Delancey St',latitude: 40.717608, longitude: -73.986999}])
Restaurant.create([{name: "Feng Ling", address: '615 W 173rd St',latitude: 40.844865, longitude: -73.938445}])
Restaurant.create([{name: "Pizza Party", address: '137 W 141st St',latitude: 40.818795, longitude: -73.940028}])
Restaurant.create([{name: "Taste of Delhi", address: '12 Rhinelander Ave',latitude: 40.851133, longitude: -73.855595}])
Restaurant.create([{name: "Not McDonald's", address: '11 White Plains Ln',latitude: 40.832355, longitude: -73.862331}])
Restaurant.create([{name: "Mamadeaux", address: '19 Sand Plains Ln',latitude: 40.844100, longitude: -73.848814}])
Restaurant.create([{name: "Carribean Jack", address: '5 Bronx Park E',latitude: 40.866431, longitude: -73.870103}])
Restaurant.create([{name: "Botanical Shack", address: '10 Botanical Rd',latitude: 40.859950, longitude: -73.877201}])
Restaurant.create([{name: "Versailles", address: '1300 Boynton Ave',latitude: 40.832493, longitude: -73.878777}])
Restaurant.create([{name: "Medieval Kitchen", address: '600 Leland Ave',latitude: 40.818281, longitude: -73.860446}])
Restaurant.create([{name: "Katana Robota", address: '100 Wilson Ave',latitude: 40.862357, longitude: -73.848651}])
Restaurant.create([{name: "Black Castle", address: '1038 Metcalf Ave',latitude: 40.825882, longitude: -73.871464}])
Restaurant.create([{name: "Bronx Zoo Cafe", address: '13 Bronx River Pkwy',latitude: 40.850255, longitude: -73.874614}])

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

lunch_7 = Lunch.create(name: 'Bulgogi Bowl', description: 'Pork and rice!', image_url: 'placeholder', size: 'large', restaurant_id: Restaurant.all[6].id)
file_7 = open('https://lunch-bud-seeds.s3.amazonaws.com/bulgogi.jpg')
lunch_7.photo.attach(io: file_7, filename: 'bulgogi.jpg')

lunch_8 = Lunch.create(name: 'Lamb Gyro', description: 'White Sauce/Hot Sauce', image_url: 'placeholder', size: 'large', restaurant_id: Restaurant.all[7].id)
file_8 = open('https://lunch-bud-seeds.s3.amazonaws.com/gyro.jpg')
lunch_8.photo.attach(io: file_8, filename: 'gyro.jpg')

lunch_9 = Lunch.create(name: 'Al Pastor Tacos', description: 'Delicioso',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[8].id)
file_9 = open('https://lunch-bud-seeds.s3.amazonaws.com/al_pastor.jpg')
lunch_9.photo.attach(io: file_9, filename: 'al_pastor.jpg')

lunch_10 = Lunch.create(name: 'Noodle Soup', description: 'Slurp Slurp',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[9].id)
file_10 = open('https://lunch-bud-seeds.s3.amazonaws.com/chicken_noods.jpg')
lunch_10.photo.attach(io: file_10, filename: 'chicken_noods.jpg')

lunch_11 = Lunch.create(name: 'Carbonara', description: 'Made with love',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[10].id)
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

lunch_16 = Lunch.create(name: 'Shwarma', description: 'HOT sauce',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[15].id)
file_16 = open('https://lunch-bud-seeds.s3.amazonaws.com/shwarma.jpg')
lunch_16.photo.attach(io: file_16, filename: 'shwarma.jpg')

lunch_17 = Lunch.create(name: 'Ziti', description: 'Perfection',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[16].id)
file_17 = open('https://lunch-bud-seeds.s3.amazonaws.com/ziti.jpg')
lunch_17.photo.attach(io: file_17, filename: 'ziti.jpg')

lunch_18 = Lunch.create(name: 'Lox Bagel', description: 'Toasted',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[17].id)
file_18 = open('https://lunch-bud-seeds.s3.amazonaws.com/lox.jpeg')
lunch_18.photo.attach(io: file_18, filename: 'lox.jpeg')

lunch_19 = Lunch.create(name: 'Dinosaur Bones', description: 'Ancient',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[18].id)
file_19 = open('https://lunch-bud-seeds.s3.amazonaws.com/dino.jpg')
lunch_19.photo.attach(io: file_19, filename: 'dinosaur.jpg')

lunch_20 = Lunch.create(name: 'Steak & Eggs', description: 'Protein filled!',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[19].id)
file_20 = open('https://lunch-bud-seeds.s3.amazonaws.com/steak_eggs.jpg')
lunch_20.photo.attach(io: file_20, filename: 'bacon.jpg')

lunch_21 = Lunch.create(name: 'Cod', description: 'Cheerio',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[20].id)
file_21 = open('https://lunch-bud-seeds.s3.amazonaws.com/cod.jpeg')
lunch_21.photo.attach(io: file_21, filename: 'fish_chips.jpg')

lunch_22 = Lunch.create(name: 'Omakase', description: 'Takeout Omakase',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[21].id)
file_22 = open('https://lunch-bud-seeds.s3.amazonaws.com/omakase.jpg')
lunch_22.photo.attach(io: file_22, filename: 'omakase.jpg')

lunch_23 = Lunch.create(name: 'Mini Hamburgers (3)', description: 'Best in town',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[22].id)
file_23 = open('https://lunch-bud-seeds.s3.amazonaws.com/mini_burger.jpeg')
lunch_23.photo.attach(io: file_23, filename: 'mini_burger.jpeg')

lunch_24 = Lunch.create(name: 'A Ton of Beer', description: 'Are you ok?',image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[23].id)
file_24 = open('https://lunch-bud-seeds.s3.amazonaws.com/beer.jpg')
lunch_24.photo.attach(io: file_24, filename: 'beer.jpg')

lunch_25 = Lunch.create(name: 'Filet Mignon', description: 'Medium Rare',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[24].id)
file_25 = open('https://lunch-bud-seeds.s3.amazonaws.com/steak.jpeg')
lunch_25.photo.attach(io: file_25, filename: 'steak.jpeg')

lunch_26 = Lunch.create(name: 'Soundcloud Salmon', description: 'Night Night',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[25].id)
file_26 = open('https://lunch-bud-seeds.s3.amazonaws.com/salmon.jpeg')
lunch_26.photo.attach(io: file_26, filename: 'salmon.jpeg')

lunch_27 = Lunch.create(name: 'Pad Thai', description: 'Spices on the side',image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[26].id)
file_27 = open('https://lunch-bud-seeds.s3.amazonaws.com/pad_thai.jpeg')
lunch_27.photo.attach(io: file_27, filename: 'pad_thai.jpeg')

lunch_28 = Lunch.create(name: 'Dim Sum', description: 'Shrimp Galore',image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[27].id)
file_28 = open('https://lunch-bud-seeds.s3.amazonaws.com/dimsum.jpeg')
lunch_28.photo.attach(io: file_28, filename: 'dimsum.jpeg')

lunch_29 = Lunch.create(name: 'Hawaiian Pizza', description: "Sweet and Salty",image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[28].id)
file_29 = open('https://lunch-bud-seeds.s3.amazonaws.com/hawaiian.jpeg')
lunch_29.photo.attach(io: file_29, filename: 'hawaiian.jpeg')

lunch_30 = Lunch.create(name: 'Chicken Tandoori', description: "Classic Indian Fare",image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[29].id)
file_30 = open('https://lunch-bud-seeds.s3.amazonaws.com/tandoori.jpeg')
lunch_30.photo.attach(io: file_30, filename: 'tandoori.jpeg')

lunch_31 = Lunch.create(name: 'Chicken MacNuggets', description: "Copyright Infringement?",image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[30].id)
file_31 = open('https://lunch-bud-seeds.s3.amazonaws.com/mcnuggets.jpeg')
lunch_31.photo.attach(io: file_31, filename: 'mcnuggets.jpeg')

lunch_32 = Lunch.create(name: 'Crawfish Etouffee', description: "Cajun Seafood",image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[31].id)
file_32 = open('https://lunch-bud-seeds.s3.amazonaws.com/etouffee.jpeg')
lunch_32.photo.attach(io: file_32, filename: 'etouffee.jpeg')

lunch_33 = Lunch.create(name: 'Pescados y Mariscos', description: "Carribean seafood",image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[32].id)
file_33 = open('https://lunch-bud-seeds.s3.amazonaws.com/pescados.jpeg')
lunch_33.photo.attach(io: file_33, filename: 'pescados.jpeg')

lunch_34 = Lunch.create(name: 'Garden Salad', description: "Healthy!",image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[33].id)
file_34 = open('https://lunch-bud-seeds.s3.amazonaws.com/garden_salad.jpg')
lunch_34.photo.attach(io: file_34, filename: 'garden_salad.jpg')

lunch_35 = Lunch.create(name: 'Escargot', description: "Bon apetit!",image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[34].id)
file_35 = open('https://lunch-bud-seeds.s3.amazonaws.com/escargot.jpeg')
lunch_35.photo.attach(io: file_35, filename: 'escargot.jpeg')

lunch_36 = Lunch.create(name: "King's Meat", description: "Ancient!",image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[35].id)
file_36 = open('https://lunch-bud-seeds.s3.amazonaws.com/medieval.jpeg')
lunch_36.photo.attach(io: file_36, filename: 'medieval.jpeg')

lunch_37 = Lunch.create(name: "Dragon Roll Sushi", description: "Tuna, salmon, avocado", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[36].id)
file_37 = open('https://lunch-bud-seeds.s3.amazonaws.com/dragon_roll.jpeg')
lunch_37.photo.attach(io: file_37, filename: 'dragon_roll.jpeg')

lunch_38 = Lunch.create(name: "Fish and Chips", description: "Not White Castle", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[37].id)
file_38 = open('https://lunch-bud-seeds.s3.amazonaws.com/fish_chips.jpg')
lunch_38.photo.attach(io: file_38, filename: 'fish_chips.jpg')

lunch_39 = Lunch.create(name: "Bison Burger", description: "Healthy Alternative", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[38].id)
file_39 = open('https://lunch-bud-seeds.s3.amazonaws.com/bison_burger.jpeg')
lunch_39.photo.attach(io: file_39, filename: 'bison_burger.jpeg')



