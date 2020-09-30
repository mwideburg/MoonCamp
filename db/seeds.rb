# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Spot.destroy_all

michael = User.create({firstname: "michael", lastname: "wideburg", email: "michael@mooncamp.com", password: "michael", zipcode: 11206})
picard = User.create({firstname: "Jean-Luc", lastname: "Picard", email: "michael2@mooncamp.com", password: "michael", zipcode: 11206})
worf = User.create({firstname: "Worf", lastname: "Manson", email: "enterprise@startrek.com", password: "earlgrayhot", zipcode: 11206})
ender = User.create({firstname: "Ender", lastname: "Rudulph", email: "ender@mooncamp.com", password: "picard2", zipcode: 11206})
mars = User.create({firstname: "Mars", lastname: "Musk", email: "mars@mooncamp.com", password: "picard2", zipcode: 11206})
jupiter = User.create({firstname: "Jupiter", lastname: "Doyle", email: "jupiter@mooncamp.com", password: "picard2", zipcode: 11206})
robot = User.create({firstname: "100011011", lastname: "Boop", email: "robot@mooncamp.com", password: "picard2", zipcode: 11206})



# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  price       :integer          not null
#  title       :string           not null
#  moon        :string           not null
#  planet      :string           not null
#  description :string           not null
#  lng         :float            not null
#  lat         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
FILTERS = [
    "Space Base",
    "Ogygen Tanks",
    "Space Suits",
    "Vehicles",
    "Instant Book",


]


moon1 = Spot.create({
    host_id: worf.id, 
    price: 20, title: "Sirens of Titan", 
    moon: "Titan", 
    planet: "Saturn", 
    description:"Here is the famous resting place of mister Rutherford who traveled with his dog Kazzak. He banished his only son to live here with his mother, they both died eventually. I hate stories like this, pain, no glory, what a dismal end.",

    lat: 42.744099,
    lng: 90.881492

    

})
moon2 = Spot.create({
    host_id: picard.id, 
    price: 20, title: "Crators of Europa", 
    moon: "Europa", 
    planet: "Jupiter", 
    description:"I would love to welcome you to my humble abode, the craters of Europa... Here you can enjoy the view of Jupiter while also exporing giezers of hot acid. Jetpakcs are always available, and I would love to have some Earl gray with my company",
    lat: 30.783094, 
    lng: -90.176995

})
moon3 = Spot.create({
    host_id: picard.id, 
    price: 20, title: "Apollo Crater", 
    moon: "Castillo", 
    planet: "Jupiter", 
    description:"There are few places in this solar system that look as deadly as Apollo's Crator, explore your dark side. Let the darkness in and let the lightness dispate while staying in the demonic environment",
    lat: 20.067074,
    lng: -28.979488

})
moon4 = Spot.create({
    host_id: worf.id, 
    price: 20, title: "Worf's Battle Crater", 
    moon: "Castillo", 
    planet: "Jupiter", 
    description:"I have been heroicly hosting for 10 years now, and must say, I enjoy every minute of it, especially on my Battle Crator. Here you can enjoy fighting in my holodeck, sparing with the native aliens (don't worry they love it), and of course my culture and cuisine of Klingon",
    lat: 10.737122,
    lng: 0.834492


})
moon5 = Spot.create({
    host_id: ender.id, 
    price: 20, title: " Ender's Trondheim", 
    moon: "Endon", 
    planet: "Trondheim", 
    description:"I have been speaker of the dead for over 3000s human years on this quant moon of Trondheim. Here you will enjoy the native Pequeninos. And always, the buggers, the queen awaits",
    lat: 30.747112,
    lng: -10.812422


})
moon6 = Spot.create({
    host_id: mars.id, 
    price: 20, title: "God of War's Tent", 
    moon: "Mimas", 
    planet: "Saturn", 
    description:"I am not the best host, but you can stay here if you want. I do it just to get the free food bonus that Moon Camp provides. It's suppose to be for the guests, but I usually eat it.",
    lat: -5.787112,
    lng: -2.822492


})
moon7 = Spot.create({
    host_id: jupiter.id, 
    price: 20, title: "Zues's Overwatch", 
    moon: "Moon", 
    planet: "Earth", 
    description:"Afraid to travel the solar system? Want to stay in your own backyard, then I am here for you. Enjoy all things Earth, by staying at my little moon base",
    # lat: 42.717112,
    # lng: -87.892412
    lat: -60.717112,
    lng: -50.892412


})
moon8 = Spot.create({
    host_id: mars.id, 
    price: 20, title: "Mars's Europa", 
    moon: "Europa", 
    planet: "Jupiter", 
    description:"Well you have found my secret base on the moon of Europa, but will you survive the god of war? This place is for real survivors, and we all know I am a survior.",
    # lat: 42.717112,
    # lng: -87.892412
    lat: 10.717112,
    lng: -60.892412


})
moon9 = Spot.create({
    host_id: worf.id, 
    price: 20, title: "City of Klingopian", 
    moon: "Mimas", 
    planet: "Saturn", 
    description:"I started this base for the top warriors, it is my life's work. Do you have what it takes to defeat us klignons, I doubt it, but we never turn down a challenge",
    # lat: 42.717112,
    # lng: -87.892412
    lat: 60.717112,
    lng: 102


})
moon10 = Spot.create({
    host_id: picard.id, 
    price: 20, title: "Alien History", 
    moon: "Castillo", 
    planet: "Saturn", 
    description:"I find this place intruiging. I have found many archeoligical find here on Castillo, it shows the sign of a deeply cultured society from over 1 million years ago that were devasted by global warming and a war corrupt governemnt",
    # lat: 42.717112,
    # lng: -87.892412
    lat: 10,
    lng: -20


})
moon11 = Spot.create({
    host_id: picard.id, 
    price: 20, title: "Bio-dome on", 
    moon: "Titan", 
    planet: "Saturn", 
    description:"This place is a true eutopia! The bio-dome supplies the habbitants of this city with plenty of food and fresh potatoes, come stay with me and enjoy the finer things on Titan, not just worfs dismal holodeck",
    # lat: 42.717112,
    # lng: -87.892412
    lat: 10,
    lng: 50


})
moon12 = Spot.create({
    host_id: ender.id, 
    price: 20, title: "Buggers Cave", 
    moon: "Castillo", 
    planet: "Jupiter", 
    description:"They can read your mind with ease, and are not at all resentful of the humans destroying their entire society. I will show you the ways of the buggers, the ",
    # lat: 42.717112,
    # lng: -87.892412
    lat: 45,
    lng: 105


})
moon13 = Spot.create({
    host_id: robot.id, 
    price: 20, title: "Beep Boop", 
    moon: "Enceladus", 
    planet: "Saturn", 
    description:"beep boop, 1010000111000100010100010111110001011, beeeeep, booooooooopppp, 11101000000101010000110101",
    # lat: 42.717112,
    # lng: -87.892412
    lat: -77,
    lng: 300


})
moon14 = Spot.create({
    host_id: worf.id, 
    price: 20, title: "Worf's Holodeck on Encleladus", 
    moon: "Enceladus", 
    planet: "Saturn", 
    description:"Will you master the srt of war or will you fail like most. I have set up a whole story just you you campers to play out, with the comfort of not being harmed, but beware, it may not be physical pain you should worrry about.",
    # lat: 42.717112,
    # lng: -87.892412
    lat: -70,
    lng: -100


})





file1 = File.open('app/assets/images/dst-europa-base.jpg')
file2 = File.open('app/assets/images/europa_moon.jpg')
file3 = File.open('app/assets/images/space_base.jpg')
file4 = File.open('app/assets/images/moon_city.jpg')
file5 = File.open('app/assets/images/moon_guy.jpg')
file6 = File.open('app/assets/images/moon_men.jpg')
file7 = File.open('app/assets/images/jups_moon.jpg')
file8 = File.open('app/assets/images/mars_base.jpg')
file9 = File.open('app/assets/images/army_base.jpg')
file10 = File.open('app/assets/images/moon2_base.jpg')
file11 = File.open('app/assets/images/biodome.jpg')
file12 = File.open('app/assets/images/moon_cave.jpg')
file13 = File.open('app/assets/images/robot_man.jpg')
file14 = File.open('app/assets/images/matrix_holodeck.jpg')

moon1.photos.attach(io: file1, filename: 'dst-europa-base.jpg')
moon2.photos.attach(io: file2, filename: 'europa_moon.jpg')
moon3.photos.attach(io: file3, filename: 'space_base.jpg')
moon4.photos.attach(io: file4, filename: 'moon_city.jpg')
moon5.photos.attach(io: file5, filename: 'moon_guy.jpg')
moon6.photos.attach(io: file6, filename: 'moon_men.jpg')
moon7.photos.attach(io: file7, filename: 'jups_moon.jpg')
moon8.photos.attach(io: file8, filename: 'mars_base.jpg')
moon9.photos.attach(io: file9, filename: 'army_base.jpg')
moon10.photos.attach(io: file10, filename: 'moon2_base.jpg')
moon11.photos.attach(io: file11, filename: 'biodome.jpg')
moon12.photos.attach(io: file12, filename: 'moon_cave.jpg')
moon13.photos.attach(io: file13, filename: 'robot_man.jpg')
moon14.photos.attach(io: file14, filename: 'matrix_holodeck.jpg')

host_img1 = File.open('app/assets/images/hosts/patrick.jpg')
host_img6 = File.open('app/assets/images/hosts/worf.jpg')
host_img2 = File.open('app/assets/images/hosts/worf.jpg')
host_img3 = File.open('app/assets/images/hosts/jupier.jpg')
host_img4 = File.open('app/assets/images/hosts/mars.jpg')
host_img5 = File.open('app/assets/images/hosts/ender_speaker.jpg')
host_img7 = File.open('app/assets/images/hosts/robot.png')


michael.photo.attach(io: host_img6, filename: 'worf.jpg')
picard.photo.attach(io: host_img1, filename: 'patrick.jpg')
worf.photo.attach(io: host_img2, filename: 'worf.jpg')
jupiter.photo.attach(io: host_img3, filename: 'jupiter.jpg')
mars.photo.attach(io: host_img4, filename: 'mars.jpg')
ender.photo.attach(io: host_img5, filename: 'ender_speaker.jpg')
robot.photo.attach(io: host_img7, filename: 'robot.png.jpg')


moonGolf = Activity.create(name: "Moon Golf")
jetPacks = Activity.create(name: "Jet Packs")
roverRides = Activity.create(name: "Rover Rides")
astro = Activity.create(name: "Astro Baseball")
starWatch = Activity.create(name: "Star Watches")
spelunking = Activity.create(name: "Spelunking")
floating = Activity.create(name: "Floating")
holodeck = Activity.create(name: "Holodeck")
tea = Activity.create(name: "Tea with Picard")
food = Activity.create(name: "Klingon Meal")

holo = Amenity.create(name: "Holodeck")
phasers = Amenity.create(name: "Phasers")
spacesuits = Amenity.create(name: "Space suits")
oxygen = Amenity.create(name: "Oxygen")
water = Amenity.create(name: "Water")
telescope = Amenity.create(name: "Telescope")
spaceship = Amenity.create(name: "Spaceship")
toothpaste = Amenity.create(name: "Toothpaste")
hotdogs = Amenity.create(name: "Hot Dogs")
bed = Amenity.create(name: "Bed")


moon1.amenities = [holo, spacesuits, oxygen, hotdogs]
moon1.activities = [moonGolf, jetPacks, starWatch, floating]

moon2.amenities = [oxygen.id, spacesuits.id, water.id, spaceship.id, bed.id]
moon2.activities = [moonGolf.id, jetPacks.id, starWatch.id, floating.id, tea.id]


moon3.activities = [tea.id, jetPacks.id, astro.id]
moon3.amenities = [spacesuits.id, bed.id, toothpaste.id]


moon4.activities = [holodeck.id, jetPacks.id, food.id, floating.id]
moon4.amenities = [spacesuits.id, phasers.id, water.id, holo.id]

moon5.activities = [holodeck.id, jetPacks.id, food.id, floating.id]
moon5.amenities = [spacesuits.id, phasers.id, water.id, holo.id]


moon6.activities = [holodeck.id, jetPacks.id, food.id, floating.id]
moon6.amenities = [spacesuits.id, phasers.id, water.id, holo.id, spaceship.id]

moon7.activities = [holodeck.id, jetPacks.id, floating.id]
moon7.amenities = [spacesuits.id, phasers.id, water.id, holo.id]

moon8.activities = [holodeck.id, jetPacks.id, floating.id]
moon8.amenities = [spacesuits.id, phasers.id, water.id, holo.id]

moon9.activities = [holodeck.id, jetPacks.id, food.id, floating.id]
moon9.amenities = [spacesuits.id, phasers.id, water.id, holo.id, spaceship.id]

moon10.activities = [holodeck.id, jetPacks.id, floating.id, astro.id]
moon10.amenities = [spacesuits.id, phasers.id, water.id, holo.id, hotdogs.id]

moon11.activities = [holodeck.id, jetPacks.id, floating.id, astro.id]
moon11.amenities = [spacesuits.id, phasers.id, water.id, holo.id, spaceship.id, hotdog.id,toothpaste.id]

moon12.activities = [holodeck.id, jetPacks.id, food.id, floating.id]
moon12.amenities = [spacesuits.id, phasers.id, water.id, holo.id]

moon13.activities = [tea.id, jetPacks.id, astro.id]
moon13.amenities = [spacesuits.id, phasers.id, water.id, holo.id]

moon14.activities = [holodeck.id, jetPacks.id, food.id, floating.id]
moon14.amenities = [spacesuits.id, phasers.id, water.id, holo.id]
