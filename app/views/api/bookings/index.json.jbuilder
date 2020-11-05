@bookings.each do |booking|
    json.set! booking.id do
    json.extract! @booking_request, :id, :start_date, :end_date, :host_id, :user_id, :spot_id, :total, :guests
    end
end