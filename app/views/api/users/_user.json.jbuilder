
json.extract! user, :id, :firstname, :zipcode, :lastname, :created_at
if user.photo.attached?
json.photoUrl url_for(user.photo)
end
json.saved do
    user.saved.each do |save|
    json.set! save.id do
       
        json.photoUrls save.spot.photos.map { |file| url_for(file) }
        json.extract! save.spot, :id, :title, :description, :planet, :price, :rating, :num_reviews
        json.extract! save, :id, :spot_id, :user_id
        end
    end
end
json.bookings do 
    
    user.bookings.each do |booking|
            json.set! booking.id do
            json.spot do
                json.photo booking.spot.photos.map { |file| url_for(file) }
                json.extract! booking.spot, :id, :title, :description
                json.amenities do

                    booking.spot.amenities.each do |amen|
                    json.set! amen.id do
                        json.photo url_for(amen.photo)
                        json.extract! amen, :id, :description, :name
                        end
                    end
                end
            end
                json.extract! booking, :id, :start_date, :end_date, :spot_id, :host_id, :guests, :total
            end
    end
end
