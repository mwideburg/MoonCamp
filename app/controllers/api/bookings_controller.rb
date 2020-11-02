class Api::BookingsController < ApplicationController
    before_action :require_logged_in

    def create
        @booking_request = Booking.new(booking_params)
        if @rental_request.save
            render `api/spots/#{@booking_request.spot_id}`
        else
        render json: @booking_request.errors.full_messages, status: 422
        end

    end

    def index


    end

    def show
        @booking_request = Booking.find(params[:id])
    end

    def update
        

    end

    

    private
    def booking_params 
        params.require(:booking).permit(:id, :start_date, :end_date, :spot_id, :user_id)
        
    end
end
