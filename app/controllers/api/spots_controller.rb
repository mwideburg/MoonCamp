class Api::SpotsController < ApplicationController
    def index
        # 
        # @allSpots = Spot.all
        # @spots =  Spot.all
        # 
        
        # @spots = []
        
        # if params[:bounds]
        #     # 
        #     @allSpots.each do |spot| 
        #         if spot.in_bounds(bounds)
        #              @spots << spot
        #         end
        #     end
        # end
        if !params[:filters]

            spots = Spot.all
        else
        bounds = params[:filters][:bounds]
        spots = params[:filters][:bounds] ? Spot.in_bounds(bounds) : Spot.all
        # spots = spots.includes(:amenities)
        
        if params[:filters][:holodeck]
            # spots = spots.map(spot => spot.amenities)
            name = params[:filters][:holodeck]
            filter = spots.joins(:amenities).where(amenities: {name: name})
            
        end

        
        if params[:filters][:oxygen]
            
            name = params[:filters][:oxygen]
            spots = spots.joins(:amenities).where(amenities: {name: name})
        end
        if params[:filters][:phasers]
            
            name = params[:filters][:phasers]
            spots = spots.joins(:amenities).where(amenities: {name: name})
        end
        end
         @spots = spots
         @spots.includes(:saves)
        # if params[:filters]
        #     # Spot.findByAmenities(params[:filters][:amenities])
        #     #  @spots =  Spot.includes(:amenities).where('amenities = ?' => params[:filters][:amenities])
        #     # 
        #     if params[:filters][:bounds]
        #     # 
        #     bounds = params[:filters][:bounds]
        #     @allSpots.each do |spot| 
        #             if spot.in_bounds(bounds)
        #              @spots << spot
        #             end
        #         end
        #     end
            
        #     if params[:filters][:amenities] == "1"
            
        #     @spots = Spot.joins(:amenities).where(amenities: {name: "Holodeck"})
        #     end
        #     if params[:filters][:amenities] == "2"
                
        #     @spots = Spot.joins(:amenities).where(amenities: {name: "Spaceship"})
        #     end
        #     if params[:filters][:amenities] == "3"
                
        #     @spots = Spot.joins(:amenities).where(amenities: {name: "Phasers"})
        #     end
        #     if params[:filters][:amenities] == "4"
                
        #     @spots = Spot.where(planet: "Jupiter")
        #     end
        #     if params[:filters][:amenities] == "5"
                
        #     @spots = Spot.where(planet: "Saturn")
        #     end
        #     if params[:filters][:bookings]
        #             @filtered = []
        #             params[:filters][:bookings].each do |id|
        #                 spot = Spot.find(id.to_i)
        #                 @filtered << spot
        #             end
        #             @spots = @filtered
        #     end
            

            
        # end


        
        # 

        
 
        render :index
    end


    def show
        # 
        @spot = Spot.find(params[:id])
        
        @bookings = @spot.bookings
        @reviews = @spot.reviews
        # 
        

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