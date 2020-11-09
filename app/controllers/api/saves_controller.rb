class Api::SavesController < ApplicationController

    def index
        @saves = @current_user.saved
        render 'api/saves'

    end
    def create 
        @save = current_user.saved.new(save_params)
        @user = current_user
        
        
        if @save.save 
            
            render :show
        else
            # debugger
             render json: [" Invalid Credentials "], status: 404
        end
    end

    def destroy
        
        @save = Save.find(params[:id])
        @delSave = @save.dup
        @delSave.destroy
        
        render 'api/saves/show'
        
        
    end
    private
    def save_params 
        params.require(:save).permit(:id, :user_id, :spot_id)
        
    end



end