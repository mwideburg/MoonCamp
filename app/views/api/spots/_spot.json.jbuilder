

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
json.activities do 
    spot.activities.each do |activity|
        json.set! activity.id do
            json.extract! activity, :id, :name, :description
            json.photo url_for(activity.photo)
        end
    end
end
json.bookings spot.bookings.map {|booking| booking}



