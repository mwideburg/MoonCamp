
json.extract! spot, :id, :description, :title, :lng, :lat, :price, :moon, :planet, :host_id, :max_guests
json.photoUrls spot.photos.map { |file| url_for(file) }
json.amenities spot.amenities.map {|amenity| amenity}
json.activities spot.activities.map {|amenity| amenity}
json.bookings spot.bookings.map {|booking| booking}

