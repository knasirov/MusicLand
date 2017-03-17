Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show, :update]

    resources :tracks, only: [:index, :create, :show, :update, :destroy]
    
    resources :comments, only: [:create, :destroy]
  end

end
