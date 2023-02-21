class Api::SavesController < ApplicationController

    def index
        @user = User.find(params[:user_id])
        console.log("::::: SAVED SPOT", )
        render 'api/saves'

    end

    def show
        @saves = Booking.find(params[:id])
        
        render 'api/saves/show'
    end
    def create 
        @save = current_user.saved.new(save_params)
        @user = current_user
        
        
        if @save.save 
            
            render :show
        else
            # 
             render json: [" Invalid Credentials "], status: 404
        end
    end

    def destroy
        
        @delSave = Save.find(params[:id])
        @save = @delSave
        @delSave.destroy
        
        render 'api/saves/show'
        
        
    end
    private
    def save_params 
        params.require(:save).permit(:id, :user_id, :spot_id)
        
    end



end