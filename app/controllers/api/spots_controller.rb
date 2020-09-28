class Api::SpotsController < ApplicationController
    def index
        # debugger
        @spots = Spot.all
        # debugger
        render :index
    end


    def show
        @spot = Spot.find(params[:id])


        # if @show
        #     render "api/spots/show"
        # else 
        #     render json: [" Invalid Credentials "], status: 404
        # end
        
    end


    # private
    # def spot_params
    #     params.require(:spot).permit(:host_id, :title, :descri)

 
end