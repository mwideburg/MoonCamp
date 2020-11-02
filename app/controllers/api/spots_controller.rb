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
        
        if params[:filters]
            # Spot.findByAmenities(params[:filters][:amenities])
            #  @spots =  Spot.includes(:amenities).where('amenities = ?' => params[:filters][:amenities])
            # debugger
            if params[:filters][:amenities] == "1"
                
            @spots = Spot.joins(:amenities).where(amenities: {name: "Holodeck"})
            end
            if params[:filters][:amenities] == "2"
                
            @spots = Spot.joins(:amenities).where(amenities: {name: "Spaceship"})
            end
            if params[:filters][:amenities] == "3"
                
            @spots = Spot.joins(:amenities).where(amenities: {name: "Phasers"})
            end
            if params[:filters][:amenities] == "4"
                
            @spots = Spot.where(planet: "Jupiter")
            end
            if params[:filters][:amenities] == "5"
                
            @spots = Spot.where(planet: "Saturn")
            end

            
        end


        
        # debugger

        
        # debugger
        render :index
    end


    def show
        # debugger
        @spot = Spot.find(params[:id])
        @bookings = @spot.bookings
        # debugger
        

        # if @show
        #     render "api/spots/show"
        # else 
        #     render json: [" Invalid Credentials "], status: 404
        # end
        
    end


    # private
    def spot_params 
        params.require(:spot).permit(:id, :description, :lng, :lat, :bounds, :filters, :filter, :amenities)
        
    end

 
end