Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :bookings, only: [:index]
      resources :saves, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show]
    resources :amenities, only: [:index]
    resources :bookings, only: [:create, :destroy, :update, :show]
    resources :reviews, only: [:create, :destroy, :update, :show]
    resources :saves, only: [:index, :show, :create, :destroy]
  end
  
  resources :posts, only: [:show]
 
end
