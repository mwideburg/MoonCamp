class Api::UsersController < ApplicationController
    def create 
        # debugger
        @user = User.new(user_params) 
        # debugger
        if @user.save
            login(@user)
            render "api/users/show"
        else 
            # debugger
            # flash.now[:error] = @user.errors.full_messages
            render json: @user.errors.full_messages, status: 422
            # render json: ["Invalid Credentials"], status: 404
            # render json: ["ERRORS"], status: 422
        end
    end

    def show
        
        @user = User.find(params[:id])
       
        @bookings = @user.bookings
        @save = @user.saved
        
         if @user
            render "api/users/show"
        else
            # flash.now[:error] = @user.errors.full_messages
            render json: @user.errors.full_messages, status: 402
        end
    end


    def user_params 
        params.require(:user).permit(:firstname, :lastname, :email, :password, :zipcode)
        
    end
end
