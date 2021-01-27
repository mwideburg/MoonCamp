class Api::SpotsController < ApplicationController
    def index
        if !params[:filters]

            spots = Spot.all
        else
            bounds = params[:filters][:bounds]
            spots = Spot.in_bounds(bounds)
            
            keys = params[:filters].keys
            if keys.length > 1
                if keys.include?("holodeck") && keys.include?("phasers") && keys.include?("oxygen")
                    spots = (spots.joins(:amenities).where(amenities: {name: "Holodeck"})).merge(spots.joins(:amenities).where(amenities: {name: "Phasers"})).merge(spots.joins(:amenities).where(amenities: {name: "Oxygen"}))
                    
                elsif keys.include?("holodeck") && keys.include?("phasers") 
                    spots = (spots.joins(:amenities).where(amenities: {name: "Holodeck"})).merge(spots.joins(:amenities).where(amenities: {name: "Phasers"}))
                    
                elsif keys.include?("holodeck") && keys.include?("oxygen") 
                    spots = (spots.joins(:amenities).where(amenities: {name: "Holodeck"})).merge(spots.joins(:amenities).where(amenities: {name: "Oxygen"}))
                    
                elsif keys.include?("oxygen") && keys.include?("phasers") 
                    spots = (spots.joins(:amenities).where(amenities: {name: "Oxygen"})).merge(spots.joins(:amenities).where(amenities: {name: "Phasers"}))
                    
                else
                        if keys[-1] == "holodeck"
                        name = params[:filters][:holodeck]
                        spots = (spots.joins(:amenities).where(amenities: {name: name}))
                        end
                        if keys[-1] == "oxygen"
                            name = params[:filters][:oxygen]
                            spots = (spots.joins(:amenities).where(amenities: {name: name}))
                        end
                        if keys[-1] == "phasers"
                            name = params[:filters][:phasers]
                            spots = (spots.joins(:amenities).where(amenities: {name: name}))
                        end
                end
            end
            # params[:filters].keys.each do |filter|
                
            #     if filter == "holodeck"
            #         name = params[:filters][:holodeck]
            #         spots = (spots.joins(:amenities).where(amenities: {name: name}))
            #     end
            #     if filter == "oxygen"
            #         name = params[:filters][:oxygen]
            #         spots = (spots.joins(:amenities).where(amenities: {name: name}))
            #     end
            #     if filter == "phasers"
            #         name = params[:filters][:phasers]
            #         spots = (spots.joins(:amenities).where(amenities: {name: name}))
            #     end
                 
            # end
            

           
            # if params[:filters][:holodeck]
            #     name = params[:filters][:holodeck]
            #     spots = spots.joins(:amenities).where(amenities: {name: name})  
            # end

            
            # if params[:filters][:oxygen]
                
            #     name = params[:filters][:oxygen]
            #     spots = spots.joins(:amenities).where(amenities: {name: name})
            # end
            # if params[:filters][:phasers]
                    
            #     name = params[:filters][:phasers]
            #     spots = spots.joins(:amenities).where(amenities: {name: name})
            # end
            
            
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