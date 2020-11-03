json.partial! 'api/users/user', user: @user


json.bookings do 
    @user.bookings.each do |booking|
            json.set! booking.id do
                json.extract! booking, :id, :start_date, :end_date, :spot_id, :host_id
            end
    end
end

