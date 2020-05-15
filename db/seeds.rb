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
Restaurant.create([{name: "Escalante's", address: '50 Jefferson Ave',latitude: 40.682029, longitude: -73.955672}])
Restaurant.create([{name: "Jo's Ramen", address: '18 President Ave',latitude: 40.666071, longitude: -73.930224}])
Restaurant.create([{name: "Rich's Seafood", address: '186 Lefferts Blvd',latitude: 40.661743, longitude: -73.954925}])
Restaurant.create([{name: "Chilean Charlie", address: '1st and Jeffrey',latitude: 40.689144, longitude: -73.938582}])
Restaurant.create([{name: "The Jade Warrior", address: '10 Crown Heights',latitude: 40.664398, longitude: -73.936359}])
Restaurant.create([{name: "Flatbush Flapjacks", address: '1 East Flatbush',latitude: 40.656767, longitude: -73.932198}])
Restaurant.create([{name: "Aunty Flo", address: '810 St Marks Pl',latitude: 40.674911, longitude: -73.946312}])
Restaurant.create([{name: "Ernie's", address: "12 Beekman St",latitude: 40.660854, longitude: -73.957599}])
Restaurant.create([{name: "Chik Filet", address: "1 Union Ave",latitude: 40.706387, longitude: -73.951117}])
Restaurant.create([{name: "Mexican Taste", address: "66 Parsons Blvd",latitude: 40.734344, longitude: -73.810545}])
Restaurant.create([{name: "Asia Taste", address: "10 Flushing St",latitude: 40.736188, longitude: -73.789873}])
Restaurant.create([{name: "KenTing", address: "12 Jamaica St",latitude: 40.721740, longitude: -73.799802}])
Restaurant.create([{name: "Mexican Mateo", address: "20 Claire St",latitude: 40.703152, longitude: -73.801139}])
Restaurant.create([{name: "Lily's Pad", address: "8 Longmire Rd",latitude: 40.728074, longitude: -73.776480}])
Restaurant.create([{name: "Johnny Donato", address: "2460 Hoffman St",latitude: 40.753756, longitude: -73.798443}])
Restaurant.create([{name: "Healthy Green", address: "10 Fresh Meadows Ave",latitude: 40.736964, longitude: -73.780944}])
Restaurant.create([{name: "Sushi Jin", address: "18 Rancho Bauer Dr",latitude: 40.701063, longitude: -73.807814}])
Restaurant.create([{name: "Chinese Charlie", address: "1 Chelsea Dr",latitude: 40.716938, longitude: -73.778803}])
Restaurant.create([{name: "Billy Bob's BBQ", address: "20 Kanteen Rd",latitude: 40.753020, longitude: -73.781223}])
Restaurant.create([{name: "Dan Lee's", address: "12 Codename Blvd",latitude: 40.585591, longitude: -74.146914}])
Restaurant.create([{name: "Blue Mountain", address: "15 Montague Rd",latitude: 40.568722, longitude: -74.156967}])
Restaurant.create([{name: "Rory Diner", address: "15 Montague Rd",latitude: 40.582155, longitude: -74.127688}])
Restaurant.create([{name: "Petey D Subs", address: "1 SNL Rd",latitude: 40.571354, longitude: -74.143412}])
Restaurant.create([{name: "Space Cafe", address: "12 NASA Dr",latitude: 40.583191, longitude: -74.161620}])
Restaurant.create([{name: "Itallion Stallion", address: "8 Jupiter Way",latitude: 40.557014, longitude: -74.133021}])
Restaurant.create([{name: "Ketofuel Kitchen", address: "90 Grack Rd",latitude: 40.576196, longitude: -74.143458}])
Restaurant.create([{name: "Hunter's Alley", address: "900 Ply Rd",latitude: 40.563889, longitude: -74.155861}])
Restaurant.create([{name: "Wingz 'N Thingz", address: "22 Jump St",latitude: 40.551980, longitude: -74.151458}])
Restaurant.create([{name: "Finer Diner", address: "9 Kensington Rd",latitude: 40.570682, longitude: -74.133018}])
Restaurant.create([{name: "Wonton Don", address: "13 Carlo Way",latitude: 40.567443, longitude: -74.144194}])
Restaurant.create([{name: "Landry's", address: "5 Houston St",latitude: 40.606655, longitude: -74.144158}])

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

lunch_40 = Lunch.create(name: "Burritos Deluxe", description: "Grande Mexican Dish", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[39].id)
file_40 = open('https://lunch-bud-seeds.s3.amazonaws.com/burrito.jpeg')
lunch_40.photo.attach(io: file_40, filename: 'burrito.jpeg')


lunch_41 = Lunch.create(name: "Tonkotsu Ramen", description: "Pork broth (Japanese)", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[40].id)
file_41 = open('https://lunch-bud-seeds.s3.amazonaws.com/ramen.jpeg')
lunch_41.photo.attach(io: file_41, filename: 'ramen.jpeg')





lunch_42 = Lunch.create(name: "Scallops and Shrimp", description: "Better than Jo's", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[41].id)
file_42 = open('https://lunch-bud-seeds.s3.amazonaws.com/shrimp_scallops.png')
lunch_42.photo.attach(io: file_42, filename: 'shrimp_scallops.png')



lunch_43 = Lunch.create(name: "Chilean Fried Rice", description: "Asian/S. American fusion", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[42].id)
file_43 = open('https://lunch-bud-seeds.s3.amazonaws.com/chilean_fried_rice.jpeg')
lunch_43.photo.attach(io: file_43, filename: 'chilean_fried_rice.jpeg')

lunch_44 = Lunch.create(name: "Pork Belly", description: "Classic Chinese Dish", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[43].id)
file_44 = open('https://lunch-bud-seeds.s3.amazonaws.com/fatty_pork.jpeg')
lunch_44.photo.attach(io: file_44, filename: 'fatty_pork.jpeg')

lunch_45 = Lunch.create(name: "Flapjacks", description: "Like pancakes", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[44].id)
file_45 = open('https://lunch-bud-seeds.s3.amazonaws.com/flapjacks.jpg')
lunch_45.photo.attach(io: file_45, filename: 'flapjacks.jpg')

lunch_46 = Lunch.create(name: "Latkes", description: "potato-based", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[45].id)
file_46 = open('https://lunch-bud-seeds.s3.amazonaws.com/latkes.jpg')
lunch_46.photo.attach(io: file_46, filename: 'latkes.jpg')

lunch_47 = Lunch.create(name: "Roast Beef Sandwich", description: "Almost a burger", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[46].id)
file_47 = open('https://lunch-bud-seeds.s3.amazonaws.com/roast_beef.jpg')
lunch_47.photo.attach(io: file_47, filename: 'roast_beef.jpg')

lunch_48 = Lunch.create(name: "Chicken Sandwich", description: "Chicken and Cheese", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[47].id)
file_48 = open('https://lunch-bud-seeds.s3.amazonaws.com/chicken_sandwich.jpg')
lunch_48.photo.attach(io: file_48, filename: 'chicken_sandwich.jpg')


lunch_49 = Lunch.create(name: "Guacamole", description: "Appetizer", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[48].id)
file_49 = open('https://lunch-bud-seeds.s3.amazonaws.com/guac.jpg')
lunch_49.photo.attach(io: file_49, filename: 'guac.jpg')

lunch_50 = Lunch.create(name: "Mapo Tofu", description: "Classic Chinese", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[49].id)
file_50 = open('https://lunch-bud-seeds.s3.amazonaws.com/mapo.jpeg')
lunch_50.photo.attach(io: file_50, filename: 'mapo.jpeg')

lunch_51 = Lunch.create(name: "Pork Buns", description: "Steamed pork buns", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[50].id)
file_51 = open('https://lunch-bud-seeds.s3.amazonaws.com/steamed_pork.jpeg')
lunch_51.photo.attach(io: file_51, filename: 'steamed_pork.jpeg')

lunch_52 = Lunch.create(name: "Tacos de bistec", description: "Steak Tacos!", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[51].id)
file_52 = open('https://lunch-bud-seeds.s3.amazonaws.com/tacos.jpeg')
lunch_52.photo.attach(io: file_52, filename: 'tacos.jpeg')

lunch_53 = Lunch.create(name: "Full Turkey", description: "Best deal on Lunchbud", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[52].id)
file_53 = open('https://lunch-bud-seeds.s3.amazonaws.com/turkey.jpg')
lunch_53.photo.attach(io: file_53, filename: 'turkey.jpg')

lunch_54 = Lunch.create(name: "Prawn Spaghetti", description: "Italian!", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[53].id)
file_54 = open('https://lunch-bud-seeds.s3.amazonaws.com/prawn_pasta.jpeg')
lunch_54.photo.attach(io: file_54, filename: 'prawn_pasta.jpeg')

lunch_55 = Lunch.create(name: "Green salad", description: "Healthy!", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[54].id)
file_55 = open('https://lunch-bud-seeds.s3.amazonaws.com/fresh_salad.jpg')
lunch_55.photo.attach(io: file_55, filename: 'fresh_salad.jpeg')

lunch_56 = Lunch.create(name: "Salmon Avocado", description: "Sushi", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[55].id)
file_56 = open('https://lunch-bud-seeds.s3.amazonaws.com/salmon_avocado.jpg')
lunch_56.photo.attach(io: file_56, filename: 'salmon_avocado.jpg')

lunch_57 = Lunch.create(name: "Eggrolls", description: "pork and veggies", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[56].id)
file_57 = open('https://lunch-bud-seeds.s3.amazonaws.com/eggrolls.jpeg')
lunch_57.photo.attach(io: file_57, filename: 'eggrolls.jpeg')

lunch_58 = Lunch.create(name: "Pulled Pork Sammy", description: "BBQ Sandwich", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[57].id)
file_58 = open('https://lunch-bud-seeds.s3.amazonaws.com/pulled_pork.jpg')
lunch_58.photo.attach(io: file_58, filename: 'pulled_pork.jpg')

lunch_59 = Lunch.create(name: "Pufferfish", description: "Dangerous, not sushi", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[58].id)
file_59 = open('https://lunch-bud-seeds.s3.amazonaws.com/pufferfish.jpg')
lunch_59.photo.attach(io: file_59, filename: 'pufferfish.jpg')

lunch_60 = Lunch.create(name: "Maple Cremee", description: "Ice Cream", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[59].id)
file_60 = open('https://lunch-bud-seeds.s3.amazonaws.com/ice_cream.jpg')
lunch_60.photo.attach(io: file_60, filename: 'ice_cream.jpg')

lunch_61 = Lunch.create(name: "Grilled Cheese", description: "Sandwich", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[60].id)
file_61 = open('https://lunch-bud-seeds.s3.amazonaws.com/grilled_cheese.jpg')
lunch_61.photo.attach(io: file_61, filename: 'grilled_cheese.jpg')

lunch_62 = Lunch.create(name: "Macaroni & Cheese", description: "Cheesy", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[61].id)
file_62 = open('https://lunch-bud-seeds.s3.amazonaws.com/macaroni.jpg')
lunch_62.photo.attach(io: file_62, filename: 'macaroni.jpg')

lunch_63 = Lunch.create(name: "Caprese Salad", description: "Italian classic", image_url: 'placeholder' ,size: 'small',restaurant_id: Restaurant.all[62].id)
file_63 = open('https://lunch-bud-seeds.s3.amazonaws.com/caprese.jpg')
lunch_63.photo.attach(io: file_63, filename: 'caprese.jpg')

lunch_64 = Lunch.create(name: "Grilled Chicken and yams", description: "850 Calories", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[63].id)
file_64 = open('https://lunch-bud-seeds.s3.amazonaws.com/chicken_yams.jpg')
lunch_64.photo.attach(io: file_64, filename: 'chicken_yams.jpg')

lunch_65 = Lunch.create(name: "Venison", description: "Organic, grilled", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[64].id)
file_65 = open('https://lunch-bud-seeds.s3.amazonaws.com/venison.jpg')
lunch_65.photo.attach(io: file_65, filename: 'venison.jpg')

lunch_66 = Lunch.create(name: "Buffalo Wings", description: "Wingz, not thingz", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[65].id)
file_66 = open('https://lunch-bud-seeds.s3.amazonaws.com/wings.jpeg')
lunch_66.photo.attach(io: file_66, filename: 'wings.jpeg')

lunch_67 = Lunch.create(name: "Omelette", description: "4 eggs", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[66].id)
file_67 = open('https://lunch-bud-seeds.s3.amazonaws.com/omelette.jpg')
lunch_67.photo.attach(io: file_67, filename: 'omelette.jpg')

lunch_68 = Lunch.create(name: "Shrimp Wontons", description: "Wonton", image_url: 'placeholder' ,size: 'medium',restaurant_id: Restaurant.all[67].id)
file_68 = open('https://lunch-bud-seeds.s3.amazonaws.com/wonton.jpg')
lunch_68.photo.attach(io: file_68, filename: 'wonton.jpg')

lunch_69 = Lunch.create(name: "Steak and Shrimp", description: "Surf and Turf", image_url: 'placeholder' ,size: 'large',restaurant_id: Restaurant.all[68].id)
file_69 = open('https://lunch-bud-seeds.s3.amazonaws.com/surf_and_turf.jpg')
lunch_69.photo.attach(io: file_69, filename: 'surf_and_turf.jpg')































