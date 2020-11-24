class Api::SpotsController < ApplicationController
    def index
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
         @spots.includes(:saves, :activities)
       
 
        render :index
    end


    def show
        # 
        @spot = Spot.find(params[:id])
        
        @bookings = @spot.bookings
        @reviews = @spot.reviews
        @activites = @spot.activities
        
        render :show

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