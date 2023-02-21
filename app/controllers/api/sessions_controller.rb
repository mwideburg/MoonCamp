class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )
        
        @bookings = @user.bookings
        @save = @user.saved
        
        if @user 
            login(@user)
            @user = current_user
            puts "::::::::::::::: @USER ::::::::::::::::"
            puts @user.saved
            render "api/users/show"
        else
            
             render json: [" Invalid Credentials "], status: 404
        end
    end

    def destroy 
        @user = current_user
        if current_user = nil
            render json: ['no current user'], status: 404
        else
            logout
            render "api/users/show"
        end
    end

 
end