Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show]
    resource :amenities, only: [:index]
    resources :bookings, only: [:create, :destory, :update, :index, :show]
  end
  
  resources :posts, only: [:show]
 
end
