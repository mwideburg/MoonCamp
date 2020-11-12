

json.extract! spot, :id, :description, :title, :lng, :lat, :price, :moon, :planet, :host_id, :max_guests, :rating, :num_reviews
json.photoUrls spot.photos.map { |file| url_for(file) }
json.amenities do 
    spot.amenities.each do |amenity|
            json.set! amenity.id do
                json.extract! amenity, :id, :name, :description
                json.photo url_for(amenity.photo)
            end
    end
end
json.activities spot.activities.map {|amenity| amenity}
json.bookings spot.bookings.map {|booking| booking}



