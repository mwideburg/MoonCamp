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
picard = User.create({firstname: "michael", lastname: "wideburg", email: "michael2@mooncamp.com", password: "michael", zipcode: 11206})
picard2 = User.create({firstname: "Jean-luc", lastname: "Picard", email: "enterprise@startrek.com", password: "earlgrayhot", zipcode: 11206})
worf = User.create({firstname: "picard", lastname: "picard", email: "picard2@mooncamp.com", password: "picard2", zipcode: 11206})



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



europa = Spot.create({
    host_id: michael.id, 
    price: 20, title: "Sirens of Titan", 
    moon: "Titan", 
    planet: "Jupiter", 
    description:"Want to camp with Rutherfords son? This is the place for you, with little to worry about, you'll have fun gazing into Jupiters Red Dot",
    lat: 42.744099,
    lng: -87.881492

    

})
jupiter = Spot.create({
    host_id: picard2.id, 
    price: 20, title: "Crators of Europa", 
    moon: "Europa", 
    planet: "Jupiter", 
    description:"Want to camp with Rutherfords son? This is the place for you, with little to worry about, you'll have fun gazing into Jupiters Red Dot",
    lat: 42.740263, 
    lng: -87.879155

})
love = Spot.create({
    host_id: picard2.id, 
    price: 20, title: "Apollo Crator", 
    moon: "moon", 
    planet: "Earth", 
    description:"Want to camp with Rutherfords son? This is the place for you, with little to worry about, you'll have fun gazing into Jupiters Red Dot",
    lat: 42.739990,
    lng: -87.885452
     

})


fileO = File.open('app/assets/images/dst-europa-base.jpg')
fileT = File.open('app/assets/images/europa_moon.jpg')
fileE = File.open('app/assets/images/space_base.jpg')

europa.photos.attach(io: fileO, filename: 'dst-europa-base.jpg')
jupiter.photos.attach(io: fileT, filename: 'europa_moon.jpg')
love.photos.attach(io: fileE, filename: 'space_base.jpg')
