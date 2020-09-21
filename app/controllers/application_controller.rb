class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in? 
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user 
    end
    def logout
        @current_user = current_user
        @current_user.reset_session_token!
        @current_user.session_token = nil
        session[:session_token] = nil
    end
    
    def current_user
        # debugger
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    
    def logged_in? 
        !!current_user
    end


    def require_logged_in 
        unless current_user 
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end
    
end
