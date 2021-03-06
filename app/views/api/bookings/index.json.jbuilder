@bookings.each do |booking|
    json.set! booking.id do
    json.extract! @booking_request, :id, :start_date, :end_date, :host_id, :user_id, :spot_id, :total, :guests
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
    end
end