class Api::UsersController < ApplicationController
    def create 
        # debugger
        @user = User.new(user_params) 
        
        if @user.save 
            login(@user)
            render "api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params:id)
         if @user
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 402
        end
    end


    def user_params 
        params.require(:user).permit(:firstname, :lastname, :email, :password)
        
    end
end
