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
    description:"I am not the best host, but you can stay here if you want. I really do it just to get the free foot bonus that Moon Camp provides",
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

host_img1 = File.open('app/assets/images/hosts/patrick.jpg')
host_img6 = File.open('app/assets/images/hosts/worf.jpg')
host_img2 = File.open('app/assets/images/hosts/worf.jpg')
host_img3 = File.open('app/assets/images/hosts/jupier.jpg')
host_img4 = File.open('app/assets/images/hosts/mars.jpg')
host_img5 = File.open('app/assets/images/hosts/ender_speaker.jpg')


michael.photo.attach(io: host_img6, filename: 'worf.jpg')
picard.photo.attach(io: host_img1, filename: 'patrick.jpg')
worf.photo.attach(io: host_img2, filename: 'worf.jpg')
jupiter.photo.attach(io: host_img3, filename: 'jupiter.jpg')
mars.photo.attach(io: host_img4, filename: 'mars.jpg')
ender.photo.attach(io: host_img5, filename: 'ender_speaker.jpg')
