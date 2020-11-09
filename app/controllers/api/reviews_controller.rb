class Api::ReviewsController < ApplicationController
    def create 
        @review = current_user.reviews.new(review_params)

        if @review.save 
            
            render "api/reviews/show"
        else
            # debugger
             render json: [" Invalid Credentials "], status: 404
        end
    end
    def update 
        @review = Review.find(params[:id])

        if @review.save 
            
            render "api/spots/show"
        else
            # debugger
             render json: [" Invalid Credentials "], status: 404
        end
    end
    :private
    def review_params 
        params.require(:review).permit(:user_id, :spot_id, :content)
        
    end
    
end
