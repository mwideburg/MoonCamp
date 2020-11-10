class Api::AmenitiesController < ApplicationController
   
    def show
        @spot = Spot.find(params[:id]).includes(:amenities)
      
        if @spot
            @amenities
        end
        
    end
    def index
        @amenities = Amenity.all

        render :index
    end
 
end