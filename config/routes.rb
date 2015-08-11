Rails.application.routes.draw do
  #need this to work for API-only backend
  # devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users, :controllers => {:registrations => "registrations",
                              :sessions => "sessions", omniauth_callbacks: "omniauth_callbacks" }

  api_version(:module => "V1", :path => {:value => "v1"}, :defaults => {:format => "json"}) do
    # devise_scope :user do
    #   resource :session, :only => [:create, :destroy]
    #   resource :registration, :only => [:create]
    # end

    resources :locations
  end

  root "angular_templates#index"
  get '*path' => 'angular_templates#index'
end
