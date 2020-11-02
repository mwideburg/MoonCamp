


json.spot do

  json.extract! @spot, :id, :description, :title, :lng, :lat, :price, :moon, :planet, :host_id
  json.photoUrls @spot.photos.map { |file| url_for(file) }
  json.amenities do 
    @spot.amenities.each do |amenity|
            json.set! amenity.id do
                json.extract! amenity, :id, :name
                json.photo url_for(amenity.photo)
            end
    end
end
json.activities do 
    @spot.activities.each do |activity|
            json.set! activity.id do
                json.extract! activity, :id, :name, :description
                json.photo url_for(activity.photo)
            end
    end
end
json.bookings do 
    @spot.bookings.each do |booking|
            json.set! booking.id do
                json.extract! booking, :id, :start_date, :end_date
            end
    end
end

end
