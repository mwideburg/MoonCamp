class Api::AmenitiesController < ApplicationController
   
    def show
        @spot = Spot.find(params[:id]).includes(:amenities)
        debugger
        if @spot
            @amenities
        end
        
    end
 
end