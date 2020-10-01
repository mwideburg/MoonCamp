class Api::SpotsController < ApplicationController
    def index
        # debugger
        @allSpots = Spot.all
        # @spots =  Spot.all
        # debugger
        bounds = params[:bounds]
        @spots = []
        if params[:bounds]
            # debugger
            @allSpots.each do |spot| 
                if spot.in_bounds(bounds)
                     @spots << spot
                end
            end
        end

        # debugger

        
        # debugger
        render :index
    end


    def show
        # debugger
        @spot = Spot.find(params[:id])
        
        # debugger
        

        # if @show
        #     render "api/spots/show"
        # else 
        #     render json: [" Invalid Credentials "], status: 404
        # end
        
    end


    # private
    def spot_params 
        params.require(:bench).permit(:id, :description, :lng, :lat, :bounds)
        
    end

 
end